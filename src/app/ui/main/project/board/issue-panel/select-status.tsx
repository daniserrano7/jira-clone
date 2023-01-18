import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import cx from "classix";
import { CategoryId, CategoryType } from "@domain/category";
import { useProjectStore } from "@app/ui/main/project";
import {
  SelectTrigger,
  SelectTriggerIcon,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
} from "@app/components/select";

export const SelectStatus = ({ initStatus }: Props): JSX.Element => {
  const projectStore = useProjectStore();
  const categories = projectStore.project.categories;
  const initCategory = categories.find(
    (category) => category.type === initStatus
  );

  if (!initCategory) {
    throw new Error("No default category found");
  }

  const defaultValue = initCategory.id;
  const [selectedValue, setSelectedValue] = useState<CategoryId>(defaultValue);
  const selectedStatus = categories.find(
    (category) => category.id === selectedValue
  )?.type as CategoryType;

  const onValueChange = (value: CategoryId): void => {
    setSelectedValue(value);
  };

  return (
    <Select.Root
      name="status"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <SelectTrigger
        aria-label="Open status select"
        className={cx(
          selectedStatus === "IN_PROGRESS" &&
            "!bg-primary-main !text-white hover:!bg-primary-main-hover",
          selectedStatus === "DONE" &&
            "!bg-success-main !text-white hover:!bg-success-light"
        )}
      >
        <Select.Value className="pt-1" />
        <SelectTriggerIcon />
      </SelectTrigger>
      <SelectContent>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {categories.map((category, index) => (
            <SelectItem key={index} value={category.id}>
              <SelectItemIndicator />
              <span
                className={cx(
                  "flex w-fit items-center gap-2 rounded p-0.5 text-2xs uppercase dark:bg-dark-300",
                  category.type === "TODO" &&
                    "bg-grey-300 text-font-grey dark:text-font-light-dark",
                  category.type === "IN_PROGRESS" &&
                    "bg-primary-light text-primary-main dark:text-primary-main-dark",
                  category.type === "DONE" &&
                    "bg-font-success-light text-font-success-main dark:text-font-success-main-dark"
                )}
              >
                <Select.ItemText>{category.name}</Select.ItemText>
              </span>
            </SelectItem>
          ))}
          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </SelectContent>
    </Select.Root>
  );
};

interface Props {
  initStatus: CategoryType;
}
