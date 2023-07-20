import * as Dialog from "@radix-ui/react-dialog";
import cx from "classix";
import { twix } from "tailwindcss-radix-ui";

export const Root = Dialog.Root;
export const Trigger = Dialog.Trigger;
export const Portal = Dialog.Portal;
export const Title = Dialog.Title;

export const Overlay = twix(
  Dialog.Overlay,
  cx(
    "absolute top-0 left-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto py-[40px] px-[40px]",
    "radix-state-open:animate-fade-in duration-300 bg-black bg-opacity-50 backdrop-blur-md"
  )
);
export const Content = twix(
  Dialog.Content,
  cx(
    "relative z-50 w-4/5 max-w-[1000px] rounded-md bg-white py-6 px-8 shadow-lg dark:bg-dark-300",
    "duration-300 radix-state-open:animate-slide-up"
  )
);
