import * as AlertDialog from "@radix-ui/react-alert-dialog";
import cx from "classix";
import { twix } from "tailwindcss-radix-ui";
import { Button, Props as ButtonProps } from "./button";

const buttonBaseClass = cx(
  "border-none py-1.5 px-3.5 rounded bg-grey-300 font-primary-bold cursor-pointer"
);

export const Root = AlertDialog.Root;
export const Trigger = AlertDialog.Trigger;
export const Portal = AlertDialog.Portal;
export const Overlay = twix(
  AlertDialog.Overlay,
  "fixed top-0 left-0 z-50 h-full w-full backdrop-blur-sm"
);
export const Content = twix(
  AlertDialog.Content,
  "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-elevation-surface-overlay p-5 shadow-lg"
);
export const Title = twix(
  AlertDialog.Title,
  "mb-5 font-primary-black text-3xl"
);
export const Description = twix(
  AlertDialog.Description,
  "mt-8 flex w-full justify-end gap-4"
);
export const Cancel = ({ children, ...args }: ButtonProps): JSX.Element => (
  <AlertDialog.Cancel asChild>
    <Button {...args} variant="neutral">
      Cancel
    </Button>
  </AlertDialog.Cancel>
);
export const Action = ({ children, ...args }: ButtonProps): JSX.Element => (
  <AlertDialog.Action asChild>
    <Button {...args} variant="danger">
      {children}
    </Button>
  </AlertDialog.Action>
);
