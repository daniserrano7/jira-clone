import { Priority } from 'domain/priority'
import { Icon } from 'ui/components/icon'
import styles from './priority-icon.module.scss'

export const PriorityIcon = ({
    priority,
    size = 16,
}: PriorityIconProps): JSX.Element => (
    <span className={`${styles.container} ${styles[priority]}`}>
        <Icon name="priority" size={size} />
    </span>
)

interface PriorityIconProps {
    priority: Priority
    size?: number
}
