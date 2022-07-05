import { useState } from "react";
import { observer } from "mobx-react-lite";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { projectStore } from "infrastructure/store";
import { Search } from "ui/containers/project/board/search";
import { UserAvatarList } from "./avatar-list";
import { SelectSort } from "./select-sort";
import { CategoryColumn } from "./category-column";
import { IssueEditPanel } from "./issue-panel";
import styles from "./board.module.scss";

export const Board = observer((): JSX.Element => {
  const [ isDragging, setIsDragging ] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        Projects / {projectStore.project.name}
        <h1 className={styles.title}>Sprint board</h1>
      </section>
      <section className={styles.tools}>
        <Search />
        <div className={styles.users}>
          <UserAvatarList />
        </div>
        <div className={styles.filters}>
          <SelectSort />
        </div>
      </section>
      <section className={styles.categories}>
        <DndProvider backend={HTML5Backend}>
          {projectStore.project.categories.map(category => (
            <CategoryColumn
              key={category.id}
              category={category}
              isDragging={isDragging}
              handleDragging={setIsDragging}
            />
          ))}
        </DndProvider>
      </section>
      <IssueEditPanel isOpen={Boolean(projectStore.editingIssue)} />
    </div>
  )
});