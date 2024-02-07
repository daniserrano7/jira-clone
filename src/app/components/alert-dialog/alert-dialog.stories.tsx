import type { Meta, StoryObj } from "@storybook/react";
import * as AlertDialog from "./alert-dialog";
import { Button } from "../button";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button>Trigger</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Alert title</AlertDialog.Title>
          <AlertDialog.Description>
            This is the description of the alert dialog. Here you can add more
            information about the alert.
          </AlertDialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action>Action</AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
