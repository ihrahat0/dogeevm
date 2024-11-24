export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
  tooltip: string;
};

export interface Colors {
  white: string;
  failure: string;
  failure33: string;
  primary: string;
  primary0f: string;
  primary3D: string;
  primary53: string;
  primary62: string;
  success: string;
  success19: string;
  warning: string;
  warning2D: string;
  warning33: string;
  secondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  backgroundAlt2: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  primaryDark: string;
  tertiary: string;
  text: string;
  text99: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;
  gradientBubblegum: string;
  gradientInverseBubblegum: string;
  gradientCardHeader: string;
  gradientBlue: string;
  gradientViolet: string;
  gradientVioletAlt: string;
  gradientGold: string;
  gradientBold: string;
}

export type ZIndices = {
  ribbon: number;
  dropdown: number;
  modal: number;
};
