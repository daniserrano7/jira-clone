import * as Select from "@radix-ui/react-select";
import { observer } from "mobx-react-lite";
import { CategoryId } from "domain/category";
import { Issue } from "domain/issue";
import { projectStore } from "infrastructure/store";
import { Icon } from "ui/components/icon";
import styles from "./select-status.module.scss";

export const SelectStatus = observer(({ issue }: SelectStatusProps): JSX.Element => {
  const categories = projectStore.project.categories;
  const statusClassname = issue.categoryId.toLowerCase();

  interface SelectItem {
    value: CategoryId;
    label: string;
  }
  const statusSelectInfo: SelectItem[] = categories.map(category => ({
    value: category.id,
    label: category.name,
  }));

  const onValueChange = (value: CategoryId): void => {
    // const oldCategory = projectStore.project.getCategory(issue.categoryId);
    // const newCategory = projectStore.project.getCategory(value);
    issue.setCategoryId(value);
    // oldCategory?.removeIssue(issue.id);
    // newCategory?.addIssue(issue);
  }

  return (
    <Select.Root defaultValue={issue.categoryId} onValueChange={onValueChange}>
      <Select.Trigger className={`${styles.trigger} ${styles[statusClassname]}`}>
        <Select.Value />
        <Select.Icon className={styles.icon}>
          <Icon name="arrow" size={28} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className={styles.content}>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {statusSelectInfo.map((item, index) => (
            <Select.Item
              key={index} 
              value={item.value} 
              className={`${styles.item} ${styles[item.value.toLowerCase()]}`}
            >
              <Select.ItemIndicator className={styles.indicator} />
              <Select.ItemText>
                {item.label}
              </Select.ItemText>
            </Select.Item>
          ))}
          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Root>
  )
});

interface SelectStatusProps {
  issue: Issue;
}