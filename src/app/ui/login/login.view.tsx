import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="mx-auto max-w-[400px] pt-[10vh]">
      <h1 className="font-primary-black text-5xl text-font">
        Select login user
      </h1>
      <h2 className="mb-8 mt-3 font-primary-light text-lg text-font-subtle">
        There is no authentication involved. You can login with any user you
        want! Keep in mind you can only access the projects the user is member
        of. Try to create issues and comments with different users to see how it
        reflects in the UI and database. You can logout on the user avatar.
      </h2>
      <Form method="post" className="mx-auto w-[300px]">
        <Select.Root
          name="user"
          defaultValue={userMock1.id}
          onValueChange={onValueChange}
        >
          <Select.Trigger
            className="flex w-full justify-between"
            aria-label="Open user select"
          >
            <div className="flex items-center gap-2">
              <UserAvatar {...selectedValue} />
              <Select.Value />
            </div>
            <Select.TriggerIcon />
          </Select.Trigger>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport>
              {users.map((user, index) => (
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
        <Button
          type="submit"
          name="_action"
          value="setUser"
          aria-label="Login"
          className="mt-2 w-full"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

interface Props {
  users: User[];
}
