import { bsc, bscTestnet } from "viem/chains";

const config = {
  chains: [bsc, bscTestnet],

  routerV2Address: {
    [bscTestnet.id]: "0xd99d1c33f9fc3444f8101754abc46c52416550d1",
    [bsc.id]: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  } as Record<number, `0x${string}`>,

  factoryV2Address: {
    [bscTestnet.id]: "0x6725F303b657a9451d8BA641348b6761A6CC7a17",
    [bsc.id]: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
  } as Record<number, `0x${string}`>,

  swapAddress: {
    [bscTestnet.id]: "0xE960DD0785Ec63DF20c6000D382C9F04FEd85FD0",
    [bsc.id]: "0xA740db59F5f172FF82F6EBFa9c68FcC37385BbF2",
  } as Record<number, `0x${string}`>,

  WETH: {
    [bscTestnet.id]: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    [bsc.id]: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  } as Record<number, `0x${string}`>,
};

export default config;
