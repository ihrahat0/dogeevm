import React from "react";
import styled from "styled-components";

interface Props {
  href: string;
  linkComponent?: any;
}

const StyledLink = styled.a`
  display: contents;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    height: 40px;
    display: none;
    object-fit: contain;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  img {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Logo: React.FC<Props> = ({ href, linkComponent }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <img className="mobile-icon" src="/logo-small.png" alt="logo" />
      <img className="desktop-icon" src="/logo.png" alt="logo" style={{ marginLeft: "8px", marginTop: "10px" }} />
    </>
  );

  if (isAbsoluteUrl || !linkComponent) {
    return (
      <StyledLink href={href} aria-label="Home">
        {innerLogo}
      </StyledLink>
    );
  }

  const Link = linkComponent;
  return (
    <Link href={href} passHref>
      <StyledLink aria-label="Home">{innerLogo}</StyledLink>
    </Link>
  );
};

export default Logo;
