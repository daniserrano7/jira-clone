import { Issue } from "domain/issue";
import { useStore } from "infrastructure/store";
import { Icon } from "ui/components/icon";
import { PriorityIcon } from "ui/components/priority-icon";
import styles from "./issue-card.module.scss";


export const IssueCard = ({ issue }: IssueCardProps): JSX.Element => {
  const store = useStore();

  const openIssue = () => {
    store.editingIssue = issue;  
  }

  return (
    <button onClick={openIssue} className={styles.container}>
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
        <PriorityIcon priority={issue.priority} size={14} />
      </div>
    </button>
  )
};

interface IssueCardProps {
  issue: Issue;
}