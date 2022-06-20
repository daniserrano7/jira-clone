import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { useStore } from "infrastructure/store";
import { Icon } from "ui/components/icon";
import styles from "./select-status.module.scss";

export const SelectStatus = (): JSX.Element => {
  const store = useStore();
  const categories = store.project.categories;
  const defaultValue = categories[0].id;
  const [ selectValue, setSelectValue ] = useState<string>(defaultValue);

  interface SelectItem {
    value: string;
    label: string;
  }
  const statusSelectInfo: SelectItem[] = categories.map(category => ({
    value: category.id,
    label: category.name,
  }));

  const onValueChange = (value: string): void => {
    setSelectValue(value.toLowerCase());
  }

  return (
    <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
      <Select.Trigger className={`${styles.trigger} ${styles[selectValue]}`}>
        <Select.Value />
        <Select.Icon className={styles.icon}>
          <Icon name="arrow" size={28} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className={styles.content}>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {statusSelectInfo.map((item, index) => (
            <Select.Item
              key={index} 
              value={item.value} 
              className={`${styles.item} ${styles[item.value.toLowerCase()]}`}
            >
              <Select.ItemIndicator className={styles.indicator} />
              <Select.ItemText>
                {item.label}
              </Select.ItemText>
            </Select.Item>
          ))}
          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Root>
  )
}