import React, { useContext } from "react";
import { keyframes, styled } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.xl} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.xl} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const StyledLogo = styled.img`
  width: 32px;
  height: 32px;

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 160px;
    height: auto;
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <StyledLogo src="/logo-small.png" alt="Logo" className="mobile-icon" />
      <StyledLogo src="/logo.png" alt="Logo" className="desktop-icon" />
    </>
  );

  return (
    <Flex alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);
