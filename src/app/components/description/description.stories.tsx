import type { Meta, StoryObj } from "@storybook/react";
import { Description } from "./description";

const meta: Meta<typeof Description> = {
  title: "Components/Description",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initDescription: {
      defaultValue: "Description",
      control: {
        type: "text",
      },
    },
    readOnly: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Description>;

export const Default: Story = {
  render: (_) => (
    <div className="grid grid-cols-1 gap-6">
      {[DefaultDescription, InitDescription, ReadOnly].map(
        (DescriptionStory, index) => (
          <Description {...DescriptionStory.args} key={index} />
        )
      )}
    </div>
  ),
};

export const DefaultDescription: Story = {};

export const InitDescription: Story = {
  args: {
    initDescription: "Default description",
  },
};

export const ReadOnly: Story = {
  args: {
    initDescription: "Read only description",
    readOnly: true,
  },
};
