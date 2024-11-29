import { Flex } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

interface StickerProps {
  backgroundColor?: string
  borderColor?: string
}

const Sticker = styled(Flex)<StickerProps>`
  width: 100%;
  height: 100%;
  background-color: #0d0c0c;
  border: 2px solid ${({ theme, borderColor }) => borderColor || theme.colors.invertedContrast};
  border-radius: ${({ theme }) => theme.radii.circle};
  box-shadow: ${({ theme }) => theme.card.boxShadow};
`

export default Sticker
