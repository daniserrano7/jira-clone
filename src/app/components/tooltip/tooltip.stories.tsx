import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip title="Tooltip messsage">
      <div className="rounded bg-background-neutral p-1 text-font">
        Hover over me!
      </div>
    </Tooltip>
  ),
};
