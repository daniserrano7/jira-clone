import * as Avatar from '@radix-ui/react-avatar'
import { User } from 'domain/user'
import { Tooltip } from 'ui/components/tooltip'
import styles from './avatar.module.scss'

export const UserAvatar = ({
    name,
    image,
    color,
    size = 36,
    tooltip,
}: UserAvatarProps): JSX.Element => {
    const acronym = name
        .split(' ')
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join('')

    const imagePath = new URL(
        `/src/ui/assets/avatars/${image}`,
        import.meta.url
    ).href

    return (
        <div className={styles.container}>
            <Tooltip title={name} show={tooltip}>
                <Avatar.Root
                    className={styles.root}
                    style={{
                        minWidth: `${size}px`,
                        minHeight: `${size}px`,
                    }}
                >
                    <Avatar.Image
                        src={image && imagePath}
                        width={size}
                        height={size}
                    />
                    <Avatar.Fallback
                        delayMs={0}
                        className={styles.fallback}
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
    )
}

interface UserAvatarProps extends User {
    size?: number
    tooltip?: boolean
}
