import * as AlertDialog from "@radix-ui/react-alert-dialog";
import cx from "classix";
import { twix } from "tailwindcss-radix-ui";

const buttonBaseClass = cx(
  "border-none py-1.5 px-3.5 rounded bg-grey-300 dark:bg-dark-100 font-primary-bold cursor-pointer"
);

export const Root = AlertDialog.Root;
export const Trigger = AlertDialog.Trigger;
export const Portal = AlertDialog.Portal;
export const Overlay = twix(
  AlertDialog.Overlay,
  "fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-40"
);
export const Content = twix(
  AlertDialog.Content,
  "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-5 shadow-lg dark:bg-dark-300"
);
export const Title = twix(
  AlertDialog.Title,
  "mb-5 font-primary-black text-3xl"
);
export const Description = twix(
  AlertDialog.Description,
  "mt-8 flex w-full justify-end gap-4"
);
export const Cancel = twix(
  AlertDialog.Cancel,
  cx(
    "hover:bg-grey-400 dark:text-font-light-dark dark:hover:bg-dark-500",
    buttonBaseClass
  )
);
export const Confirm = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element => (
  <button
    {...props}
    className={cx(
      buttonBaseClass,
      "bg-error-light text-error-dark hover:bg-error-hover dark:bg-error-main-dark dark:text-error-light-dark dark:hover:bg-error-hover-dark",
      props.className
    )}
  >
    {props.children}
  </button>
);
