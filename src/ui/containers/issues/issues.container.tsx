import { useState } from "react";
import { Issue, issueMock1 } from "domain/issue";
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
  const [ categoryIssues, setCategoryIssues ] = useState<Issue[]>(issues);

  const createIssue = () => {
    const issue: Issue = {...issueMock1};
    setCategoryIssues([...categoryIssues, issue]);
  }

  return (
    <div className={styles.issue_category}>
      <div className={styles.header}>
        {name}
      </div>
      <div className={styles.body}>
        <ScrollArea height>
          <ul className={styles.issues_list}>
            {categoryIssues.map(issue => (
              <div key={issue.id}>
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
}

interface IssueCategoryProps {
  name: string;
  issues: Issue[];
}