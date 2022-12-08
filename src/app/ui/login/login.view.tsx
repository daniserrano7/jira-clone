import { useState } from "react";
import { Form } from "@remix-run/react";
import * as Select from "@radix-ui/react-select";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import {
  SelectContent,
  SelectTrigger,
  SelectTriggerIcon,
  SelectItem,
  SelectItemIndicator,
} from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div>
      <h1>Select login user</h1>
      <h2>
        There is no authentication involved. You can try to login with any user
        you want!
      </h2>
      <Form method="post">
        <Select.Root
          name="user"
          defaultValue={userMock1.id}
          onValueChange={onValueChange}
        >
          <SelectTrigger>
            <div className="mr-2">
              <UserAvatar {...selectedValue} tooltip={false} size={32} />
            </div>
            <Select.Value />
            <SelectTriggerIcon />
          </SelectTrigger>
          <SelectContent>
            <Select.ScrollUpButton />
            <Select.Viewport>
              {users.map((user, index) => (
                <SelectItem key={index} value={user.id}>
                  <SelectItemIndicator />
                  <UserAvatar {...user} tooltip={false} />
                  <Select.ItemText>{user.name}</Select.ItemText>
                </SelectItem>
              ))}
              <Select.Separator />
            </Select.Viewport>
            <Select.ScrollDownButton />
          </SelectContent>
        </Select.Root>
        <button type="submit" name="_action" value="setUser">
          Login
        </button>
      </Form>
    </div>
  );
};

interface Props {
  users: User[];
}
