import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems, EarnFillIcon, EarnIcon, MenuItemsType, SwapFillIcon, SwapIcon } from '@pancakeswap/uikit'
import { SUPPORT_FARMS } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & {
  hideSubNav?: boolean
  overrideSubNavItems?: DropdownMenuItems['items']
  matchHrefs?: string[]
}
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & {
  hideSubNav?: boolean
  image?: string
  items?: ConfigMenuDropDownItemsType[]
  overrideSubNavItems?: ConfigMenuDropDownItemsType[]
}

export const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/',
      hideSubNav: true,
    },
    {
      label: t('Pool'),
      href: '/liquidity/pools',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      supportChainIds: SUPPORT_FARMS,
      matchHrefs: ['/liquidity/positions', '/farms'],
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
