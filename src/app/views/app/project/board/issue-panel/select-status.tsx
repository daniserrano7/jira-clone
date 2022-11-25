import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import cx from "classix";
import { CategoryType } from "@domain/category";
import { Issue } from "@domain/issue";
import { useProjectStore } from "@app/views/app/project";
import {
  SelectTrigger,
  SelectTriggerIcon,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
} from "@app/components/select";

export const SelectStatus = ({ issue }: Props): JSX.Element => {
  const defaultValue = issue.categoryType;
  const projectStore = useProjectStore();
  const categories = projectStore.project.categories;

  const [selectedValue, setSelectedValue] =
    useState<CategoryType>(defaultValue);

  const onValueChange = (value: CategoryType): void => {
    setSelectedValue(value);
  };

  return (
    <Select.Root
      name="status"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <SelectTrigger
        className={cx(
          selectedValue === "IN_PROGRESS" &&
            "!bg-primary-main !text-white hover:!bg-primary-main-hover",
          selectedValue === "DONE" &&
            "!bg-success-main !text-white hover:!bg-sucess-hover"
        )}
      >
        <Select.Value className="pt-1" />
        <SelectTriggerIcon />
      </SelectTrigger>
      <SelectContent>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {categories.map((category, index) => (
            <SelectItem key={index} value={category.type}>
              <SelectItemIndicator />
              <span
                className={cx(
                  "flex w-fit items-center gap-2 rounded p-0.5 text-2xs uppercase",
                  category.id === "TODO" && "bg-grey-300 text-font-grey",
                  category.id === "IN_PROGRESS" &&
                    "bg-primary-light text-primary-main",
                  category.id === "DONE" &&
                    "bg-font-success-light text-font-success-main"
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
  issue: Issue;
}
