import type { Meta, StoryObj } from "@storybook/react";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Pages/Main/Header",
  component: Header,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <div className="w-full">{withRemixStub(withMainContext(Story))}</div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
