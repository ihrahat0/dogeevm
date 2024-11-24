import React from "react";
import { Flex } from "../Box";
import { StyledFooter, StyledSocialLinks } from "./styles";
import { FooterProps } from "./types";

const Footer: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  buyCakeLink,
  mb,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} mb={mb} {...props}>
      <Flex flexDirection="column" width={["100%", null, "1200px;"]} alignItems="center">
        <img
          src="/logo.png"
          alt="logo"
          style={{
            height: "40px",
            objectFit: "contain",
            marginBottom: "24px",
            filter: "brightness(1.2)", // Makes the logo slightly brighter
          }}
        />
        <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
