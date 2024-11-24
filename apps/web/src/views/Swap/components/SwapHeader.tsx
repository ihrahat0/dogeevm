import { IconButton } from '@pancakeswap/uikit'
import { styled } from 'styled-components'
import { SettingsIcon } from './components/Settings/SettingsIcon'

const StyledSwapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin: 0;
`

const SwapHeader = () => {
  return (
    <StyledSwapHeader>
      <Title>Swap Seamlessly</Title>
      <IconButton variant="text" scale="sm">
        <SettingsIcon />
      </IconButton>
    </StyledSwapHeader>
  )
}

export default SwapHeader
