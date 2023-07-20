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
          className="flex cursor-pointer items-center justify-center rounded border-none bg-primary-light py-1.5 px-3 text-xs text-primary-main hover:bg-primary-light-hover"
          aria-label="Open sort issues select"
        >
          <div className="mr-2 flex items-center">
            <FaSortAmountDownAlt size={14} />
          </div>
          <Select.Value>Sort by {sortBy}</Select.Value>
        </Select.Trigger>
        <Select.Content className="select-none rounded bg-white p-1.5 shadow-blue">
          <Select.ScrollUpButton />
          <Select.Viewport>
            {sortList.map((sort, index) => (
              <Select.Item
                key={index}
                value={sort.id}
                className="flex cursor-pointer items-center gap-2 rounded px-2 py-2 text-2xs uppercase leading-none text-primary-main outline-none hover:bg-primary-light focus:bg-primary-light"
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
