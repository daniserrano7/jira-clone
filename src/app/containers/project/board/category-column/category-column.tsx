import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";
import { Category, CategoryId } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { updateIssueDb } from "@infrastructure/db/issue";
import { appStore, projectStore } from "@infrastructure/store";
import { Icon } from "@app/components/icon";
import { IssueCard, DRAG_ISSUE_CARD } from "./issue-card";
import { ScrollArea } from "@app/components/scroll-area";
import styles from "./category-column.module.scss";
import { priorities } from "@domain/priority";

export const CategoryColumn = observer((props: CategoryColumnProps): JSX.Element => {
  const { category, isDragging, handleDragging } = props;
  const searchFilter = projectStore.filters.search.toLowerCase();
  const emptyCategory = category.issues.length === 0;

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: DRAG_ISSUE_CARD,
      drop: (item: DropItem) => changeIssueCategory(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [category.id]
  );

  interface DropItem {
    issueId: IssueId;
    categoryId: CategoryId;
  }

  const changeIssueCategory = ({ issueId, categoryId }: DropItem) => {
    const oldCategory = projectStore.project.getCategory(categoryId);

    if (!oldCategory || oldCategory.id === category.id) return;

    const issue = oldCategory.getIssue(issueId);

    if (!issue) return;

    issue.setCategoryId(category.id);
    oldCategory.removeIssue(issueId);
    category.addIssue(issue);
    updateIssueDb(issue);
  };

  const createCategoryIssue = () => {
    const issue = new Issue({
      categoryId: category.id,
      name: "",
      description: "",
      reporter: appStore.user,
      asignee: appStore.user,
      comments: [],
      priority: "low",
    });
    projectStore.editingIssue = issue;
  };

  const filteredIssues = (): Issue[] =>
    category.issues
      .filter((issue) => {
        const name = issue.name.toLowerCase();
        return name.includes(searchFilter);
      })
      .sort((a, b) => {
        const sortA =
          projectStore.filters.sort === "date" ? a.createdAt : priorities.indexOf(a.priority);

        const sortB =
          projectStore.filters.sort === "date" ? b.createdAt : priorities.indexOf(b.priority);

        if (sortA < sortB) return 1;
        if (sortA > sortB) return -1;
        return 0;
      });

  return (
    <div
      ref={drop}
      className={`
        ${styles.container}
        ${isOver ? styles.hover_area : undefined}
        ${isDragging && !isOver ? styles.dragging : undefined}
      `}
    >
      <div className={styles.header}>
        <span className={styles.title}>
          <span>{category.name}</span>
          {!emptyCategory && <span>( {category.issues.length} )</span>}
        </span>
        <button onClick={createCategoryIssue} className={styles.create_issue}>
          <Icon name="add" size={24} />
        </button>
      </div>
      <div className={styles.body}>
        <ScrollArea>
          <ul className={styles.issues_list}>
            {emptyCategory ? (
              <EmptyCategory />
            ) : (
              filteredIssues().map((issue, index) => (
                <li key={index}>
                  <IssueCard issue={issue} handleDragging={handleDragging} />
                </li>
              ))
            )}
          </ul>
        </ScrollArea>
      </div>
    </div>
  );
});

interface CategoryColumnProps {
  category: Category;
  isDragging: boolean;
  handleDragging: (isDragging: boolean) => void;
}

const EmptyCategory = (): JSX.Element => (
  <div className={styles.empty_category}>
    <Icon name="empty" size={36} />
    <p>No issues found</p>
  </div>
);
