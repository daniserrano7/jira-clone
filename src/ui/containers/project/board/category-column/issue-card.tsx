import { Issue } from "domain/issue";
import { observer } from "mobx-react-lite";
import cx from "classix";
import { useDrag } from "react-dnd";
import { projectStore } from "infrastructure/store";
import { Icon } from "ui/components/icon";
import { PriorityIcon } from "ui/components/priority-icon";

export const IssueCard = observer(
  ({ issue, handleDragging }: IssueCardProps): JSX.Element => {
    const issueIdPrefix = issue.id.split("-")[0];

    const openIssue = () => {
      projectStore.editingIssue = issue;
    };

    const [{ isDragging }, drag] = useDrag(
      () => ({
        type: DRAG_ISSUE_CARD,
        item: {
          issueId: issue.id,
          categoryId: issue.categoryId,
        },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }),
      [issue.id]
    );

    handleDragging(isDragging);

    return (
      <button
        ref={drag}
        onClick={openIssue}
        className={cx(
          "flex w-full cursor-pointer flex-col rounded border-none bg-white p-3 text-left shadow-xs duration-200 ease-in-out hover:bg-primary-light",
          isDragging && "opacity-50"
        )}
      >
        <p className="min-h-[48px] w-full line-clamp-2">{issue.name}</p>
        <div className="flex items-center justify-between pt-4">
          <span className="flex items-center">
            <span className="flex items-center">
              <Icon name="task" size={16} />
            </span>
            <span className="ml-1.5 text-2xs text-font-light">
              {issueIdPrefix}
            </span>
          </span>
          <PriorityIcon priority={issue.priority} size={14} />
        </div>
      </button>
    );
  }
);

interface IssueCardProps {
  issue: Issue;
  handleDragging: (isDragging: boolean) => void;
}

export const DRAG_ISSUE_CARD = "ISSUE_CARD";
