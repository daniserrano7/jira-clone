import { Issue } from "domain/issue";
import { Icon } from "ui/components/icon";
import { PriorityIcon } from "ui/components/priority-icon";
import styles from "./issue-card.module.scss";


export const IssueCard = ({ issue }: IssueCardProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {issue.name}
      </p>
      <div className={styles.details}>
        <span className={styles.issue_type}>
          <span className={styles.icon}>
            <Icon name="task" size={16} />
          </span>
          <span className={styles.code}>Issue 1</span>
        </span>
        <PriorityIcon priority={issue.priority} />
      </div>
    </div>
  )
};

interface IssueCardProps {
  issue: Issue;
}