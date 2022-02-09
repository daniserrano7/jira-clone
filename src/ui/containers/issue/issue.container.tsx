
import styles from "./issue.module.scss";
import { Icon } from "ui/components";
export const Issue = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Issue title</p>
      <div className={styles.details}>
        <span>
          <Icon name="task" size={16} />
          <span className={styles.task_name}>Task 1</span>
        </span>
        <span className={styles.priority}>
          <Icon name="priority" size={16} />
        </span>
      </div>
    </div>
  )
}