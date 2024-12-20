import shouldForwardProp from "@styled-system/should-forward-prop";
import { styled } from "styled-components";
import { space } from "styled-system";
import { RadioProps, scales } from "./types";

const getScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case scales.SM:
      return "24px";
    case scales.MD:
    default:
      return "32px";
  }
};

const getCheckedScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case scales.SM:
      return "12px";
    case scales.MD:
    default:
      return "20px";
  }
};

const Radio = styled.input.attrs({ type: "radio" }).withConfig({ shouldForwardProp })<RadioProps>`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: ${({ theme }) => (theme.isDark ? `solid 1px ${theme.colors.disabled}` : "0")};
  border-radius: 50%;
  background-color: #0d0c0c;
  box-shadow: ${({ theme }) => theme.shadows.inset};

  &:after {
    border-radius: 50%;
    content: "";
    height: ${getCheckedScale};
    left: 6px;
    position: absolute;
    top: 6px;
    width: ${getCheckedScale};
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:checked {
    border: 0;
    background-color: #0d0c0c;
    &:after {
      background-color: #0d0c0c;
    }
  }

  &:disabled {
    border: 0;
    cursor: default;
    opacity: 0.6;
  }
  ${space}
`;

Radio.defaultProps = {
  scale: scales.MD,
  m: 0,
};

export default Radio;
