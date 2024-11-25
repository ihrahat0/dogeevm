import { memo } from "react";
import { MoonIcon, SunIcon } from "../Svg";
import { Toggle } from "../Toggle";

export interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<React.PropsWithChildren<Props>> = () => (
  <Toggle
    checked={true}
    defaultColor="textDisabled"
    checkedColor="textDisabled"
    onChange={() => {}}
    scale="md"
    startIcon={(isActive = false) => <SunIcon color={isActive ? "warning" : "backgroundAlt"} />}
    endIcon={(isActive = false) => <MoonIcon color={isActive ? "secondary" : "backgroundAlt"} />}
    disabled={true}
  />
);

export default memo(ThemeSwitcher);
