import {
  CurrencySelectButton,
  InputWrapper,
  PercentageButton,
  StyledInputCurrencyWrapper,
  SwapButton,
  TokenSelectorWrapper,
} from './styles'

export const V3SwapForm = () => {
  return (
    <>
      <StyledInputCurrencyWrapper>
        <InputWrapper>
          <input
            type="number"
            placeholder="0.00"
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              width: '100%',
              outline: 'none',
            }}
          />
        </InputWrapper>
        <TokenSelectorWrapper>
          <CurrencySelectButton>
            <img src="/images/tokens/sol.png" alt="SOL" />
            SOL
          </CurrencySelectButton>
          <div style={{ display: 'flex', gap: '4px' }}>
            <PercentageButton>50%</PercentageButton>
            <PercentageButton>MAX</PercentageButton>
          </div>
        </TokenSelectorWrapper>
      </StyledInputCurrencyWrapper>

      <StyledInputCurrencyWrapper>
        <InputWrapper>
          <input
            type="number"
            placeholder="0.00"
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              width: '100%',
              outline: 'none',
            }}
          />
        </InputWrapper>
        <TokenSelectorWrapper>
          <CurrencySelectButton>
            <img src="/images/tokens/doge.png" alt="DOGE" />
            DOGE
          </CurrencySelectButton>
          <div style={{ display: 'flex', gap: '4px' }}>
            <PercentageButton>50%</PercentageButton>
            <PercentageButton>MAX</PercentageButton>
          </div>
        </TokenSelectorWrapper>
      </StyledInputCurrencyWrapper>

      <SwapButton>
        <img src="/images/discord.png" alt="Discord" />
        Connect
      </SwapButton>
    </>
  )
}
