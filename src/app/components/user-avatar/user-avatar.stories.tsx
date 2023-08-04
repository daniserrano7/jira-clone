import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      defaultValue: "John Doe",
      control: {
        type: "text",
      },
    },
    image: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
    tooltip: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

const userImage = usersMock[1].image;
const userName = usersMock[1].name;

export const Default: Story = {
  render: (_) => (
    <div className="grid grid-cols-6 gap-4 p-4">
      {[Image, Fallback, Tooltip, MediumSize, LargeSize].map(
        (UserAvatarStory, index) => (
          <UserAvatar name={userName} {...UserAvatarStory.args} key={index} />
        )
      )}
    </div>
  ),
};

export const Image: Story = {
  args: {
    image: userImage,
  },
};

export const Fallback: Story = {
  args: {
    image: undefined,
    color: "#dae3f9",
  },
};

export const Tooltip: Story = {
  args: {
    image: userImage,
    tooltip: true,
  },
};

export const MediumSize: Story = {
  args: {
    image: userImage,
    size: 48,
  },
};

export const LargeSize: Story = {
  args: {
    image: userImage,
    size: 82,
  },
};
