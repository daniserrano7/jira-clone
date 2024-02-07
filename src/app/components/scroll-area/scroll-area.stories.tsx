import type { Meta, StoryObj } from "@storybook/react";
import cx from "classix";
import { ScrollArea } from "./scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
    children: {
      defaultValue: "Scroll area",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const height = 250;

export const Default: Story = {
  render: (_) => (
    <>
      <p className="mb-1 text-font">Height: {height}px</p>
      <div
        style={{ height }}
        className="rounded bg-background-neutral p-2 text-font"
      >
        <ScrollArea>
          {Array.from({ length: 100 }, (_, index) => (
            <div
              key={index}
              className={cx(
                "p-2",
                index % 2 === 0 ? "bg-elevation-surface" : "bg-elevation-subtle"
              )}
            >
              Scroll item content
            </div>
          ))}
        </ScrollArea>
      </div>
    </>
  ),
};
