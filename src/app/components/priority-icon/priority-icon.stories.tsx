import type { Meta, StoryObj } from "@storybook/react";
import { PriorityId } from "@domain/priority";
import { PriorityIcon } from "./priority-icon";

const meta: Meta<typeof PriorityIcon> = {
  title: "Components/PriorityIcon",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    priority: {
      defaultValue: "low",
      control: {
        type: "select",
        options: ["low", "medium", "high"],
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PriorityIcon>;

const priorities: PriorityId[] = ["low", "medium", "high"];
const sizes = [18, 24, 32, 48];

export const Default: Story = {
  render: (_) => (
    <div className="grid grid-cols-5 items-center justify-center gap-4 p-4 text-font">
      <span></span>
      {sizes.map((size) => (
        <span>{size}px</span>
      ))}
      {priorities.map((priority) => (
        <>
          <span>{priority}</span>
          {sizes.map((size) => (
            <PriorityIcon
              key={`${priority}-${size}`}
              priority={priority}
              size={size}
            />
          ))}
        </>
      ))}
    </div>
  ),
};

export const Low: Story = {
  args: {
    priority: "low",
  },
};

export const Medium: Story = {
  args: {
    priority: "medium",
  },
};

export const High: Story = {
  args: {
    priority: "high",
  },
};

export const Size24: Story = {
  args: {
    priority: "low",
    size: 24,
  },
};

export const Size32: Story = {
  args: {
    priority: "low",
    size: 32,
  },
};

export const Size48: Story = {
  args: {
    priority: "low",
    size: 48,
  },
};
