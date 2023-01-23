import { Form, Link, useLocation } from "@remix-run/react";
import * as AlertDialog from "@app/components/alert-dialog";
import cx from "classix";
import { MdDeleteOutline } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { IssueId } from "@domain/issue";
import { TaskIcon } from "@app/components/icons";

export const PanelHeaderIssue = ({
  id,
  deleteDisabled,
}: PanelHeaderIssueProps): JSX.Element => {
  const location = useLocation();
  const previousUrl = location.pathname.split("/issue")[0];

  return (
    <div className="flex">
      <span className="flex flex-grow items-center">
        <span className="flex items-center">
          <TaskIcon size={20} />
        </span>
        <span className="ml-1 text-font-light text-opacity-80 dark:text-font-light-dark">
          {id}
        </span>
      </span>
      <DeleteIssueModalDialog disabled={deleteDisabled} />
      <Link
        to={previousUrl}
        className="ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon hover:bg-grey-300 dark:text-font-light-dark dark:hover:bg-dark-100"
        aria-label="Close issue panel"
      >
        <IoCloseOutline size={32} />
      </Link>
    </div>
  );
};

interface PanelHeaderIssueProps {
  id: IssueId;
  deleteDisabled?: boolean;
}

const DeleteIssueModalDialog = ({
  disabled,
}: DeleteIssueModalDialogProps): JSX.Element => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        className={cx(
          "flex cursor-pointer rounded border-none p-1.5 text-icon flex-center hover:bg-grey-300 dark:text-font-light-dark dark:hover:bg-dark-100",
          disabled
            ? "cursor-not-allowed"
            : "hover:text-error-main dark:hover:text-error-main-dark"
        )}
        aria-label="Open delete issue dialog"
        disabled={disabled}
        title={disabled ? "This user cannot delete the issue" : "Delete issue"}
      >
        <MdDeleteOutline size={26} />
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Delete issue?</AlertDialog.Title>
          <AlertDialog.Description>
            This action is permanent and cannot be undone. Are you sure you want
            to remove this issue completely?
          </AlertDialog.Description>
          <Form method="delete" className="mt-8 flex w-full justify-end gap-4">
            <AlertDialog.Cancel aria-label="Cancel">Cancel</AlertDialog.Cancel>
            <AlertDialog.Confirm
              name="_action"
              value="delete"
              type="submit"
              aria-label="Delete issue"
            >
              Delete
            </AlertDialog.Confirm>
          </Form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

interface DeleteIssueModalDialogProps {
  disabled?: boolean;
}
