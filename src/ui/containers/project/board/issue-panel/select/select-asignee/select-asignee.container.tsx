import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { UserId } from "domain/user";
import { Issue } from "domain/issue";
import { appStore, projectStore } from "infrastructure/store";
import { UserAvatar } from "ui/components/avatar";
import { Icon } from "ui/components/icon";
import styles from "./select-asignee.module.scss";

export const SelectAsignee = ({ issue }: SelectAsigneeProps): JSX.Element => {
  const users = projectStore.project.users;
  const defaultValue = issue.asignee?.id || appStore.user.id;
  const [ selectValue, setSelectValue ] = useState<UserId>(defaultValue);

  const onValueChange = (userId: UserId) => {
    setSelectValue(userId);
    const asignee = projectStore.project.getUser(userId);
    if (asignee) {
      issue.setAsignee(asignee);
    }
  }

  return (
    <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
      <Select.Trigger className={`${styles.trigger} ${styles[selectValue]}`}>
        <div className={styles.avatar}>
          <UserAvatar
            {...issue?.asignee} 
            tooltip={false} 
            size={32}
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
              <UserAvatar {...user} tooltip={false} />
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

interface SelectAsigneeProps {
  issue: Issue;
}