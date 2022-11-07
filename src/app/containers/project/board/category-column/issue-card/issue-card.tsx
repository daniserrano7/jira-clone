import { Issue } from "@domain/issue";
import { observer } from "mobx-react-lite";
import { useDrag } from "react-dnd";
import { projectStore } from "@infrastructure/store";
import { Icon } from "@app/components/icon";
import { PriorityIcon } from "@app/components/priority-icon";
import styles from "./issue-card.module.scss";

export const IssueCard = observer(({ issue, handleDragging }: IssueCardProps): JSX.Element => {
  const issueIdPrefix = issue.id.split("-")[0];

  const openIssue = () => {
    projectStore.editingIssue = issue;
  };

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DRAG_ISSUE_CARD,
      item: {
        issueId: issue.id,
        categoryId: issue.categoryId,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [issue.id]
  );

  handleDragging(isDragging);

  return (
    <button
      ref={drag}
      onClick={openIssue}
      className={`
        ${styles.container} 
        ${isDragging ? styles.dragging : undefined}
      `}
    >
      <p className={styles.title}>{issue.name}</p>
      <div className={styles.details}>
        <span className={styles.issue_type}>
          <span className={styles.icon}>
            <Icon name="task" size={16} />
          </span>
          <span className={styles.code}>{issueIdPrefix}</span>
        </span>
        <PriorityIcon priority={issue.priority} size={14} />
      </div>
    </button>
  );
});

interface IssueCardProps {
  issue: Issue;
  handleDragging: (isDragging: boolean) => void;
}

export const DRAG_ISSUE_CARD = "ISSUE_CARD";
