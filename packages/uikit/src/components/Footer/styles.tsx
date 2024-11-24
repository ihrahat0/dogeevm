import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const StyledFooter = styled(Flex)`
  background: transparent;
  justify-content: center;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${darkColors.secondary};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
  justify-content: center;

  & a {
    margin: 0 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${darkColors.cardBorder};
  width: 100%;
`;
