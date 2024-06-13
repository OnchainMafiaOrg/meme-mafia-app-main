import { toast } from "react-toastify";
import useCurrentChain from "./useCurrentChain";
import { Token } from "../types/Token";
import { erc20ABI, useAccount } from "wagmi";
import {
  getContract,
  parseUnits,
  formatUnits,
  zeroAddress,
} from "viem";
import useWeb3Clients from "./useWeb3Clients";
import useContracts from "./useContracts";
import useUserStore from "@/store/user-store";
import { MAX_UINT256 } from "@/lib/utils";
import config from "@/config";

const useWeb3Functions = () => {
  const chain = useCurrentChain();
  const { address } = useAccount();
  const { publicClient, walletClient } = useWeb3Clients();
  const { swapContract } = useContracts();
  const { slippageTolerance, txDeadline } = useUserStore();

  const getAmountFromTo = async (
    amount: string,
    tokenFrom: Token,
    tokenTo: Token
  ) => {
    if (!tokenFrom || !tokenTo) return 0;
    const weth = config.WETH[chain.id];
    try {
      const tokenAmount = await swapContract.read.getOutputTokenAmount([
        parseUnits(amount, tokenFrom.decimals),
        [tokenFrom.address || weth, tokenTo.address || weth],
      ]);

      return formatUnits(tokenAmount, tokenTo.decimals);
    } catch (e) {
      console.log(e);
    }
  };

  const checkAllowance = async (token: Token, amount: bigint) => {
    if (!address || !walletClient || !token.address) return;

    const tokenContract = getContract({
      abi: erc20ABI,
      address: token.address,
      publicClient: publicClient,
      walletClient: walletClient || undefined,
    });
    const allowance = await tokenContract.read.allowance([
      address,
      swapContract.address,
    ]);

    if (allowance < amount) {
      const hash = await tokenContract.write.approve(
        [swapContract.address, MAX_UINT256],
        { account: address }
      );

      await publicClient.waitForTransactionReceipt({ hash });
      toast.success(`${token.symbol} spend approved successfully`);
    }
  };

  const checkIfTokenHaveFeeOnTransfer = async (
    args: readonly [`0x${string}`, `0x${string}`, bigint, bigint, bigint],
    options: { account: `0x${string}`; value: bigint | undefined }
  ) => {
    const estimateGas = await Promise.all([
      swapContract.estimateGas
        .swapTokens([...args, false], options)
        .then(() => false)
        .catch(() => undefined),
      swapContract.estimateGas
        .swapTokens([...args, true], options)
        .then(() => true)
        .catch(() => undefined),
    ]);

    return estimateGas.find((g) => g !== undefined);
  };

  const swap = async (
    valueFrom: string,
    valueTo: string,
    tokenFrom: Token,
    tokenTo: Token
  ) => {
    if (!address || !walletClient) return;

    try {
      const block = await publicClient.getBlock();
      const deadline = BigInt(Number(block.timestamp) + 60 * txDeadline);
      const amount = parseUnits(valueFrom, tokenFrom.decimals);
      const amountOutMin =
        (parseUnits(valueTo, tokenTo.decimals) *
          BigInt(slippageTolerance * 100)) /
        10000n;

      const fromAddress =
        !tokenFrom.address || tokenFrom.symbol === chain.nativeCurrency.symbol
          ? zeroAddress
          : tokenFrom.address;
      const toAddress =
        !tokenTo.address || tokenTo.symbol === chain.nativeCurrency.symbol
          ? zeroAddress
          : tokenTo.address;

      if (tokenFrom.symbol !== chain.nativeCurrency.symbol) {
        checkAllowance(tokenFrom, amount);
      }

      const args = [
        fromAddress,
        toAddress,
        amount,
        amountOutMin,
        deadline,
      ] as const;

      const options = {
        account: address,
        value:
          tokenFrom.symbol === chain.nativeCurrency.symbol ? amount : undefined,
      };

      const feeOnTransfer = await checkIfTokenHaveFeeOnTransfer(args, options);
      if (feeOnTransfer === undefined) {
        toast.error("Something went wrong, please try again!");
        return;
      }

      const { request } = await swapContract.simulate.swapTokens(
        [...args, feeOnTransfer],
        options
      );

      const hash = await walletClient.writeContract(request);

      return hash;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(
        error?.walk?.().message ||
          error?.message ||
          "Signing failed, please try again!"
      );
    }
  };

  const addTokenAsset = async (token?: Token) => {
    if (!token || !walletClient || !token.address) return;
    try {
      await walletClient?.watchAsset({
        type: "ERC20",
        options: {
          address: token.address,
          symbol: token?.symbol,
          decimals: token.decimals ?? 18,
          image:
            token.logoURI &&
            (token.logoURI.includes("http")
              ? token.logoURI
              : `${window.location.origin}${token.logoURI}`),
        },
      });
      toast.success("Token imported to metamask successfully");
    } catch (e) {
      toast.error("Token import failed");
    }
  };


  return {
    swap,
    addTokenAsset,
    checkAllowance,
    getAmountFromTo,
  };
};

export default useWeb3Functions;
