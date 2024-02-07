import type { Meta, StoryObj } from "@storybook/react";
import * as Dialog from "./dialog";
import { Button } from "../button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Trigger</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content className="relative">
            <Dialog.Title>Alert title</Dialog.Title>
            <Dialog.Description className="mb-4">
              Here you can add the content of the dialog
            </Dialog.Description>
            <div className="flex gap-2">
              <Button>Accept</Button>
              <Dialog.Close asChild>
                <Button color="neutral" variant="subtlest">
                  Close
                </Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
