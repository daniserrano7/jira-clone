import { observer } from "mobx-react-lite";
import { Category } from "domain/category";
import { IssueCard } from "./issue-card";
import { ScrollArea } from "./scroll-area";
import { IssueEditPanel } from "./issue-edit-panel";
import styles from "./category-column.module.scss";

export const CategoryColumn = observer(({ category }: CategoryColumnProps): JSX.Element => {
  const { name, issues } = category;

  return (
    <div className={styles.issue_category}>
      <div className={styles.header}>
        <span>
          {name}
        </span>
        <IssueEditPanel />
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