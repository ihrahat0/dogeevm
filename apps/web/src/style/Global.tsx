import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  
  // Add Roboto font import
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  body {
    background-color: #0d0c0c;
    
    img {
      height: auto;
      max-width: 100%;
    }
  }

 button {
 background-color: #8B0000;
 }

//   .Image__StyledImage-sc-b793f600-0.csytvV {
//     border-radius: 20px;
//   }

//   .Box__MotionBox-sc-3fcdcbc5-0.styles__ModalContainer-sc-da5fe41f-3.EBfFM.lbAa-Dg {
//   background-color: #0d0c0c;
//   }

//   .reset_base__1a5xov70.sprinkles_display_grid_xs__1qhetbfc.sprinkles_gridAutoRows_auto_xs__1qhetbf2au.SwapModalFooterV2__SwapModalFooterContainer-sc-897c11b5-0.bxXXCs {
//     box-shadow: 0px 0px 9px 4px rgba(255, 204, 0, 1);
//     background-color: #0d0c0c;
//   }

//   // Hide specific elements
//   .hxtGPi,
//   .CardLayouts__FloatingContainer-sc-b860bc5f-0 {
//     display: none !important;
//   }

//   .Text-sc-1e14ff52-0.Link__StyledLink-sc-e718cb8-0.kA-DvpM.dbBuiW{
//   margin-right: 24px;
//   }

// .Box-sc-3fcdcbc5-1.Flex-sc-9cde33ed-0.hzwUJ.emANlq{
// display: none;
// }


//   .Menu__StyledNav-sc-f316da5f-1.bqdbyA {
//     background-color: #0d0c0c;
//   }

//   .Box-sc-3fcdcbc5-1.Flex-sc-9cde33ed-0.SwapWrapper__SwapTabAndInputPanelWrapper-sc-636aebd6-2.kcXNTu.jAyBAa.jJSCzS {
//     background-color: #0d0c0c;
//   }
  
//   .SwapWrapper__SwapFormWrapper-sc-636aebd6-0.hVJifd {
//     background-color: #0d0c0c;
//   }

//   .SwapSelectionTab__SwapSelectionWrapper-sc-7c7a027a-1.fWjYaE {
//     background: transparent;
//     border: none;
//   }

//   .Box-sc-3fcdcbc5-1.SwapSimplify__Wrapper-sc-5f20b57f-0.fSolOs.bGgVaL {
//     background-color: #0d0c0c;
//   }

//   .ButtonAndDetailsPanel__PanelWrapper-sc-551e9519-0.iaiNpU {
//     border: none;
//   }
  
//   .StyledButton-sc-6b7e583a-0.kZxxBr.pancake-button--disabled {
//     box-shadow: 0px 0px 9px 4px rgba(255, 204, 0, 1);
//   }

//   .StyledButton-sc-6b7e583a-0.kmdylw.CurrencyInputPanelSimplify__CurrencySelectButton-sc-768c46d2-0.jJxiTc.open-currency-select-button {
//     border: 2px solid #fff;
//   }
//   #swap-page{
//   box-shadow: 0px 0px 3px 2px orange;
//   }
//   .Box-sc-3fcdcbc5-1.ifnxtc {
//     background: #232123;
//   }
//   .UserMenu__Menu-sc-604e22e5-2.jVDyBX {
//     background: #232123;
//   }
//   .Box__MotionBox-sc-3fcdcbc5-0.styles__ModalContainer-sc-da5fe41f-3.CurrencySearchModal__StyledModalContainer-sc-259f968e-1.EBfFM.kdEPqI.jrvfQB {
//     background: #000;
//   }

//   .Box-sc-3fcdcbc5-1.Card-sc-2340fd50-0.Card__LightGreyCard-sc-2340fd50-2.bHJRaJ.bocvhc.eFtxcS {
//     background: #232123;
//   }
//   .StyledButton-sc-6b7e583a-0.dkxzUe.IconButton-sc-a43322ca-0.fbXhFB {
//     display: none;
//   }
//   .Box__MotionBox-sc-3fcdcbc5-0.styles__ModalContainer-sc-da5fe41f-3.EBfFM.lozAgX {
//     background: #232123;
//   }
//   .StyledButton-sc-6b7e583a-0.wWoww.CurrencyInputPanelSimplify__CurrencySelectButton-sc-768c46d2-0.jJxiTc.open-currency-select-button {
//     border: 2px solid #fff;
//   }
//   .SwapSelectionTab__SwapSelectionWrapper-sc-63e24f2c-1.hHYSyz{
//    border: none;
//    background: transparent;
//   }
//   .Box__MotionBox-sc-3fcdcbc5-0.styles__ModalContainer-sc-da5fe41f-3.EBfFM.fASWoL {
//     background: #000;
//   }
//   .StyledButton-sc-6b7e583a-0.qzfes {
//     color: #000;
//   }
//   .StyledButton-sc-6b7e583a-0.cReZMz {
//     background: #ac1111;
//     color: #fff;
//   }
//   .StyledButton-sc-6b7e583a-0.cpQqPV.pancake-button--loading {
//     background: #ac1111;
//   }
//   .StyledButton-sc-6b7e583a-0.auvKZ {
//     background: #ac1111;
//     color: #fff;
//   }
//   .SwapSelectionTab__SwapSelectionWrapper-sc-8412d0ef-1.kfThHS {
//     background: transparent;
//     border: none;
//   }
//   .Box-sc-3fcdcbc5-1.doZmQL {
//     background: #232123;
//   }
//   .Box-sc-3fcdcbc5-1.Flex-sc-9cde33ed-0.styles__ModalHeader-sc-da5fe41f-0.WalletModal__ModalHeader-sc-96ab3caf-0.kcXNTu.jAyBAa.ctUiDh.hbsXAB {
//     background: #232123;
//   }
//   .CopyAddress__Address-sc-f8ce0449-1.cGZMqu input {
//     color: #000;
//   }

`

export default GlobalStyle
