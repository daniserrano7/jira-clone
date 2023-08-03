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

export const Default: Story = {
  render: (_) => (
    <div className="grid grid-cols-3 gap-4 p-4">
      {[
        Primary,
        Neutral,
        Danger,
        PrimaryText,
        NeutralText,
        DangerText,
        PrimaryBig,
        NeutralBig,
        DangerBig,
      ].map((ButtonStory, index) => (
        <Button {...ButtonStory.args} className="w-fit" key={index}>
          Click
        </Button>
      ))}
    </div>
  ),
};

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

export const DangerText: Story = {
  args: {
    variant: "text",
    color: "danger",
    children: "Click",
  },
};

export const PrimaryBig: Story = {
  args: {
    size: "lg",
    children: "Click",
  },
};

export const NeutralBig: Story = {
  args: {
    size: "lg",
    color: "neutral",
    children: "Click",
  },
};

export const DangerBig: Story = {
  args: {
    size: "lg",
    color: "danger",
    children: "Click",
  },
};
