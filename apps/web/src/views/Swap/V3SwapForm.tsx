import {
  CurrencySelectButton,
  InputWrapper,
  PercentageButton,
  PercentageButtonGroup,
  StyledInputCurrencyWrapper,
  SwapButton,
  TokenSelectorWrapper,
} from './styles'

export const V3SwapForm = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <StyledInputCurrencyWrapper>
        <InputWrapper>
          <input type="text" placeholder="0.00" />
        </InputWrapper>
        <TokenSelectorWrapper>
          <CurrencySelectButton>
            <img src="/images/tokens/sol.png" alt="SOL" />
            SOL
          </CurrencySelectButton>
          <PercentageButtonGroup>
            <PercentageButton>50%</PercentageButton>
            <PercentageButton>MAX</PercentageButton>
          </PercentageButtonGroup>
        </TokenSelectorWrapper>
      </StyledInputCurrencyWrapper>

      <StyledInputCurrencyWrapper>
        <InputWrapper>
          <input type="text" placeholder="0.00" />
        </InputWrapper>
        <TokenSelectorWrapper>
          <CurrencySelectButton>
            <img src="https://seeklogo.com/images/D/dogecoin-doge-logo-625F9D262A-seeklogo.com.png" alt="DOGE" />
            DOGE
          </CurrencySelectButton>
          <PercentageButtonGroup>
            <PercentageButton>50%</PercentageButton>
            <PercentageButton>MAX</PercentageButton>
          </PercentageButtonGroup>
        </TokenSelectorWrapper>
      </StyledInputCurrencyWrapper>

      <SwapButton>
        <img src="/images/wallets/metamask.png" alt="wallet" />
        Connect
      </SwapButton>
    </div>
  )
}
