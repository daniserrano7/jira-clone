import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { projectStore } from 'infrastructure/store';
import { UserAvatar } from 'ui/components/avatar';
import { ScrollArea } from 'ui/components/scroll-area';
import styles from './avatar-list.module.scss';

export const UserAvatarList = (): JSX.Element => {
  const AVATAR_SIZE = 40;
  const MAX_USERS = 4;

  const users = projectStore.project.users.slice(0, MAX_USERS);

  const MoreUsers = (): JSX.Element => (
    <div className={styles.more_users}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          className={styles.trigger}
          style={{
            width: `${AVATAR_SIZE}px`,
            height: `${AVATAR_SIZE}px`,
          }}
        >
          {projectStore.project.users.length - MAX_USERS}+
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className={styles.content}>
          <ScrollArea>
            {projectStore.project.users.map((user) => (
              <DropdownMenu.Item key={user.id} className={styles.item}>
                <UserAvatar {...user} size={44} tooltip={false} />
                <span>{user.name}</span>
              </DropdownMenu.Item>
            ))}
          </ScrollArea>
          <DropdownMenu.Arrow className={styles.arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );

  return (
    <span className={styles.container}>
      {users.map((user, index) => (
        <div key={index} className={styles.avatar_container}>
          <UserAvatar {...user} size={AVATAR_SIZE} tooltip />
        </div>
      ))}
      {projectStore.project.users.length > MAX_USERS && <MoreUsers />}
    </span>
  );
};
