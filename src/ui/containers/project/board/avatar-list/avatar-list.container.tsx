import { useStore } from "infrastructure/store";
import { UserAvatar } from "ui/components/avatar";
import styles from "./avatar-list.module.scss";

export const UserAvatarList = (): JSX.Element => {
  const store = useStore();

  return (
    <span className={styles.container}>
      {store.project.users.map((user, index) => (
        <div key={index} className={styles.avatar_container}>
          <UserAvatar {...user} size={40} tooltip />
        </div>
      ))}
    </span>
  )
}