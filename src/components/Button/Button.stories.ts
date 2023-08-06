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
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    text: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    text: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    text: "Button",
  },
};
