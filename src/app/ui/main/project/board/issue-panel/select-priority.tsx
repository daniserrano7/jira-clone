import { useState } from "react";
import { PriorityId, prioritiesMock } from "@domain/priority";
import { PriorityIcon } from "@app/components/priority-icon";
import * as Select from "@app/components/select";

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
      <Select.Trigger
        aria-label="Open priority select"
        className="text-xs uppercase"
      >
        <div className="mr-2">
          <PriorityIcon priority={selectValue} />
        </div>
        <Select.Value />
        <Select.TriggerIcon />
      </Select.Trigger>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {prioritiesMock.map((priority, index) => (
            <Select.Item
              key={index}
              value={priority.id}
              className="text-xs uppercase"
            >
              <Select.ItemIndicator />
              <PriorityIcon priority={priority.id} />
              <Select.ItemText>{priority.id}</Select.ItemText>
            </Select.Item>
          ))}
          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Root>
  );
};

interface Props {
  initPriority: PriorityId;
}
