import { observer } from "mobx-react-lite";
import { useStore } from "infrastructure/store";
import { Search } from "ui/containers/project/board/search";
import { UserAvatarList } from "./avatar-list";
import { CategoryColumn } from "./category-column";
import { IssueEditPanel } from "./issue-panel";
import styles from "./board.module.scss";

export const Board = observer((): JSX.Element => {
  const store = useStore();

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        Projects / {store.project.name}
        <h1 className={styles.title}>Sprint board</h1>
      </section>
      <section className={styles.tools}>
        <Search />
        <div className={styles.users}>
          <UserAvatarList />
        </div>
        <div className={styles.filters}>
          FILTERS
        </div>
      </section>
      <section className={styles.categories}>
        {store.project.categories.map(category => (
          <CategoryColumn
            key={category.id}
            category={category}
          />
        ))}
      </section>
      <IssueEditPanel isOpen={Boolean(store.editingIssue)} />
    </div>
  )
});