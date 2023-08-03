import type { Meta, StoryObj } from "@storybook/react";

import { Error500 } from "./error-500";

const meta: Meta<typeof Error500> = {
  title: "Components/Error500",
  component: Error500,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error500>;

export const Default: Story = {};

export const Message: Story = {
  args: {
    message: "This is the error message",
  },
};

export const Link: Story = {
  args: {
    href: "/link-to-safe-place",
  },
};

export const MessageLink: Story = {
  args: {
    message: "This is the error message",
    href: "/link-to-safe-place",
  },
};
