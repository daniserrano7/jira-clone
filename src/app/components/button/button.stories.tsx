import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
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
  render: () => (
    <>
      <div className="grid grid-cols-6 gap-4 p-4">
        {[
          Primary,
          Neutral,
          Success,
          Danger,
          Warning,
          Info,
          PrimarySubtle,
          NeutralSubtle,
          SuccessSubtle,
          DangerSubtle,
          WarningSubtle,
          InfoSubtle,
          PrimaryText,
          NeutralText,
          SuccessText,
          DangerText,
          WarningText,
          InfoText,
        ].map((ButtonStory, index) => (
          <Button {...ButtonStory.args} className="w-fit" key={index}>
            {ButtonStory.args?.children}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[PrimaryContainedBig, PrimarySubtleBig, PrimaryTextBig].map(
          (ButtonStory, index) => (
            <Button {...ButtonStory.args} className="w-fit" key={index}>
              {ButtonStory.args?.children}
            </Button>
          )
        )}
      </div>
    </>
  ),
};

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
    children: "Neutral",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    children: "Success",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    children: "Danger",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    children: "Warning",
  },
};

export const Info: Story = {
  args: {
    color: "info",
    children: "Info",
  },
};

export const PrimarySubtle: Story = {
  args: {
    variant: "subtlest",
    children: "Primary",
  },
};

export const NeutralSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "neutral",
    children: "Neutral",
  },
};

export const SuccessSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "success",
    children: "Success",
  },
};

export const DangerSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "danger",
    children: "Danger",
  },
};

export const WarningSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "warning",
    children: "Warning",
  },
};

export const InfoSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "info",
    children: "Info",
  },
};

export const PrimaryText: Story = {
  args: {
    variant: "text",
    children: "Primary",
  },
};

export const NeutralText: Story = {
  args: {
    variant: "text",
    color: "neutral",
    children: "Neutral",
  },
};

export const SuccessText: Story = {
  args: {
    variant: "text",
    color: "success",
    children: "Success",
  },
};

export const DangerText: Story = {
  args: {
    variant: "text",
    color: "danger",
    children: "Danger",
  },
};

export const WarningText: Story = {
  args: {
    variant: "text",
    color: "warning",
    children: "Warning",
  },
};

export const InfoText: Story = {
  args: {
    variant: "text",
    color: "info",
    children: "Info",
  },
};

export const PrimaryContainedBig: Story = {
  args: {
    size: "lg",
    children: "Primary",
  },
};

export const PrimarySubtleBig: Story = {
  args: {
    variant: "subtlest",
    size: "lg",
    children: "Primary",
  },
};

export const PrimaryTextBig: Story = {
  args: {
    variant: "text",
    size: "lg",
    children: "Primary",
  },
};
