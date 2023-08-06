import { MouseEventHandler } from "react";

export interface ButtonProps {
  testId: string;
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
