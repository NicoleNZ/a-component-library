import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { InputProps } from "./Input.types";

const StyledInput = styled.input<InputProps>`
  font-family: Arial;
  height: 2.5rem;
  width: 18.75rem;
  border-radius: 0.188rem;
  border: solid 0.125rem
    ${(props) =>
      props.disabled
        ? "#e4e3ea"
        : props.error
        ? "#a9150b"
        : props.success
        ? "#067d68"
        : "#353637"};
  background-color: #fff;
  &:focus {
    border: solid 0.125rem #1b116e;
  }
`;

const StyledLabel = styled.div<InputProps>`
  font-size: 1rem;
  font-family: Arial;
  color: ${(props) => (props.disabled ? "#e4e3ea" : "#080808")};
  padding-bottom: 0.375rem;
`;

const StyledMessage = styled.div<InputProps>`
  font-family: Arial;
  font-style: italic;
  font-size: 1rem;
  color: #a9150b8;
  padding-top: 0.25rem;
`;

const StyledText = styled.p<InputProps>`
  font-family: Arial;
  margin: 0px;
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
`;

const Input: FC<InputProps> = ({
  testId,
  id,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <Fragment>
      <StyledLabel testId={`${testId}-label`}>
        <StyledText
          testId={`${testId}-labelText`}
          disabled={disabled}
          error={error}
        >
          {label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        testId={testId}
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledMessage testId={`${testId}-message`}>
        <StyledText testId={`${testId}-messageText`} error={error}>
          {message}
        </StyledText>
      </StyledMessage>
    </Fragment>
  );
};

export default Input;
