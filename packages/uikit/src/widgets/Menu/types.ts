import type { Language } from "@pancakeswap/localization";
import { ElementType, ReactElement, ReactNode } from "react";
import { FooterLinkType } from "../../components/Footer/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems/types";
import { Colors } from "../../theme/types";

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface NavProps {
  linkComponent?: ElementType;
  rightSide?: ReactNode;
  banner?: ReactElement;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  currentLang: string;
  setLang: (lang: Language) => void;
  cakePriceUsd?: number;
  links: Array<MenuItemsType>;
  subLinks?: Array<SubMenuItemsType>;
  footerLinks: Array<FooterLinkType>;
  activeItem?: string;
  activeSubItem?: string;
  activeSubItemChildItem?: string;
  langs: Language[];
  buyCakeLabel: string;
  buyCakeLink: string;
  chainId: number;
  navBackground?: string;
  style?: React.CSSProperties;
}
