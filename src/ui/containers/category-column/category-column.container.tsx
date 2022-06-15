import { observer } from "mobx-react-lite";
import { Category } from "domain/category";
import { createIssue } from "domain/issue";
import { useStore } from "infrastructure/store";
import { Icon } from "ui/components/icon";
import { IssueCard } from "ui/containers/issue-card";
import { ScrollArea } from "./scroll-area/scroll-area.container";
import styles from "./category-column.module.scss";

export const CategoryColumn = observer(({ category }: CategoryColumnProps): JSX.Element => {
  const { name, issues } = category;
  const store = useStore();

  const createEmptyIssue = () => {
    store.editingIssue = createIssue({});
  }

  return (
    <div className={styles.issue_category}>
      <div className={styles.header}>
        <span>
          {name}
        </span>
        <button className={styles.add_issue} onClick={createEmptyIssue}>
          <Icon name="add" size={24} />
        </button>
      </div>
      <div className={styles.body}>
        <ScrollArea>
          <ul className={styles.issues_list}>
            {issues.map((issue, index) => (
              <li key={index} >
                <IssueCard issue={issue} />
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  )
});

interface CategoryColumnProps {
  category: Category;
}