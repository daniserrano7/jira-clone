import { useEffect } from "react";
import { Link } from "@remix-run/react";
import cx from "classix";
import { useDrag } from "react-dnd";
import { CategoryId } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { TaskIcon } from "@app/components/icons";
import { PriorityIcon } from "@app/components/priority-icon";
import { useSortBy } from "@app/hooks/useSortBy";

export interface DropItem {
  issueId: IssueId;
  categoryId: CategoryId;
}

export const IssueCard = ({
  issue,
  categoryId,
  isSubmitting,
  handleDragging,
}: IssueCardProps): JSX.Element => {
  const issueIdPrefix = issue.id.split("-")[0];
  const sortBy = useSortBy();
  const issueLink = sortBy
    ? `issue/${issue.id}?sortBy=${sortBy}`
    : `issue/${issue.id}`;

  type Collected = { isDragging: boolean };

  const [{ isDragging }, dragRef] = useDrag<DropItem, unknown, Collected>(
    () => ({
      type: DRAG_ISSUE_CARD,
      item: {
        issueId: issue.id,
        categoryId,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [issue.id]
  );

  useEffect(() => {
    handleDragging(isDragging);
  }, [isDragging, handleDragging]);

  return (
    <div
      ref={isSubmitting ? undefined : dragRef}
      className={cx(
        "flex w-full cursor-pointer flex-col rounded border-none bg-white p-3 text-left shadow-xs duration-200 ease-in-out hover:bg-primary-light dark:bg-dark-300 dark:text-font-main-dark dark:hover:bg-dark-100",
        isDragging && "opacity-50",
        isSubmitting && "opacity-50"
      )}
    >
      <Link to={issueLink}>
        <>
          <p className="min-h-[48px] w-full line-clamp-2">{issue.name}</p>
          <div className="flex items-center justify-between pt-4">
            <span className="flex items-center">
              <TaskIcon size={18} />
              <span className="ml-1.5 text-2xs text-font-light dark:text-font-light-dark">
                {issueIdPrefix}
              </span>
            </span>
            <PriorityIcon priority={issue.priority.id} />
          </div>
        </>
      </Link>
    </div>
  );
};

interface IssueCardProps {
  issue: Issue;
  categoryId: CategoryId;
  isSubmitting: boolean;
  handleDragging: (isDragging: boolean) => void;
}

export const DRAG_ISSUE_CARD = "ISSUE_CARD";
