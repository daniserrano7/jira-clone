import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User } from "@domain/user";
import { UserAvatar } from "@app/components/avatar";
import { ScrollArea } from "@app/components/scroll-area";

const AVATAR_SIZE = 40;
const MAX_DISPLAY_USERS = 4;

export const UserAvatarList = ({ users }: Props): JSX.Element => {
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

interface Props {
  users: User[];
}

const MoreUsers = ({ users }: MoreUsersProps): JSX.Element => (
  <div className="z-10">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="-ml-[5px] box-content flex cursor-pointer items-center justify-center rounded-full border-2 border-primary-light bg-grey-500 text-lg hover:underline"
        style={{
          width: `${AVATAR_SIZE}px`,
          height: `${AVATAR_SIZE}px`,
        }}
      >
        {users.length - MAX_DISPLAY_USERS}+
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="z-50 h-[400px] rounded-md bg-white p-2 shadow-blue">
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
