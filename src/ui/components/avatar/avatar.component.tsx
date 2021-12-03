import styles from "./avatar.module.scss";

export const Avatar = ({ image = "default-avatar.png", size = 32 }: AvatarProps): JSX.Element => {
  return (
    <span className={styles.container}>
      <img
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        src={require(`ui/assets/images/${image}`).default} 
        width={size}
        height={size}
      />
    </span>
  )
}

export interface AvatarProps {
  image?: string;
  tooltip?: string;
  size?: number;
}