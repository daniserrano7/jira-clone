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
          "!text-font-inverse hover:!opacity-80",
          selectedStatus === "TODO" &&
            "hover:bg-background-accent-grey-bolder-hovered !bg-background-accent-grey-bolder",
          selectedStatus === "IN_PROGRESS" &&
            "hover:bg-background-accent-blue-bolder-hovered !bg-background-accent-blue-bolder",
          selectedStatus === "DONE" &&
            "hover:bg-background-accent-green-bolder-hovered !bg-background-accent-green-bolder"
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
                  "flex w-fit items-center gap-2 rounded px-1 py-0.5 text-2xs uppercase",
                  category.type === "TODO" &&
                    "bg-background-accent-grey-subtler text-font-accent-grey",
                  category.type === "IN_PROGRESS" &&
                    "bg-background-accent-blue-subtler text-font-accent-blue",
                  category.type === "DONE" &&
                    "bg-background-accent-green-subtler text-font-accent-green"
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
