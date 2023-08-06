import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { themeColors } from "../../globals/colors";

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 0.188rem;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "0.438rem 1.563rem 0.5rem"
      : props.size === "medium"
      ? "0.563rem 1.875rem 0.688rem"
      : "0.875rem 1.875rem 1rem"};
  color: ${themeColors.cloudWhite};
  background-color: ${(props) =>
    props.primary ? themeColors.orangePrimary : themeColors.orangeSecondary};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${themeColors.cloudWhite};
    color: ${themeColors.darkLeafGreen};
  }
  &:active {
    border: solid 0.125rem ${themeColors.darkLeafGreen};
    padding: ${(props) =>
      props.size === "small"
        ? "0.313rem 1.438rem 0.375rem"
        : props.size === "medium"
        ? "0.438rem 1.75rem 0.563rem"
        : "0.75rem 1.75rem 0.875rem"};
  }
`;

export default Button;
