import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { CheckboxProps } from "./Checkbox.types";
import { themeColors } from "../../../globals/colors";

const Checkbox: FC<CheckboxProps> = ({
  className,
  checked,
  name,
  color,
  disabled,
  handler,
  selectedRef,
  testId,
  ...props
}) => (
  <StyledCheckbox
    checked={checked}
    name={name ? name : "checkbox"}
    type="checkbox"
    color={color}
    disabled={disabled}
    className={className}
    onChange={(event: ChangeEvent<HTMLInputElement>) =>
      handler?.(event.target.checked, name)
    }
    data-testid={testId}
    ref={selectedRef}
    {...props}
  />
);

const StyledCheckbox = styled.input<CheckboxProps>`
  appearance: none;
  display: flex;
  flex-shrink: 0;
  position: relative;
  height: 1.125rem;
  width: 1.125rem;
  border-radius: 0.2em;
  border: 0.125rem solid
    ${(props) => (props.color ? props.color : themeColors.orangePrimary)};
  background-color: ${themeColors.cloudWhite};
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;

  &:checked {
    background-color: ${(props) =>
      props.color ? props.color : themeColors.orangePrimary};
    border: 0.125rem solid
      ${(props) => (props.color ? props.color : themeColors.orangePrimary)};
    height: 1.125rem;
    width: 1.125rem;
    &::before {
      height: 30%;
      width: 70%;
      content: "";
      border: 0.125rem solid ${themeColors.cloudWhite};
      border-top: none;
      border-right: none;
      margin: auto;
      margin-bottom: 35%;
      transform: rotate(-45deg);
      box-sizing: content-box;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export default Checkbox;
