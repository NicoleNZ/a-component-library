type CheckboxHandler = (value?: boolean, name?: string) => void;
export interface CheckboxProps {
  className?: string;
  checked?: boolean;
  color?: string;
  disabled?: boolean;
  name?: string;
  handler?: CheckboxHandler;
  selectedRef?: any;
  testId?: string;
}
