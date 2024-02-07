import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "react-toastify";
import { Theme } from "@app/store/theme.store";
import { Button } from "../button";
import { Toast } from "./toast";
import "react-toastify/dist/ReactToastify.css";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <Toast theme={Theme.LIGHT} />
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

const text = "This is the alert text";

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4 p-4">
      {[SuccessAlert, WarningAlert, DangerAlert, InfoAlert].map(
        (ComponentAlert, index) => (
          <ComponentAlert key={index} />
        )
      )}
    </div>
  ),
};

const SuccessAlert = () => (
  <Button
    color="success"
    variant="subtlest"
    onClick={() => toast.success(text)}
  >
    Success
  </Button>
);
export const Success: Story = {
  render: () => <SuccessAlert />,
};

const WarningAlert = () => (
  <Button
    color="warning"
    variant="subtlest"
    onClick={() => toast.warning(text)}
  >
    Warning
  </Button>
);
export const Warning: Story = {
  render: () => <WarningAlert />,
};

const DangerAlert = () => (
  <Button color="danger" variant="subtlest" onClick={() => toast.error(text)}>
    Danger
  </Button>
);
export const Danger: Story = {
  render: () => <DangerAlert />,
};

const InfoAlert = () => (
  <Button color="info" variant="subtlest" onClick={() => toast.info(text)}>
    Info
  </Button>
);
export const Info: Story = {
  render: () => <InfoAlert />,
};
