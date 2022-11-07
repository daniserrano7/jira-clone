import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { projectStore, SortFilter } from "@infrastructure/store";
import { Icon, IconName } from "@app/components/icon";
import styles from "./select-sort.module.scss";

export const SelectSort = (): JSX.Element => {
  const [value, setValue] = useState<SortFilter>(projectStore.filters.sort);

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
    projectStore.filters.sort = value;
    setValue(value);
  };

  return (
    <Select.Root defaultValue={value} onValueChange={onValueChange}>
      <Select.Trigger className={styles.trigger}>
        <div className={styles.icon}>
          <Icon name="sort" size={14} />
        </div>
        <Select.Value>Sort by {value}</Select.Value>
      </Select.Trigger>
      <Select.Content className={styles.content}>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {selectOptions.map((option, index) => (
            <Select.Item key={index} value={option.id} className={styles.item}>
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
