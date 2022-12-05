import { useEffect } from "react";
import { Link } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import cx from "classix";
import { useDrag } from "react-dnd";
import { CategoryId } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { Icon } from "@app/components/icon";
import { PriorityIcon } from "@app/components/priority-icon";

export interface DropItem {
  issueId: IssueId;
  categoryId: CategoryId;
}

export const IssueCard = observer(
  ({ issue, categoryId, handleDragging }: IssueCardProps): JSX.Element => {
    // TODO: Reduce the number of re-renders
    const issueIdPrefix = issue.id.split("-")[0];

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
        ref={dragRef}
        className={cx(
          "flex w-full cursor-pointer flex-col rounded border-none bg-white p-3 text-left shadow-xs duration-200 ease-in-out hover:bg-primary-light dark:bg-dark-300 dark:text-font-main-dark dark:hover:bg-dark-100",
          isDragging && "opacity-50"
        )}
      >
        <Link to={`issue/${issue.id}`}>
          <>
            <p className="min-h-[48px] w-full line-clamp-2">{issue.name}</p>
            <div className="flex items-center justify-between pt-4">
              <span className="flex items-center">
                <span className="flex items-center">
                  <Icon name="task" size={16} />
                </span>
                <span className="ml-1.5 text-2xs text-font-light dark:text-font-light-dark">
                  {issueIdPrefix}
                </span>
              </span>
              <PriorityIcon priority={issue.priority} size={14} />
            </div>
          </>
        </Link>
      </div>
    );
  }
);

interface IssueCardProps {
  issue: Issue;
  categoryId: CategoryId;
  handleDragging: (isDragging: boolean) => void;
}

export const DRAG_ISSUE_CARD = "ISSUE_CARD";
