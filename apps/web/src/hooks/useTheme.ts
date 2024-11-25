import { useContext } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'

const useTheme = () => {
  const theme = useContext(StyledThemeContext)
  return {
    isDark: true,
    theme,
    setTheme: () => null,
    toggleTheme: () => null,
  }
}

export default useTheme
