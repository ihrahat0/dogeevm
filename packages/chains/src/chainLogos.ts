import { ChainId } from './chainId'

export const CHAIN_LOGOS: Partial<Record<ChainId, string>> = {
  [ChainId.ETHEREUM]: '/chains/ethereum.webp',
  [ChainId.BSC]: '/chains/bnb.webp',
  [ChainId.POLYGON_ZKEVM]: '/chains/polygon.webp',
  [ChainId.ZKSYNC]: '/chains/zksync.png',
  [ChainId.ARBITRUM_ONE]: '/chains/arbitrum.webp',
  [ChainId.LINEA]: '/chains/linea.png',
  [ChainId.BASE]: '/chains/base.png',
  [ChainId.OPBNB]: '/chains/bnb.webp',
} as const

export const getChainLogoUrl = (chainId: number | undefined) => {
  if (!chainId) return '/images/chains/unknown.png'
  return `/images${CHAIN_LOGOS[chainId as ChainId] || `/chains/${chainId}.png`}`
} 