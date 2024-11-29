const defaultTypography = {
  fontFamily: '"Roboto Mono", monospace',
  h1: {
    fontSize: 28,
    lineHeight: '36px',
    fontWeight: 500,
  },
  h2: {
    fontSize: 24,
    lineHeight: '28px',
    fontWeight: 500,
  },
  h3: {
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 500,
  },
  p1: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 400,
  },
  p2: {
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '-0.02em',
    fontWeight: 400,
  },
  p3: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 400,
  },
  caption: {
    fontSize: 10,
    lineHeight: '16px',
    fontWeight: 400,
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  },
}

const borderRadius = 18

export const PancakeSwapTheme = {
  dark: {
    typography: {
      ...defaultTypography,
      fontFamily: "'Kanit', sans-serif",
    },
    shape: { borderRadius },
    palette: {
      mode: 'dark',
      primary: {
        main: '#b39b31',
        contrastText: '#191326',
        light: '#b39b31',
      },
      secondary: {
        main: '#372F47',
        contrastText: '#F4EEFF',
        light: '#372F47',
      },
      info: { main: '#b39b31' },
      success: { main: '#8AE06C' },
      error: { main: '#F56868' },
      warning: { main: '#F1DF38' },
      text: {
        primary: '#F4EEFF',
        secondary: '#B8ADD2',
      },
      divider: '#383241',
      background: {
        paper: 'transparent',
        default: 'transparent',
      },
    },
  },
  light: {
    typography: {
      ...defaultTypography,
      fontFamily: "'Kanit', sans-serif",
    },
    shape: { borderRadius },
    palette: {
      mode: 'light',
      primary: {
        main: '#b39b31',
        contrastText: '#FFFFFF',
        light: '#b39b31',
      },
      secondary: {
        main: '#EEEAF4',
        contrastText: '#fff',
        light: '#EEEAF4d',
      },
      info: { main: '#b39b31' },
      success: { main: '#8AE06C' },
      error: { main: '#F56868' },
      warning: { main: '#F1DF38' },
      text: {
        primary: '#fff',
        secondary: '#7C70AB',
      },
      divider: '#E7E3EB',
      background: {
        paper: '#FFFFFF',
        default: '#FFFFFF',
      },
    },
  },
}
