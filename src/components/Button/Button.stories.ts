import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "A Component Library/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    text: "Button",
    testId: "button",
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
    testId: "button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "Button",
    testId: "button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    text: "Button",
    testId: "button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    text: "Button",
    testId: "button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    text: "Button",
    testId: "button",
  },
};
