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
    <div className="mx-auto max-w-[400px] pt-[20vh]">
      <h1 className="font-primary-black text-5xl">Select login user</h1>
      <h2 className="mt-3 mb-8 font-primary-light text-lg text-font-light dark:text-font-light-dark">
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
          <SelectTrigger
            className="flex w-full justify-between"
            aria-label="Open user select"
          >
            <div className="flex items-center gap-2">
              <UserAvatar {...selectedValue} />
              <Select.Value />
            </div>
            <SelectTriggerIcon />
          </SelectTrigger>
          <SelectContent>
            <Select.ScrollUpButton />
            <Select.Viewport>
              {users.map((user, index) => (
                <SelectItem key={index} value={user.id}>
                  <SelectItemIndicator />
                  <UserAvatar {...user} />
                  <Select.ItemText>{user.name}</Select.ItemText>
                </SelectItem>
              ))}
              <Select.Separator />
            </Select.Viewport>
            <Select.ScrollDownButton />
          </SelectContent>
        </Select.Root>
        <button
          type="submit"
          name="_action"
          value="setUser"
          aria-label="Login"
          className="mt-2 w-full rounded bg-primary-main p-2 text-white hover:bg-primary-main-hover dark:bg-primary-main-dark dark:hover:bg-primary-main-hover-dark"
        >
          Login
        </button>
      </Form>
    </div>
  );
};

interface Props {
  users: User[];
}
