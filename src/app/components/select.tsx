import * as Select from "@radix-ui/react-select";
import { twix } from "tailwindcss-radix-ui";
import cx from "classix";
import { RiArrowDropDownLine } from "react-icons/ri";

export const SelectTrigger = twix(
  Select.Trigger,
  cx(
    "flex cursor-pointer items-center rounded border-none py-1.5 px-2",
    "bg-background-accent-grey-subtlest hover:bg-background-accent-grey-subtler active:bg-background-accent-grey-subtle",
    "font-primary-bold text-sm"
  )
);

export const SelectTriggerIcon = (): JSX.Element => (
  <Select.Icon>
    <RiArrowDropDownLine size={28} />
  </Select.Icon>
);

export const SelectContent = twix(
  Select.Content,
  "border-1 border-grey-400 bg-elevation-surface-overlay py-1 shadow-md"
);

export const SelectItem = twix(
  Select.Item,
  cx(
    "relative flex items-center gap-2 cursor-pointer select-none border-l-[3px] border-l-transparent p-2 pl-8",
    "font-primary-bold text-sm hover:bg-background-selected active:bg-background-selected-pressed",
    "focus:border-l-[3px] focus:border-l-border-selected focus:bg-background-selected focus-visible:outline-none outline-none"
  )
);

export const SelectItemIndicator = twix(
  Select.ItemIndicator,
  "absolute left-3 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-border-selected"
);
