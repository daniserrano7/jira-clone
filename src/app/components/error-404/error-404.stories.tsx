import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
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
type Story = StoryObj<typeof Error404>;

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
