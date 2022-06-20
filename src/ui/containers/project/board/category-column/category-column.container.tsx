import { observer } from "mobx-react-lite";
import { Category } from "domain/category";
import { useStore } from "infrastructure/store";
import { Icon } from "ui/components/icon";
import { IssueCard } from "./issue-card";
import { ScrollArea } from "./scroll-area";
import styles from "./category-column.module.scss";

export const CategoryColumn = observer(({ category }: CategoryColumnProps): JSX.Element => {
  const store = useStore();

  const createIssue = () => {
    store.isEditingIssue = true;
    store.editingIssueCategory = category.id;
  }

  return (
    <div className={styles.issue_category}>
      <div className={styles.header}>
        <span>
          {category.name}
        </span>
        <button 
          onClick={createIssue}
          className={styles.create_issue}
        >
          <Icon name="add" size={24} />
        </button>
      </div>
      <div className={styles.body}>
        <ScrollArea>
          <ul className={styles.issues_list}>
            {category.issues.map((issue, index) => (
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