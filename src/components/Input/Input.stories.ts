import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "A Component Library/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    error: false,
    disabled: false,
    label: "Favourite Episode of Schitt's Creek",
  },
};

export const Success: Story = {
  args: {
    error: false,
    success: true,
    disabled: false,
    label: "Favourite Episode of Schitt's Creek",
    message: "Very nice - I like that one too",
  },
};

export const Error: Story = {
  args: {
    error: true,
    disabled: false,
    label: "Favourite Episode of Schitt's Creek",
    message: "Ewww David!  Please try again :)",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled",
  },
};
