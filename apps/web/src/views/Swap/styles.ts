import { Card } from '@pancakeswap/uikit'
import styled from 'styled-components'

interface StyledSwapContainerProps {
  $isChartExpanded?: boolean
}

interface StyledInputCurrencyWrapperProps {
  mt?: string
}

export const StyledSwapContainer = styled(Card)<StyledSwapContainerProps>`
  width: 100%;
  max-width: ${({ $isChartExpanded }) => ($isChartExpanded ? '100%' : '858px')};
  background: ${({ theme }) => theme.card.background};
  border-radius: 24px;
  padding: 1px 1px 3px 1px;
  margin-top: 0px;
`

export const StyledInputCurrencyWrapper = styled.div`
  padding: 16px;
  margin-bottom: 8px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 16px;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const TokenSelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`

export const CurrencySelectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.input};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  &:hover {
    opacity: 0.7;
  }
`

export const PercentageButton = styled.button`
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.input};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const SwapButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`
