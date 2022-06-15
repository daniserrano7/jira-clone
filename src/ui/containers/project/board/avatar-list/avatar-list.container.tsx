import { Avatar, AvatarProps } from "ui/components/avatar";
import { Tooltip } from "ui/components/tooltip";
import styles from "./avatar-list.module.scss";

export const AvatarList = ({ avatars }: AvatarListProps): JSX.Element => {
  return (
    <span className={styles.container}>
      {avatars.map((avatar, index) => (
        <div key={index} className={styles.avatar_container}>
          <Tooltip title={avatar.tooltip} >
            <Avatar {...avatar} />
          </Tooltip>
        </div>
      ))}
    </span>
  )
}

export interface AvatarListProps {
  avatars: AvatarProps[];
}