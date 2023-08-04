import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { User, UserId, usersMock } from "@domain/user";
import * as Select from "@app/components/select";
import { UserAvatar } from "@app/components/user-avatar";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectUser: Story = {
  render: () => <SelectUserComponent />,
};

const SelectUserComponent = () => {
  const defaultUser = usersMock[0];

  const [selectedValue, setSelectedValue] = useState<User>(defaultUser);

  const onValueChange = (userId: UserId) => {
    const asignee = usersMock.find((user) => user.id === userId);

    if (asignee) {
      setSelectedValue(asignee);
    }
  };

  return (
    <Select.Root
      name="user"
      defaultValue={defaultUser.id}
      onValueChange={onValueChange}
    >
      <Select.Trigger aria-label="Open user select">
        <div className="mr-2">
          <UserAvatar {...selectedValue} size={32} />
        </div>
        <Select.Value />
        <Select.TriggerIcon />
      </Select.Trigger>
      <Select.Content>
        <Select.ScrollDownButton />
        <Select.Viewport>
          {usersMock.map((user, index) => (
            <Select.Item key={index} value={user.id}>
              <Select.ItemIndicator />
              <UserAvatar {...user} />
              <Select.ItemText>{user.name}</Select.ItemText>
            </Select.Item>
          ))}
          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Root>
  );
};

export const SelectText: Story = {
  render: () => {
    const items = ["Item 1", "Item 2", "Item 3"];

    return (
      <Select.Root name="user" defaultValue={items[0]}>
        <Select.Trigger aria-label="Open asignee select">
          Trigger
          <Select.Value />
          <Select.TriggerIcon />
        </Select.Trigger>
        <Select.Content>
          <Select.ScrollDownButton />
          <Select.Viewport>
            {items.map((item, index) => (
              <Select.Item key={index} value={item}>
                <Select.ItemIndicator />
                <Select.ItemText>{item}</Select.ItemText>
              </Select.Item>
            ))}
            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Root>
    );
  },
};
