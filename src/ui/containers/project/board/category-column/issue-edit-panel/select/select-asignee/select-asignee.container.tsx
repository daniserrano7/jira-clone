import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { UserId } from "domain/user";
import { useStore } from "infrastructure/store";
import { Avatar } from "ui/components/avatar";
import { Icon } from "ui/components/icon";
import styles from "./select-asignee.module.scss";

export const SelectAsignee = (): JSX.Element => {
  const store = useStore();
  const users = store.project.users;
  const defaultValue = users[0].id;
  const [ selectValue, setSelectValue ] = useState<UserId>(defaultValue);

  return (
    <Select.Root defaultValue={defaultValue} onValueChange={setSelectValue}>
      <Select.Trigger className={`${styles.trigger} ${styles[selectValue]}`}>
        <div className={styles.avatar}>
          <Avatar 
            size={32}
            image="default-avatar.png"
            tooltip="User"
          />
        </div>
        <Select.Value />
        <Select.Icon className={styles.icon}>
          <Icon name="arrow" size={28} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className={styles.content}>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {users.map((user, index) => (
            <Select.Item
              key={index} 
              value={user.id} 
              className={`${styles.item} ${styles[user.id]}`}
            >
              <Select.ItemIndicator className={styles.indicator} />
              <Avatar 
                size={32}
                image="default-avatar.png"
                tooltip="User"
              />
              <Select.ItemText>
                {user.name}
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