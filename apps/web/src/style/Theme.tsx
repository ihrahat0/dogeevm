import { dark } from '@pancakeswap/uikit'
import styled, { ThemeProvider as SCThemeProvider } from 'styled-components'

const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
`

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SCThemeProvider theme={dark}>
      <VideoBackground autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
      </VideoBackground>
      {children}
    </SCThemeProvider>
  )
}

export default ThemeProvider
