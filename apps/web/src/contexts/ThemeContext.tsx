import { dark } from '@pancakeswap/uikit'
import { useEffect } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

export function ThemeProvider({ children }) {
  // Force dark theme in localStorage
  useEffect(() => {
    localStorage.setItem('IS_DARK', 'true')
    // Force dark mode class on body if needed
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  // Always use dark theme
  const theme = dark

  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
}
