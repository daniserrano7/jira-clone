import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { Priority, priorityList } from "domain/priority";
import { Icon } from "ui/components/icon";
import { PriorityIcon } from "ui/components/priority-icon";
import styles from "./select-priority.module.scss";

export const SelectPriority = (): JSX.Element => {
  const defaultValue = priorityList[0].id;
  const [ selectValue, setSelectValue ] = useState<Priority>(defaultValue);

  const onValueChange = (value: Priority): void => {
    console.log("VALUE: ", value);
    setSelectValue(value);
  }

  return (
    <div className={styles.select_status}>
      <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
        <Select.Trigger className={`${styles.trigger} ${styles.trigger_asignee} ${styles[selectValue]}`}>
          <div className={styles.avatar}>
            <PriorityIcon priority={selectValue} size={14} />
          </div>
          <Select.Value />
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
                <Select.ItemIndicator className={styles.indicator} />
                <PriorityIcon priority={priority.id} size={14} />
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