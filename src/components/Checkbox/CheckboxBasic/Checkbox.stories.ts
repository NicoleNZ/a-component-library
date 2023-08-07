import type { Meta, StoryObj } from "@storybook/react";
import { themeColors } from "../../../globals/colors";
import Checkbox from "./Checkbox";

const meta = {
  title: "A Component Library/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    name: "checked",
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    name: "unchecked",
    checked: false,
  },
};

export const CheckedColor: Story = {
  args: {
    name: "checked-color",
    checked: true,
    color: themeColors.skyBlue,
  },
};

export const UncheckedColor: Story = {
  args: {
    name: "unchecked-color",
    checked: false,
    color: themeColors.skyBlue,
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled",
    disabled: true,
  },
};
