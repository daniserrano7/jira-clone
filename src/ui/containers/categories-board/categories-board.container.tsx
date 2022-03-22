import { observer } from "mobx-react-lite";
import { Category } from "domain/category";
import { createIssue, issueMock1 } from "domain/issue";
import { useStore } from "infrastructure/store";
import { ScrollArea } from "ui/components";
import { Issue as IssueContainer } from "ui/containers";
import styles from "./categories-board.module.scss";

export const CategoriesBoard = observer((): JSX.Element => {
  const store = useStore();

  return (
    <div className={styles.container}>
      {store.project.categories.map(category => (
        <CategoryColumn
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
});

const CategoryColumn = observer(({ category }: CategoryColumnProps): JSX.Element => {
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
                <IssueContainer title={issue.name} />
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
})

interface CategoryColumnProps {
  category: Category;
}