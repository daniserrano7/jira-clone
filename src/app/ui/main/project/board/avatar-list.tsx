import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
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
          className="z-10 -ml-[5px] rounded-full border-2 border-border bg-elevation-surface hover:z-20"
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
  <div className="bg-elevation-surface">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="-ml-[5px] box-content flex cursor-pointer items-center justify-center rounded-full border-2 border-border bg-background-neutral text-lg text-font hover:underline"
        style={{
          width: `${AVATAR_SIZE}px`,
          height: `${AVATAR_SIZE}px`,
        }}
      >
        {users.length - MAX_DISPLAY_USERS}+
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="z-50 h-[400px] rounded-md bg-elevation-surface-overlay p-2 shadow-blue">
        <ScrollArea className="pr-4">
          {users.map((user) => (
            <DropdownMenu.Item
              key={user.id}
              className="mb-1 flex items-center justify-start gap-3 rounded px-1 py-1 outline-none last:mb-0 focus:bg-background-neutral focus-visible:outline-none"
            >
              <UserAvatar {...user} size={44} />
              <span>{user.name}</span>
            </DropdownMenu.Item>
          ))}
        </ScrollArea>
        <DropdownMenu.Arrow className="fill-elevation-surface-overlay" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
);

interface MoreUsersProps {
  users: User[];
}
