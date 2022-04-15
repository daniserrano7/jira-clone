import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Category } from "domain/category";
import { Issue } from "domain/issue";
import { useStore } from "infrastructure/store";
import { CategoryColumn } from "ui/containers/category-column";
import { useCategoriesPanelContext } from "../board";
import { IssueEditPanel } from "../issue-edit-panel";
import styles from "./categories-panel.module.scss";

export const CategoriesPanel = observer((): JSX.Element => {
  const store = useStore();
  const { scrollDisabled } = useCategoriesPanelContext();

  const [ editingCategory, setEditingCategory ] = useState<Category | null>(null);
  const [ editingIssue, setEditingIssue ] = useState<Issue | null>(null);
  const [ editionPanelIsOpen, setEditionPanelIsOpen ] = useState<boolean>(false);

  const createIssue = (category: Category) => {
    console.log("CREATING ISSUE");
    setEditingCategory(category);
    setEditionPanelIsOpen(true);
  }

  const editIssue = (category: Category, issue: Issue) => {
    console.log("EDITING ISSUE: ", issue);
    setEditingCategory(category);
    setEditingIssue(issue);
    setEditionPanelIsOpen(true);
  }

  const closeEditionPanel = () => {
    setEditingCategory(null);
    setEditingIssue(null);
    setEditionPanelIsOpen(false);
  }

  return (
    <div className={`
      ${styles.container}
      ${scrollDisabled ? styles.scroll_disabled : undefined}
    `}>
      {store.project.categories.map(category => (
        <CategoryColumn
          key={category.id}
          category={category}
          createIssue={createIssue}
          editIssue={editIssue}
        />
      ))}
      <IssueEditPanel
        category={editingCategory}
        issue={editingIssue}
        isOpen={editionPanelIsOpen}
        closePanel={closeEditionPanel}
      />
    </div>
  )
});