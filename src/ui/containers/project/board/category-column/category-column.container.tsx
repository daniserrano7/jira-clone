import { observer } from "mobx-react-lite";
import { Category } from "domain/category";
import { Issue, createIssue } from "domain/issue";
import { appStore, projectStore } from "infrastructure/store";
import { Icon } from "ui/components/icon";
import { IssueCard } from "./issue-card";
import { ScrollArea } from "ui/components/scroll-area";
import styles from "./category-column.module.scss";

export const CategoryColumn = observer(({ category }: CategoryColumnProps): JSX.Element => {
  const searchFilter = projectStore.filters.search.toLowerCase();
  const emptyCategory = category.issues.length === 0;

  const createCategoryIssue = () => {
    const issue = createIssue({
      categoryId: category.id,
      name: "",
      description: "",
      reporter: appStore.user,
      asignee: appStore.user,
      comments: [],
      priority: "low",
    });
    projectStore.editingIssue = issue;
  }

  const filteredIssues = (): Issue[] => {
    return category.issues.filter(issue => {
      const name = issue.name.toLowerCase();
      return name.includes(searchFilter);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>
          {category.name}
        </span>
        <button 
          onClick={createCategoryIssue}
          className={styles.create_issue}
        >
          <Icon name="add" size={24} />
        </button>
      </div>
      <div className={styles.body}>
        <ScrollArea>
          <ul className={styles.issues_list}>
            {emptyCategory
              ? <EmptyCategory />
              : (
                filteredIssues().map((issue, index) => (
                  <li key={index} >
                    <IssueCard issue={issue} />
                  </li>
                ))
              )
            }
          </ul>
        </ScrollArea>
      </div>
    </div>
  )
});

interface CategoryColumnProps {
  category: Category;
}

const EmptyCategory = (): JSX.Element => (
  <div className={styles.empty_category}>
    <Icon name="empty" size={36} />
    <p>No issues found</p>
  </div>
)