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
          className="z-10 -ml-[5px] rounded-full border-2 border-primary-light bg-white hover:z-20 dark:border-dark-100"
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
        className="-ml-[5px] box-content flex cursor-pointer items-center justify-center rounded-full border-2 border-primary-light bg-grey-500 text-lg text-font-main hover:underline dark:border-dark-100"
        style={{
          width: `${AVATAR_SIZE}px`,
          height: `${AVATAR_SIZE}px`,
        }}
      >
        {users.length - MAX_DISPLAY_USERS}+
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="z-50 h-[400px] rounded-md bg-white p-2 shadow-blue dark:bg-dark-500">
        <ScrollArea className="pr-4">
          {users.map((user) => (
            <DropdownMenu.Item
              key={user.id}
              className="mb-1 flex items-center justify-start gap-3 py-1 outline-none last:mb-0 focus:bg-grey-300 focus-visible:outline-none dark:hover:bg-dark-100 dark:focus:bg-dark-100"
            >
              <UserAvatar {...user} size={44} />
              <span className="dark:text-font-main-dark">{user.name}</span>
            </DropdownMenu.Item>
          ))}
        </ScrollArea>
        <DropdownMenu.Arrow className="fill-white dark:fill-dark-500" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
);

interface MoreUsersProps {
  users: User[];
}
