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
  .hxtGPi,
  .CardLayouts__FloatingContainer-sc-b860bc5f-0 {
    display: none !important;
  }

  .vsFos,
  .styles__StyledFooter-sc-254d2863-0 {
    display: none !important;
  }
  
  .cbKtSh {
  display: none !important;
  }
  .Text-sc-1e14ff52-0.Link__StyledLink-sc-e718cb8-0.kA-DvpM.dbBuiW{
  margin-right: 24px;
  }
 /* Background transparent for specific classes */
.bbpMlm{
  background: transparent;
}

.sprinkles_backgroundColor_backgroundAlt_base__1qhetbf2wp {
  background-color: cyan;
  border-radius: 20px;
}
/* Background color for hover, focus, active states */
.sprinkles_backgroundColor_input_base__1qhetbf2xt{
  background-color: #716439;
}

.bqdbyA {
  background-color: #000;
}

/* Transparent background for another class */
.zWvCr {
  background: transparent;
}
.jJxiTc {
  border: 2px solid #000;
  1px 1px 1px 1px rgb(45 45 45);
}

.EBfFM.kdEPqI.jrvfQB {
  background: #000;
}
.eWPOGB{
color: #000;
}
.iWevOn{
background: transparent;
border: none;
}
.kCGmwi{
color: #000;
}
.bRxrtj{
color: #000;
}
.gaCunK{
display: none;
}
CommonBases__BaseWrapper-sc-fa748001-1{
background-color: transparent;
}
.dOxABy{
display: none;
}

.Box-sc-3fcdcbc5-1.Flex-sc-9cde33ed-0.hzwUJ.emANlq{
display: none;
}
/* Hide specific elements */
.dnDOkL {
  display: none;
}

.fqqISZ {
  background: #000;
}


`

export default GlobalStyle
