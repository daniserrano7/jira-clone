import { observer } from "mobx-react-lite";
import { useStore } from "infrastructure/store";
import { Input } from "ui/components/input";
import { AvatarList, avatarListInfo } from "ui/containers/project/board/avatar-list";
import { IssueEditPanel } from "./issue-edit-panel";
import { CategoryColumn } from "./category-column";
import styles from "./board.module.scss";

export const Board = observer((): JSX.Element => {
  const store = useStore();
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        {store.project.name}
        <h1 className={styles.title}>Sprint board</h1>
      </section>
      <section className={styles.tools}>
        <Input />
        <div className={styles.users}>
          <AvatarList {...avatarListInfo} />
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
      {Boolean(store.editingIssue) && <IssueEditPanel />}
    </div>
  )
})