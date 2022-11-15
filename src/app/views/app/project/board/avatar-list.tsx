import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User } from "@domain/user";
import { projectStore } from "@infrastructure/store";
import { UserAvatar } from "@app/components/avatar";
import { ScrollArea } from "@app/components/scroll-area";

const AVATAR_SIZE = 40;
const MAX_DISPLAY_USERS = 4;

export const UserAvatarList = (): JSX.Element => {
  const users = projectStore.project.users;
  const displayUsers = users.slice(0, MAX_DISPLAY_USERS);

  return (
    <span className="ml-2 flex">
      {displayUsers.map((user, index) => (
        <div
          key={index}
          className="z-10 -ml-[5px] rounded-full border-2 border-primary-light bg-white hover:z-20"
        >
          <UserAvatar {...user} size={AVATAR_SIZE} tooltip />
        </div>
      ))}
      {users.length > MAX_DISPLAY_USERS && <MoreUsers users={users} />}
    </span>
  );
};

const MoreUsers = ({ users }: MoreUsersProps): JSX.Element => (
  <div className="z-10">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="box-content border-2 -ml-[5px] flex cursor-pointer items-center justify-center rounded-full border-primary-light bg-grey-500 text-lg hover:underline"
        style={{
          width: `${AVATAR_SIZE}px`,
          height: `${AVATAR_SIZE}px`,
        }}
      >
        {users.length - MAX_DISPLAY_USERS}+
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="rounded-md h-[400px] bg-white p-2 shadow-blue z-50">
        <ScrollArea className="pr-4">
          {users.map((user) => (
            <DropdownMenu.Item
              key={user.id}
              className="mb-2 flex items-center justify-start gap-3 outline-none last:mb-0"
            >
              <UserAvatar {...user} size={44} tooltip={false} />
              <span>{user.name}</span>
            </DropdownMenu.Item>
          ))}
        </ScrollArea>
        <DropdownMenu.Arrow className="fill-white" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
);

interface MoreUsersProps {
  users: User[];
}
