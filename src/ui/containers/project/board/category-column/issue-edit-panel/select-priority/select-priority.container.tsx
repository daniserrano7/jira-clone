import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { priorityList } from "domain/priority";
import { Icon } from "ui/components/icon";
import { PriorityIcon } from "ui/components/priority-icon";
import styles from "./select-priority.module.scss";

export const SelectPriority = (): JSX.Element => {
  const defaultValue = priorityList[0].id;
  const [ selectValue, setSelectValue ] = useState<string>(defaultValue);

  const onValueChange = (value: string): void => {
    setSelectValue(value);
  }

  return (
    <div className={styles.select_status}>
      <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
        <Select.Trigger className={`${styles.trigger} ${styles.trigger_asignee} ${styles[selectValue]}`}>
          <div className={styles.avatar}>
            <Icon name="priority" size={18} />
          </div>
          <Select.Value style={{ marginLeft: "8px" }} className={styles.value} />
          <Select.Icon className={styles.icon}>
            <Icon name="arrow" size={28} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content className={styles.content}>
          <Select.ScrollUpButton />
          <Select.Viewport>
            {priorityList.map((priority, index) => (
              <Select.Item
                key={index} 
                value={priority.id} 
                className={`${styles.item} ${styles[priority.id]}`}
              >
                <PriorityIcon priority={priority.id} size={22} />
                <Select.ItemText>
                  {priority.label}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Root>
    </div>
  )
}