import type { Meta, StoryObj } from "@storybook/react";

import { Kbd } from "./kbd-placeholder";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: "Key",
  },
};

export const Sentence: Story = {
  render: (_) => (
    <p className="text-xs text-font-subtlest">
      Press <Kbd>Shift</Kbd> + <Kbd>S</Kbd> to save
    </p>
  ),
};
