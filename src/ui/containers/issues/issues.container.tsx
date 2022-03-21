import { observer } from "mobx-react-lite";
import { Category } from "domain/category";
import { issueMock1 } from "domain/issue";
import { useStore } from "infrastructure/store";
import { ScrollArea } from "ui/components";
import { Issue as IssueContainer } from "ui/containers";
import styles from "./issues.module.scss";

export const Issues = observer((): JSX.Element => {
  console.log("RENDERING ISSUES");
  const store = useStore();

  return (
    <div className={styles.container}>
      {store.project.categories.map(category => (
        <IssueCategory
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
});

const IssueCategory = observer(({ category }: IssueCategoryProps): JSX.Element => {
  const { name, issues } = category;
  console.log("RENDERING CATEGORY: ", name);

  const createIssue = () => {
    category.addIssue(issueMock1);
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
          <button onClick={createIssue}>
            Create  issue
          </button>
        </ScrollArea>
      </div>
    </div>
  )
})

interface IssueCategoryProps {
  category: Category;
}