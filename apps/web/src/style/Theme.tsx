import { dark } from '@pancakeswap/uikit'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <SCThemeProvider theme={dark}>{children}</SCThemeProvider>
}

export default ThemeProvider
