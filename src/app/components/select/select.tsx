import * as Select from "@radix-ui/react-select";
import { twix } from "tailwindcss-radix-ui";
import cx from "classix";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Root = Select.Root;
export const Value = Select.Value;
export const ItemText = Select.ItemText;
export const ScrollUpButton = Select.ScrollUpButton;
export const ScrollDownButton = Select.ScrollUpButton;
export const Viewport = Select.Viewport;
export const Separator = Select.Separator;

export const Trigger = twix(
  Select.Trigger,
  cx(
    "flex cursor-pointer items-center rounded border-none py-1.5 px-2",
    "bg-background-neutral hover:bg-background-neutral-hovered active:bg-background-neutral-pressed",
    "font-primary-bold text-sm text-font"
  )
);

export const TriggerIcon = (): JSX.Element => (
  <Select.Icon>
    <RiArrowDropDownLine size={28} />
  </Select.Icon>
);

export const Content = twix(
  Select.Content,
  "bg-elevation-surface-overlay py-1 shadow-md"
);

export const Item = twix(
  Select.Item,
  cx(
    "relative flex items-center gap-2 cursor-pointer select-none border-l-[3px] border-l-transparent p-2 pl-8",
    "font-primary-bold text-sm text-font hover:bg-background-selected active:bg-background-selected-pressed",
    "focus:border-l-[3px] focus:border-l-border-selected focus:bg-background-selected focus-visible:outline-none outline-none"
  )
);

export const ItemIndicator = twix(
  Select.ItemIndicator,
  "absolute left-3 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-border-selected"
);
