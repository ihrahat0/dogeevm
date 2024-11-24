import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  
  // Add Roboto font import
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  body {
    background-color: ${({ theme }) => theme.colors.background};
    
    img {
      height: auto;
      max-width: 100%;
    }
  }

  // Hide specific elements
  .kcXNTu.hxtGPi,
  .CardLayouts__FloatingContainer-sc-b860bc5f-0 {
    display: none !important;
  }

  .grMtET.hUNBbu.vsFos,
  .styles__StyledFooter-sc-254d2863-0 {
    display: none !important;
  }
  
  .Box-sc-3fcdcbc5-1.CardLayouts__StaticContainer-sc-b860bc5f-1.kcXNTu.cbKtSh {
  display: none !important;
  }
  .Text-sc-1e14ff52-0.Link__StyledLink-sc-e718cb8-0.kA-DvpM.dbBuiW{
  margin-right: 24px;
  }
`

export default GlobalStyle
