import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { PriorityId, prioritiesMock } from "@domain/priority";
import { PriorityIcon } from "@app/components/priority-icon";
import {
  SelectTrigger,
  SelectTriggerIcon,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
} from "@app/components/select";

export const SelectPriority = ({ initPriority }: Props): JSX.Element => {
  const [selectValue, setSelectValue] = useState<PriorityId>(initPriority);

  const onValueChange = (value: string) => {
    const priority = value as PriorityId;
    setSelectValue(priority);
  };

  return (
    <Select.Root
      name="priority"
      defaultValue={initPriority}
      onValueChange={onValueChange}
    >
      <SelectTrigger aria-label="Open priority select">
        <div className="mr-2">
          <PriorityIcon priority={selectValue} />
        </div>
        <Select.Value />
        <SelectTriggerIcon />
      </SelectTrigger>
      <SelectContent>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {prioritiesMock.map((priority, index) => (
            <SelectItem
              key={index}
              value={priority.id}
              className="text-xs uppercase"
            >
              <SelectItemIndicator />
              <PriorityIcon priority={priority.id} />
              <Select.ItemText>{priority.name}</Select.ItemText>
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
  initPriority: PriorityId;
}
