import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { SwapType } from '../types'
import { isTwapSupported } from '../utils'

export const SwapSelection = ({ swapType }: { swapType: SwapType }) => {
  const router = useRouter()

  // Auto-click dark mode toggle with retry
  useEffect(() => {
    const clickDarkModeToggle = () => {
      const darkModeToggle = document.querySelector('.StyledToggle__Input-sc-fa83fda8-1.gWZyZb') as HTMLInputElement
      if (darkModeToggle && !darkModeToggle.checked) {
        darkModeToggle.click()
        return true
      }
      return false
    }

    // Try immediately
    if (!clickDarkModeToggle()) {
      // If not successful, retry a few times
      const retryAttempts = 5
      let attemptCount = 0
      const retryInterval = setInterval(() => {
        if (clickDarkModeToggle() || attemptCount >= retryAttempts) {
          clearInterval(retryInterval)
        }
        attemptCount++
      }, 1000)

      return () => clearInterval(retryInterval)
    }
  }, [])

  const onSelect = useCallback(
    (value: SwapType) => {
      let url = ''
      switch (value) {
        case SwapType.LIMIT:
          url = '/liquidity/pools'
          break
        case SwapType.TWAP:
          url = '/swap/twap'
          break
        case SwapType.MARKET:
          url = '/swap'
          break
        default:
          break
      }
      router.push(url)
    },
    [router],
  )

  const { chainId } = useActiveChainId()
  if (!isTwapSupported(chainId)) return null
  return (
    <ButtonMenu
      mb={3}
      scale="sm"
      fullWidth
      activeIndex={swapType}
      onItemClick={(index) => onSelect(index)}
      variant="subtle"
    >
      <ButtonMenuItem>Swap</ButtonMenuItem>
      <ButtonMenuItem>Pool</ButtonMenuItem>
    </ButtonMenu>
  )
}
