import { observer } from "mobx-react-lite";
import { ScrollArea } from "ui/components";
import { useStore } from "infrastructure/store";
import { CategoryColumn } from "ui/containers";
import styles from "./categories-panel.module.scss";

export const CategoriesPanel = observer((): JSX.Element => {
  const store = useStore();

  return (
    <div className={styles.container}>
      {/* <ScrollArea width> */}
        {store.project.categories.map(category => (
          <CategoryColumn
            key={category.id}
            category={category}
          />
        ))}
      {/* </ScrollArea> */}
    </div>
  )
});