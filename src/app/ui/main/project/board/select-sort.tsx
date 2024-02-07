import { Form, useSubmit } from "@remix-run/react";
import * as Select from "@radix-ui/react-select";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { HiFlag } from "react-icons/hi";
import { BsClockHistory } from "react-icons/bs";
import { Sort, sortList, DEFAULT_SORT } from "@domain/filter";
import { useSortBy } from "@app/hooks/useSortBy";

export const SelectSort = (): JSX.Element => {
  const submit = useSubmit();
  const sortBy = useSortBy() || DEFAULT_SORT;

  const SortIcon = ({ sort }: { sort: Sort }): JSX.Element =>
    // prettier-ignore
    sort === "priority" 
      ? <HiFlag size={16} /> 
      : <BsClockHistory size={16} />;

  const handleSubmit = (value: string): void => {
    submit({ sortBy: value });
  };

  return (
    <Form method="get">
      <Select.Root defaultValue={sortBy} onValueChange={handleSubmit}>
        <Select.Trigger
          className="flex cursor-pointer items-center justify-center rounded border-none bg-background-brand-subtlest px-3 py-1.5 text-xs text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed"
          aria-label="Open sort issues select"
        >
          <div className="mr-2 flex items-center">
            <FaSortAmountDownAlt size={14} />
          </div>
          <Select.Value>Sort by {sortBy}</Select.Value>
        </Select.Trigger>
        <Select.Content className="select-none rounded bg-elevation-surface-overlay p-1.5 shadow-blue">
          <Select.ScrollUpButton />
          <Select.Viewport>
            {sortList.map((sort, index) => (
              <Select.Item
                key={index}
                value={sort.id}
                className="flex cursor-pointer items-center justify-start gap-2 rounded border-none px-2 py-2 text-xs uppercase leading-none text-font-brand outline-none hover:bg-background-brand-subtlest-hovered focus:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed"
              >
                <SortIcon sort={sort.id} />
                <Select.ItemText>{sort.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Root>
    </Form>
  );
};
