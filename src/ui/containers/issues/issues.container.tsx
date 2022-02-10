import { Issue } from "domain/issue";
import { getCategories } from "infrastructure/store";
import { ScrollArea } from "ui/components";
import { Issue as IssueContainer } from "ui/containers";
import styles from "./issues.module.scss";

export const Issues = (): JSX.Element => {
  const categories = getCategories();

  return (
    <div className={styles.container}>
      {categories.map(category => (
        <IssueCategory
          key={category.id} 
          name={category.name} 
          issues={category.issues}
        />
      ))}
    </div>
  )
}

const IssueCategory = ({ name, issues }: IssueCategoryProps): JSX.Element => {
  return (
    <div className={styles.issue_category}>
      <div className={styles.header}>
        {name}
      </div>
      <div className={styles.body}>
        <ScrollArea height>
          <ul className={styles.issues_list}>
            {issues.map(issue => (
              <div key={issue.id}>
                <IssueContainer title={issue.name} />
              </div>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  )
}

interface IssueCategoryProps {
  name: string;
  issues: Issue[];
}