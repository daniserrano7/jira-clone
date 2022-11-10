import { useState } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Issue } from "domain/issue";
import { Priority, priorities, priorityDict } from "domain/priority";
import { PriorityIcon } from "ui/components/priority-icon";
import { Select } from "./select";

export const SelectPriority = ({ issue }: Props): JSX.Element => {
  const defaultValue = issue.priority;
  const [selectValue, setSelectValue] = useState<Priority>(defaultValue);

  const items = priorities.map((priority) => ({
    value: priority,
    element: (
      <div className="flex items-center gap-2 text-2xs uppercase">
        <PriorityIcon priority={priority} size={14} />
        <SelectPrimitive.ItemText>
          {priorityDict[priority]}
        </SelectPrimitive.ItemText>
      </div>
    ),
  }));
  const TriggerPriorityIcon = () => (
    <div className="mr-2">
      <PriorityIcon priority={selectValue} size={14} />
    </div>
  );

  const onChange = (value: string) => {
    const priority = value as Priority;
    setSelectValue(priority);
    issue.setPriority(priority);
  };

  return (
    <Select
      triggerSymbol={<TriggerPriorityIcon />}
      items={items}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

interface Props {
  issue: Issue;
}
