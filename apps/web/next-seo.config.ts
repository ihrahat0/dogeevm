import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Dogeswap',
  defaultTitle: 'Dogeswap',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@Dogeswap_',
    site: '@Dogeswap_',
  },
  openGraph: {
    title: "🥞 Dogeswap - Everyone's Favorite DEX",
    description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
  },
}
