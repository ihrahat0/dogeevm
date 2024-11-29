import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const Divider = styled(Box)`
  width: 100%;
  background-color: #0d0c0c;
  height: 1px;
`

export const ActionContainer = styled(Flex).attrs({ justifyContent: 'space-between' })<{ $isExpanded?: boolean }>`
  ${({ theme, $isExpanded }) =>
    $isExpanded &&
    `
      
      border-top: 1px solid ${theme.colors.cardBorder};
  `}
`
