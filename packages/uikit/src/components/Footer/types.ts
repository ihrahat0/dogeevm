import { FlexProps } from "../Box";
import { Language } from "../LangSelector/types";

export type FooterProps = {
  items?: Array<{
    label: string;
    href?: string;
    target?: string;
  }>;
  buyCakeLabel: string;
  buyCakeLink: string;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  cakePriceUsd?: number;
  currentLang: string;
  langs: Language[];
  chainId: number;
  setLang: (lang: Language) => void;
} & FlexProps;

export interface FooterLinkType {
  label: string;
  items: {
    label: string;
    href?: string;
    target?: string;
    isHighlighted?: boolean;
  }[];
}
