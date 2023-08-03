import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "neutral", "danger"],
      },
    },
    variant: {
      description: "The variant of the button",
      control: {
        type: "select",
        options: ["contained", "text"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click",
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
    children: "Click",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    children: "Click",
  },
};

export const PrimaryText: Story = {
  args: {
    variant: "text",
    children: "Click",
  },
};

export const NeutralText: Story = {
  args: {
    variant: "text",
    color: "neutral",
    children: "Click",
  },
};

export const Dangerext: Story = {
  args: {
    variant: "text",
    color: "danger",
    children: "Click",
  },
};

export const Big: Story = {
  args: {
    size: "lg",
    children: "Click",
  },
};
