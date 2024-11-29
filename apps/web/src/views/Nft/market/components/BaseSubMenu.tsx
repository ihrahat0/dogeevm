import { SubMenuItems } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

const BaseSubMenu = styled(SubMenuItems)`
  background-color: #0d0c0c;
  border-bottom: 1px ${({ theme }) => theme.colors.cardBorder} solid;

  > div {
    background-color: #0d0c0c;
  }
`

export default BaseSubMenu
