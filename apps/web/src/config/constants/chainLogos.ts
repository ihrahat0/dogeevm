import { ChainId } from '@pancakeswap/chains'

export const CHAIN_LOGOS = {
  [ChainId.ETHEREUM]: '/images/chains/ethereum.png',
  [ChainId.BSC]: '/images/chains/bsc.png',
  [ChainId.POLYGON_ZKEVM]: '/images/chains/polygon-zkevm.png', // 1101
  [ChainId.ZKSYNC]: '/images/chains/zksync.png', // 324
  [ChainId.ARBITRUM_ONE]: '/images/chains/arbitrum.png', // 42161
  [ChainId.LINEA]: '/images/chains/linea.png', // 59144
  [ChainId.BASE]: '/images/chains/base.png', // 8453
  [ChainId.OPBNB]: '/images/chains/opbnb.png', // 204
} as const 