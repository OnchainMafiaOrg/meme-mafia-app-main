import { Token } from "@/types/Token";
import {bsc, bscTestnet} from "viem/chains";

export const tokenList: Token[] = [
  {
    chainId: bscTestnet.id,
    symbol: "tBNB",
    name: "Binance",
    address: undefined,
    logoURI: "/images/tokens/bnb.svg",
    decimals: 18,
  },
  {
    chainId: bscTestnet.id,
    symbol: "WBNB",
    name: "Binance",
    address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    logoURI: "/images/tokens/bnb.svg",
    decimals: 18,
  },
  {
    chainId: bscTestnet.id,
    symbol: "USDT",
    name: "Tether USD",
    address: "0x7A2A9e4C97D1f33196EAEA5D3887f4FfBa2831Dd",
    logoURI: "/images/tokens/usdt.svg",
    decimals: 18,
  },
  {
    chainId: bscTestnet.id,
    symbol: "USDC",
    name: "USD Coin",
    address: "0xE8d5864d5fb439b53e44a122540610401C2805C3",
    logoURI: "/images/tokens/usdc.svg",
    decimals: 18,
  },
  {
    chainId: bsc.id,
    symbol: "ETH",
    name: "Binance-Peg Ethereum Token",
    address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    logoURI: "/images/tokens/eth.svg",
    decimals: 18,
  },
  {
    chainId: bsc.id,
    symbol: "USDT",
    name: "Tether USD",
    address: "0x55d398326f99059ff775485246999027b3197955",
    logoURI: "/images/tokens/usdt.svg",
    decimals: 18,
  },
];
