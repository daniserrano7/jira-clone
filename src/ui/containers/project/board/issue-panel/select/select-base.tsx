import * as Select from "@radix-ui/react-select";
import { twix } from "tailwindcss-radix-ui";
import cx from "classix";
import { Icon } from "ui/components/icon";

export const SelectTrigger = twix(
  Select.Trigger,
  cx(
    "flex cursor-pointer items-center rounded border-none bg-grey-300 py-1.5 px-2",
    "font-primary-bold text-sm text-font-grey hover:bg-grey-500"
  )
);

export const SelectTriggerIcon = (): JSX.Element => (
  <Select.Icon className="rotate-90">
    <Icon name="arrow" size={28} />
  </Select.Icon>
);

export const SelectContent = twix(
  Select.Content,
  "border-1 border-grey-400 bg-white py-1 shadow-md"
);

export const SelectItem = twix(
  Select.Item,
  cx(
    "relative flex items-center gap-2 cursor-pointer select-none border-l-[3px] border-l-transparent p-2 pl-8",
    "font-primary-bold text-sm text-font-grey font-primary-bold text-sm text-font-grey",
    "focus:border-l-[3px] focus:border-l-primary-main focus:bg-grey-300 outline-none"
  )
);

export const SelectItemIndicator = twix(
  Select.ItemIndicator,
  "absolute left-3 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-primary-main"
);
