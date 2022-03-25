import { observer } from "mobx-react-lite";
import { useStore } from "infrastructure/store";
import { CategoryColumn } from "ui/containers/category-column";
import { useCategoriesPanelContext } from "../board";
import styles from "./categories-panel.module.scss";

export const CategoriesPanel = observer((): JSX.Element => {
  const store = useStore();
  const { scrollDisabled } = useCategoriesPanelContext();

  return (
    <div className={`
      ${styles.container}
      ${scrollDisabled ? styles.scroll_disabled : undefined}
    `}>
      {store.project.categories.map(category => (
        <CategoryColumn
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
});