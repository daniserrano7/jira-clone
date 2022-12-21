import * as Select from "@radix-ui/react-select";
import { twix } from "tailwindcss-radix-ui";
import cx from "classix";
import { RiArrowDropDownLine } from "react-icons/ri";

export const SelectTrigger = twix(
  Select.Trigger,
  cx(
    "flex cursor-pointer items-center rounded border-none bg-grey-300 dark:bg-dark-500 py-1.5 px-2",
    "font-primary-bold text-sm text-font-grey dark:text-font-main-dark hover:bg-grey-500 dark:hover:bg-dark-200"
  )
);

export const SelectTriggerIcon = (): JSX.Element => (
  <Select.Icon>
    <RiArrowDropDownLine size={28} />
  </Select.Icon>
);

export const SelectContent = twix(
  Select.Content,
  "border-1 border-grey-400 bg-white dark:bg-dark-500 py-1 shadow-md"
);

export const SelectItem = twix(
  Select.Item,
  cx(
    "relative flex items-center gap-2 cursor-pointer select-none border-l-[3px] border-l-transparent p-2 pl-8",
    "font-primary-bold text-sm text-font-grey dark:text-font-light-dark font-primary-bold text-sm text-font-grey",
    "focus:border-l-[3px] focus:border-l-primary-main focus:bg-grey-300 focus-visible:outline-none dark:focus:bg-dark-100 dark:hover:bg-dark-100 outline-none"
  )
);

export const SelectItemIndicator = twix(
  Select.ItemIndicator,
  "absolute left-3 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-primary-main"
);
