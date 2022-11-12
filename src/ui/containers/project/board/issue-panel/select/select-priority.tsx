import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { Issue } from "domain/issue";
import { Priority, priorities, priorityDict } from "domain/priority";
import { PriorityIcon } from "ui/components/priority-icon";
import {
  SelectTrigger,
  SelectTriggerIcon,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
} from "ui/components/select/select-base";

export const SelectPriority = ({ issue }: Props): JSX.Element => {
  const defaultValue = issue.priority;
  const [selectValue, setSelectValue] = useState<Priority>(defaultValue);

  const onValueChange = (value: string) => {
    const priority = value as Priority;
    setSelectValue(priority);
    issue.setPriority(priority);
  };

  return (
    <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger>
        <div className="mr-2">
          <PriorityIcon priority={selectValue} size={14} />
        </div>
        <Select.Value />
        <SelectTriggerIcon />
      </SelectTrigger>
      <SelectContent>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {priorities.map((priority, index) => (
            <SelectItem
              key={index}
              value={priority}
              className="text-xs uppercase"
            >
              <SelectItemIndicator />
              <PriorityIcon priority={priority} size={14} />
              <Select.ItemText>{priorityDict[priority]}</Select.ItemText>
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
