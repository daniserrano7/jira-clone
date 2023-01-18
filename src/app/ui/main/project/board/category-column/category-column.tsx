import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { Link, useFetcher } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxValueNone } from "react-icons/rx";
import cx from "classix";
import { useDrop } from "react-dnd";
import { Category } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { ScrollArea } from "@app/components/scroll-area";
import { useProjectStore } from "@app/ui/main/project";
import { useSortBy } from "@app/hooks/useSortBy";
import { IssueCard, DropItem, DRAG_ISSUE_CARD } from "./issue-card";

export const CategoryColumn = (props: CategoryColumnProps): JSX.Element => {
  const {
    category,
    isDragging,
    submittingIssues,
    setSubmittingIssues,
    handleDragging,
  } = props;
  const [columnHeight, setColumnHeight] = useState<number>(0);
  const columnRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const fetcher = useFetcher();
  const sortBy = useSortBy();
  const { search } = useProjectStore();
  const emptyCategory = category.issues.length === 0;
  const issueLink = sortBy
    ? `issue/new?category=${category.type}&sortBy=${sortBy}`
    : `issue/new?category=${category.type}`;

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: DRAG_ISSUE_CARD,
      drop: (item: DropItem) => updateIssueOnCardDrop(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [category.id]
  );

  const updateIssueOnCardDrop = (item: DropItem) => {
    if (item.categoryId === category.id) {
      return;
    }

    fetcher.submit(
      {
        _action: "updateIssueCategory",
        issueId: item.issueId,
        categoryId: category.id,
      },
      {
        method: "post",
      }
    );

    if (!submittingIssues.includes(item.issueId)) {
      setSubmittingIssues((prev) => [...prev, item.issueId]);
    }
  };

  const filteredIssues = (): Issue[] =>
    category.issues.filter((issue) => {
      return issue.name.toLowerCase().includes(search);
    });

  useEffect(() => {
    if (fetcher.data && fetcher.data.issueId) {
      const { issueId } = fetcher.data;
      setSubmittingIssues((prev) => prev.filter((id) => id !== issueId));
    }
  }, [fetcher, setSubmittingIssues]);

  useEffect(() => {
    if (columnRef.current) {
      setColumnHeight(columnRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      ref={dropRef}
      className="relative flex h-full w-[260px] max-w-[260px] flex-col rounded-md bg-grey-200 dark:bg-dark-500"
    >
      {/* Column drop area */}
      <div
        className={cx(
          "absolute z-50 box-border h-[100%] w-[100%] rounded p-1.5 duration-200",
          isDragging ? "visible" : "hidden",
          isOver || "bg-white bg-opacity-70 dark:bg-dark-300 dark:bg-opacity-70"
        )}
      >
        <div
          className={cx(
            "relative h-full w-full rounded border-[3px]",
            isDragging ? "visible" : "hidden",
            isOver
              ? "border-solid border-success-main"
              : "flex items-center justify-center border-dashed border-primary-main dark:border-primary-main-dark"
          )}
        >
          {!isOver && (
            <span className="rounded bg-white px-1 dark:bg-dark-100">
              DROP HERE
            </span>
          )}
        </div>
      </div>
      {/* Column header */}
      <div className="sticky top-0 left-0 flex justify-between px-3 py-2.5 font-primary-light text-xs uppercase text-font-light duration-200 ease-in-out dark:text-font-light-dark">
        <span className="flex gap-2">
          <span>{category.name}</span>
          {!emptyCategory && <span>( {category.issues.length} )</span>}
        </span>
        <Link
          to={issueLink}
          className="flex cursor-pointer rounded border-none p-1 text-font-light/60 hover:bg-grey-400 dark:text-font-light-dark dark:hover:bg-dark-100"
          aria-label={`Add new ${category.name} issue`}
        >
          <AiOutlinePlus size={24} />
        </Link>
      </div>
      {/* Column body items */}
      <div ref={columnRef} className="h-full">
        <div style={{ height: `${columnHeight}px` }}>
          <ScrollArea>
            <ul className="mt-1 max-w-[260px] px-3 pb-1">
              {emptyCategory ? (
                <EmptyCategory />
              ) : (
                filteredIssues().map((issue, index) => (
                  <li key={index} className="mb-2">
                    <IssueCard
                      issue={issue}
                      categoryId={category.id}
                      isSubmitting={submittingIssues.includes(issue.id)}
                      handleDragging={handleDragging}
                    />
                  </li>
                ))
              )}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

interface CategoryColumnProps {
  category: Category;
  isDragging: boolean;
  submittingIssues: IssueId[];
  setSubmittingIssues: Dispatch<SetStateAction<IssueId[]>>;
  handleDragging: (isDragging: boolean) => void;
}

const EmptyCategory = (): JSX.Element => (
  <li className="mt-4 flex flex-col items-center text-font-light dark:text-font-light-dark">
    <RxValueNone size={36} />
    <p className="mt-4 font-primary-light text-xs uppercase">No issues found</p>
  </li>
);
