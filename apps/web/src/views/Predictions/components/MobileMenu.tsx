import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
import { setChartPaneState, setHistoryPaneState } from 'state/predictions'
import { useGetPredictionsStatus, useIsChartPaneOpen, useIsHistoryPaneOpen } from 'state/predictions/hooks'
import { styled } from 'styled-components'
import { useAccount } from 'wagmi'
import useSwiper from '../hooks/useSwiper'

const ButtonNav = styled.div`
  flex: none;
`

const TabNav = styled.div`
  position: relative;
  flex: 1;
  text-align: center;
  z-index: 1;
`

const StyledMobileMenu = styled.div`
  align-items: center;
  background-color: #0d0c0c;
  display: flex;
  flex: none;
  height: 64px;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const getActiveIndex = (isHistoryOpen: boolean, isChartOpen: boolean) => {
  if (isHistoryOpen) {
    return 2
  }

  if (isChartOpen) {
    return 1
  }

  return 0
}

const MobileMenu = () => {
  const { swiper } = useSwiper()
  const isHistoryOpen = useIsHistoryPaneOpen()
  const isChartOpen = useIsChartPaneOpen()
  const status = useGetPredictionsStatus()
  const activeIndex = getActiveIndex(isHistoryOpen, isChartOpen)
  const dispatch = useLocalDispatch()
  const { address: account } = useAccount()

  const handleItemClick = (index: number) => {
    switch (index) {
      case 2:
        dispatch(setHistoryPaneState(true))
        break
      case 1:
        dispatch(setChartPaneState(true))
        dispatch(setHistoryPaneState(false))
        break
      case 0:
      default:
        dispatch(setHistoryPaneState(false))
        dispatch(setChartPaneState(false))
    }
  }

  return (
    <StyledMobileMenu>
      <ButtonMenu scale="sm" variant="subtle">
        <ButtonMenuItem as="a" href="/swap">
          Swap
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="/pools">
          Pool
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledMobileMenu>
  )
}

export default MobileMenu
