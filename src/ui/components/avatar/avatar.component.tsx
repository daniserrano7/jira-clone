import * as Avatar from "@radix-ui/react-avatar";
import { User } from "domain/user";
import { Tooltip } from "ui/components/tooltip";
import styles from "./avatar.module.scss";


export const UserAvatar = ({ name, image, size=36, tooltip }: UserAvatarProps): JSX.Element => {
  const acronym = name
    .split(" ")
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join("");

  const getRandomPastelColor = () => {
    const h = 360 * Math.random();
    const s = 25 + 70 * Math.random();
    const l = 85 + 10 * Math.random();
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  return (
    <div className={styles.container}>
      <Tooltip title={name} show={tooltip}>
        <Avatar.Root className={styles.root}>
          <Avatar.Image
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            src={image && require(`ui/assets/avatars/${image}`).default} 
            width={size}
            height={size}
          />
          <Avatar.Fallback
            delayMs={0} 
            className={styles.fallback}
            style={{ 
              width: `${size}px`, 
              height: `${size}px`,
              backgroundColor: getRandomPastelColor(),
            }}
          >
            {acronym}
          </Avatar.Fallback>
        </Avatar.Root>
      </Tooltip>
    </div>
  )
}

interface UserAvatarProps extends User {
  size?: number;
  tooltip?: boolean;
}