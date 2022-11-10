import { useState } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { User, UserId } from "domain/user";
import { Issue } from "domain/issue";
import { appStore, projectStore } from "infrastructure/store";
import { UserAvatar } from "ui/components/avatar";
import { Select } from "./select";

export const SelectAsignee = ({ issue }: Props): JSX.Element => {
  const defaultUser = issue.asignee || appStore.user;

  const [selectedValue, setSelectedValue] = useState<User>(defaultUser);

  const users = projectStore.project.users;
  const items = users.map((user) => ({
    value: user.id,
    element: (
      <div className="flex items-center gap-2">
        <UserAvatar {...user} tooltip={false} />
        <SelectPrimitive.ItemText>{user.name}</SelectPrimitive.ItemText>
      </div>
    ),
  }));
  const TriggerAvatar = () => (
    <div className="mr-2">
      <UserAvatar {...selectedValue} tooltip={false} size={32} />
    </div>
  );

  const onChange = (userId: UserId) => {
    const asignee = projectStore.project.getUser(userId);
    if (asignee) {
      setSelectedValue(asignee);
      issue.setAsignee(asignee);
    }
  };

  return (
    <Select
      triggerSymbol={<TriggerAvatar />}
      items={items}
      defaultValue={defaultUser.id}
      onChange={onChange}
    />
  );
};

interface Props {
  issue: Issue;
}
