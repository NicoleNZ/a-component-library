import type { Meta, StoryObj } from "@storybook/react";
import { themeColors } from "../../../globals/colors";
import CheckboxSVG from "./Checkbox";

const meta = {
  title: "A Component Library/CheckboxSVG",
  component: CheckboxSVG,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxSVG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    name: "circle",
    hexFillColor: themeColors.orangePrimary,
    circle: true,
  },
};

export const Square: Story = {
  args: {
    name: "square",
    hexFillColor: themeColors.orangePrimary,
    circle: false,
  },
};
