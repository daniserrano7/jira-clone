import { observer } from "mobx-react-lite";
import { Category } from "domain/category";
import { createIssue, issueMock1 } from "domain/issue";
import { ScrollArea } from "ui/components";
import { Issue as IssueCard } from "ui/containers";
import styles from "./category-column.module.scss";

export const CategoryColumn = observer(({ category }: CategoryColumnProps): JSX.Element => {
  const { name, issues } = category;

  const createNewIssue = () => {
    category.addIssue(createIssue(issueMock1));
  }

  return (
    <div className={styles.issue_category}>
      <div className={styles.header}>
        {name}
      </div>
      <div className={styles.body}>
        <ScrollArea height>
          <ul className={styles.issues_list}>
            {issues.map((issue, index) => (
              <div key={index}>
                <IssueCard title={issue.name} />
              </div>
            ))}
          </ul>
          <button onClick={createNewIssue}>
            Create  issue
          </button>
        </ScrollArea>
      </div>
    </div>
  )
});

interface CategoryColumnProps {
  category: Category;
}