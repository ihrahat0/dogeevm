import { useTranslation } from '@pancakeswap/localization'
import { Flex, Text, Menu as UikitMenu } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import { useDogePrice } from 'hooks/useDogePrice'
import useTheme from 'hooks/useTheme'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import UserMenu from './UserMenu'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'

const LinkComponent = (linkProps) => {
  return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
}

const Menu = (props) => {
  const { isDark } = useTheme()
  const { t } = useTranslation()
  const { pathname } = useRouter()
  const dogePrice = useDogePrice()
  const menuItems = useMemo(
    () => [
      {
        label: t('Trade'),
        href: '/swap',
      },
    ],
    [t],
  )

  const activeMenuItem = useMemo(() => getActiveMenuItem({ menuConfig: menuItems, pathname }), [menuItems, pathname])
  const activeSubMenuItem = useMemo(
    () => getActiveSubMenuItem({ menuItem: activeMenuItem, pathname }),
    [pathname, activeMenuItem],
  )

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
            <Text color="white" fontSize="16px" bold>
              DOGE: ${dogePrice.toFixed(4)}
            </Text>
          </Flex>
          <NetworkSwitcher />
          <UserMenu />
        </>
      }
      isDark={isDark}
      currentLang=""
      langs={[]}
      links={menuItems}
      subLinks={activeMenuItem?.items}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      {...props}
      navBackground="transparent"
    />
  )
}

export default Menu
