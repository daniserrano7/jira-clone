import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { twix } from "tailwindcss-radix-ui";
import { Button, Props as ButtonProps } from "../button";

export const Root = AlertDialog.Root;
export const Trigger = AlertDialog.Trigger;
export const Portal = AlertDialog.Portal;
export const Overlay = twix(
  AlertDialog.Overlay,
  "fixed top-0 left-0 z-50 h-full w-full backdrop-blur-sm"
);
export const Content = twix(
  AlertDialog.Content,
  "fixed top-1/2 text-font left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-elevation-surface-overlay p-5 shadow-lg"
);
export const Title = twix(
  AlertDialog.Title,
  "mb-5 font-primary-black text-3xl"
);
export const Description = twix(
  AlertDialog.Description,
  "mt-8 flex w-full justify-end gap-4"
);
export const Cancel = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <AlertDialog.Cancel asChild>
    <Button {...rest} color="neutral" variant="subtlest">
      Cancel
    </Button>
  </AlertDialog.Cancel>
);
export const Action = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <Button {...rest} color="danger">
    {children}
  </Button>
);
