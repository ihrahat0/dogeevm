import { languageList, useTranslation } from '@pancakeswap/localization'
import { Flex, Text, Menu as UikitMenu } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useDogePrice } from 'hooks/useDogePrice'
import useTheme from 'hooks/useTheme'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import GlobalSettings from './GlobalSettings'
import { SettingsMode } from './GlobalSettings/types'
import UserMenu from './UserMenu'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'

const LinkComponent = (linkProps) => {
  return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
}

const Menu = (props) => {
  const { chainId } = useActiveChainId()
  const { isDark, setTheme } = useTheme()
  const { currentLanguage, t } = useTranslation()
  const { pathname } = useRouter()
  const dogePrice = useDogePrice()

  const menuItems = useMemo(
    () => [
      {
        label: t('Trade'),
        href: '/swap',
        items: [
          {
            label: t('Swap'),
            href: '/swap',
          },
          {
            label: t('Liquidity'),
            href: '/liquidity',
          },
        ],
      },
      {
        label: t('Farm'),
        href: '/farms',
      },
    ],
    [t],
  )

  const activeMenuItem = useMemo(() => getActiveMenuItem({ menuConfig: menuItems, pathname }), [menuItems, pathname])
  const activeSubMenuItem = useMemo(
    () => getActiveSubMenuItem({ menuItem: activeMenuItem, pathname }),
    [pathname, activeMenuItem],
  )

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  return (
    <UikitMenu
      linkComponent={LinkComponent}
      rightSide={
        <>
          <Flex alignItems="center" mr="16px">
            <img
              src="https://seeklogo.com/images/D/dogecoin-doge-logo-625F9D262A-seeklogo.com.png"
              alt="DOGE"
              width="24px"
              height="24px"
              style={{ marginRight: '8px' }}
            />
            <Text color="textSubtle" fontSize="16px" bold>
              DOGE: ${dogePrice.toFixed(4)}
            </Text>
          </Flex>
          <GlobalSettings mode={SettingsMode.GLOBAL} />
          <NetworkSwitcher />
          <UserMenu />
        </>
      }
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      links={menuItems}
      subLinks={activeMenuItem?.items}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      {...props}
    />
  )
}

export default Menu
