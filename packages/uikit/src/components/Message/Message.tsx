import React, { useContext, useMemo } from "react";
import { styled } from "styled-components";
import { space, variant as systemVariant } from "styled-system";
import { Box } from "../Box";
import { CheckmarkCircleFillIcon, ErrorIcon, InfoFilledIcon, WarningIcon } from "../Svg";
import { Text, TextProps } from "../Text";
import variants from "./theme";
import { MessageProps } from "./types";

const MessageContext = React.createContext<MessageProps>({ variant: "success" });

const Icons = {
  warning: WarningIcon,
  danger: ErrorIcon,
  success: CheckmarkCircleFillIcon,
  primary: InfoFilledIcon,
};

const MessageContainer = styled.div<MessageProps>`
  background-color: #0d0c0c;
  padding: 16px;
  border-radius: 16px;
  border: solid 1px;

  ${space}
  ${systemVariant({
    variants,
  })}
`;

const Flex = styled.div`
  display: flex;
`;

const colors = {
  // these color names should be place in the theme once the palette is finalized
  warning: "#D67E0A",
  success: "#129E7D",
  danger: "failure",
  primary: "text",
};

export const MessageText: React.FC<React.PropsWithChildren<TextProps>> = ({ children, ...props }) => {
  const ctx = useContext(MessageContext);
  return (
    <Text fontSize="14px" color={colors[ctx?.variant]} {...props}>
      {children}
    </Text>
  );
};

const Message: React.FC<React.PropsWithChildren<MessageProps>> = ({
  children,
  variant,
  icon,
  action,
  actionInline,
  showIcon = true,
  ...props
}) => {
  const Icon = Icons[variant];
  const providerValue = useMemo(() => ({ variant }), [variant]);
  return (
    <MessageContext.Provider value={providerValue}>
      <MessageContainer variant={variant} {...props}>
        <Flex>
          {showIcon && <Box mr="12px">{icon ?? <Icon color={variants[variant].borderColor} width="24px" />}</Box>}
          {children}
          {actionInline && action}
        </Flex>
        {!actionInline && action}
      </MessageContainer>
    </MessageContext.Provider>
  );
};

export default Message;
