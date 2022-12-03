import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { useProjectStore, SortFilter } from "@app/views/app/project";
import { Icon, IconName } from "@app/components/icon";

export const SelectSort = (): JSX.Element => {
  const { filters } = useProjectStore();
  const [value, setValue] = useState<SortFilter>(filters.sort);

  const options: SortFilter[] = ["date", "priority"];
  const optionIcon: Record<SortFilter, IconName> = {
    date: "clock",
    priority: "priority",
  };

  interface SelectOption {
    id: SortFilter;
    label: string;
  }

  const selectOptions: SelectOption[] = options.map((option) => ({
    id: option,
    label: option,
  }));

  const onValueChange = (value: SortFilter): void => {
    filters.sort = value;
    setValue(value);
  };

  return (
    <Select.Root defaultValue={value} onValueChange={onValueChange}>
      <Select.Trigger className="flex cursor-pointer items-center justify-center rounded border-none bg-primary-light py-1 px-3 text-xs text-primary-main hover:bg-primary-light-hover dark:border-2 dark:border-solid dark:border-primary-main-dark dark:bg-transparent dark:text-primary-main-dark dark:hover:bg-primary-main-dark dark:hover:bg-opacity-20 dark:focus-visible:outline-white">
        <div className="mr-2 flex items-center">
          <Icon name="sort" size={14} />
        </div>
        <Select.Value>Sort by {value}</Select.Value>
      </Select.Trigger>
      <Select.Content className="rounded bg-white p-1.5 shadow-blue dark:bg-dark-500">
        <Select.ScrollUpButton />
        <Select.Viewport>
          {selectOptions.map((option, index) => (
            <Select.Item
              key={index}
              value={option.id}
              className="flex cursor-pointer items-center gap-2 rounded px-2 py-2 text-2xs uppercase leading-none text-primary-main outline-none hover:bg-primary-light dark:text-primary-main-dark dark:hover:bg-dark-300"
            >
              <Icon name={optionIcon[option.id]} size={12} />
              <Select.ItemText>{option.label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Root>
  );
};
