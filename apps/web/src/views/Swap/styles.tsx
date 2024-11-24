import { Card } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

interface SwapContainerProps {
  $isChartExpanded?: boolean
}

export const StyledSwapContainer = styled(Card)<SwapContainerProps>`
  background: rgba(28, 28, 28, 0.95);
  border-radius: 24px;
  padding: 24px;
  border: none;
  box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.3), 0px 0px 40px rgba(255, 0, 0, 0.15), 0px 0px 60px rgba(255, 0, 0, 0.1);
  width: 100%;
  max-width: 480px;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;
  margin-top: ${({ $isChartExpanded }) => ($isChartExpanded ? '24px' : '0')};
`

export const StyledInputCurrencyWrapper = styled.div`
  background: #1a1a1a;
  border-radius: 23px;
  padding: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
`

const InputWrapper = styled.div`
  flex: 1;
  height: 100%;
  input {
    font-size: 42px;
    background: none;
    border: none;
    color: #666;
    outline: none;
    width: 100%;
    height: 100%;

    &::placeholder {
      color: #666;
    }
  }
`

const TokenSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 140px;
`

const CurrencySelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2d2d2d;
  border-radius: 24px;
  padding: 8px 16px;
  border: none;
  color: white;
  font-weight: 500;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: #3d3d3d;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`

const PercentageButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`

const PercentageButton = styled.button`
  background: #ffd70030;
  color: #ffd700;
  border: none;
  border-radius: 12px;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  flex: 1;

  &:hover {
    background: #ffd70050;
  }
`

const SwapButton = styled.button`
  background: #ff0000;
  color: white;
  width: 100%;
  padding: 18px;
  border-radius: 16px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: #cc0000;
  }

  &:disabled {
    background: #3d3d3d;
    cursor: not-allowed;
  }
`

// Export all components through a single named exports
export { CurrencySelectButton, InputWrapper, PercentageButton, PercentageButtonGroup, SwapButton, TokenSelectorWrapper }
