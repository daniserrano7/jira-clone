import * as Avatar from "@radix-ui/react-avatar";
import { User } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";

export const UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip,
}: UserAvatarProps): JSX.Element => {
  const acronym = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  // const imagePath = new URL(`/src/ui/assets/avatars/${image}`, import.meta.url)
  //   .href;

  return (
    <div className="rounded-full">
      <Tooltip title={name} show={tooltip}>
        <Avatar.Root
          className="flex items-center"
          style={{
            minWidth: `${size}px`,
            minHeight: `${size}px`,
          }}
        >
          <Avatar.Image
            className="rounded-full"
            src={image && `/src/ui/assets/avatars/${image}`}
            width={size}
            height={size}
          />
          <Avatar.Fallback
            delayMs={0}
            className="flex justify-center items-center rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
            }}
          >
            {acronym}
          </Avatar.Fallback>
        </Avatar.Root>
      </Tooltip>
    </div>
  );
};

interface UserAvatarProps extends User {
  size?: number;
  tooltip?: boolean;
}