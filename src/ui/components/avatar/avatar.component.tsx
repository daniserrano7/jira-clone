import styles from "./avatar.module.scss";

export const Avatar = ({ image = "default-avatar.png", tooltip }: AvatarProps): JSX.Element => {
  return (
    <span className={styles.container}>
      <img
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        src={require("ui/assets/images/default-avatar.png").default} 
        width={32}
        height={32}
      />
    </span>
  )
}

export interface AvatarProps {
  image?: string;
  tooltip?: string;
}