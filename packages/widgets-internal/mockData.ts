import { ChainId } from "@pancakeswap/chains";
import { ERC20Token } from "@pancakeswap/sdk";

// For StoryBook
export const cakeToken = new ERC20Token(
  ChainId.BSC,
  "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
  18,
  "CAKE",
  "PancakeSwap Token",
  "https://dogeswap.co/evm//"
);

export const bscToken = new ERC20Token(
  ChainId.BSC,
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  18,
  "BNB",
  "BNB",
  "https://www.binance.com/"
);
