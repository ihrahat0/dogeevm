import { Flex } from '@pancakeswap/uikit'
import SocialLinks from 'components/SocialLinks'
import { V3SwapForm } from './V3SwapForm'
import BackgroundVideo from './components/BackgroundVideo'
import SwapHeader from './components/SwapHeader'
import { StyledSwapContainer } from './styles'

export default function Swap() {
  return (
    <>
      <BackgroundVideo />
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        position="relative"
        flexDirection="column"
        padding="0 16px"
      >
        <StyledSwapContainer>
          <SwapHeader />
          <V3SwapForm />
        </StyledSwapContainer>
        <SocialLinks />
      </Flex>
    </>
  )
}
