import { Avatar, AvatarProps } from "ui/components";
import styles from "./avatar-list.module.scss";

export const AvatarList = ({ avatars }: AvatarListProps): JSX.Element => {
  return (
    <span className={styles.container}>
      {avatars.map((avatar, index) => (
        <div key={index} className={styles.avatar_container}>
          <Avatar {...avatar} />
        </div>
      ))}
    </span>
  )
}

export interface AvatarListProps {
  avatars: AvatarProps[];
}