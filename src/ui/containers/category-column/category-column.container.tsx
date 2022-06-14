import { observer } from "mobx-react-lite";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Category } from "domain/category";
import { IssueCard } from "ui/containers/issue-card";
import styles from "./category-column.module.scss";
import { Issue } from "domain/issue";

export const CategoryColumn = observer(({ category, createIssue, editIssue }: CategoryColumnProps): JSX.Element => {
  const { name, issues } = category;

  return (
    <div className={styles.issue_category}>
      <div className={styles.header}>
        <span>
          {name}
        </span>
        <button onClick={() => createIssue(category)}>
          Create  issue
        </button>
      </div>
      <div className={styles.body}>
        <ScrollAreaComponent>
          <ul className={styles.issues_list}>
            {issues.map((issue, index) => (
              <li key={index} onClick={() => editIssue(category, issue)}>
                <IssueCard issue={issue} />
              </li>
            ))}
          </ul>
        </ScrollAreaComponent>
      </div>
    </div>
  )
});

interface CategoryColumnProps {
  category: Category;
  createIssue: (category: Category) => void;
  editIssue: (category: Category, issue: Issue) => void;
}

const ScrollAreaComponent = ({ children }: ScrollAreaComponentProps): JSX.Element => (
  <ScrollArea.Root type="hover" scrollHideDelay={400} className={styles.root}>
    <ScrollArea.Viewport className={styles.viewport}>
      {children}
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="vertical" className={styles.scrollbar}>
      <ScrollArea.Thumb className={styles.thumb} />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar orientation="horizontal" className={styles.scrollbar}>
      <ScrollArea.Thumb className={styles.thumb} />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner className={styles.corner} />
  </ScrollArea.Root>
);

interface ScrollAreaComponentProps {
  children: JSX.Element | JSX.Element[];
}