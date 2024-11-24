interface Props {
  _items: any
  _isDark: boolean
  _toggleTheme: () => void
  _currentLang: string
  _langs: string[]
  _setLang: (lang: string) => void
  _cakePriceUsd?: number
  _buyCakeLabel: string
  _buyCakeLink: string
}

const Footer: React.FC<Props> = ({
  _items,
  _isDark,
  _toggleTheme,
  _currentLang,
  _langs,
  _setLang,
  _cakePriceUsd,
  _buyCakeLabel,
  _buyCakeLink,
  ...props
}) => {
  return null
}
