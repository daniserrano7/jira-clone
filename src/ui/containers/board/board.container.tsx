import { Breadcrumbs, breadcrumbsInfo, Input, ScrollArea } from "ui/components";
import { AvatarList, avatarListInfo, CategoriesBoard } from "ui/containers";
import styles from "./board.module.scss";

export const Board = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Breadcrumbs {...breadcrumbsInfo} />
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
      <section className={styles.CategoriesBoard}>
        {/* ISSUES */}
        {/* <Issues width={issuesWidth} /> */}
        <ScrollArea width>
          <CategoriesBoard />
        </ScrollArea>
      </section>
    </div>
  )
}