import { Form, Link, useLocation } from "@remix-run/react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import cx from "classix";
import { MdDeleteOutline } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { IssueId } from "@domain/issue";
import { TaskIcon } from "@app/components/icons";

export const PanelHeaderIssue = ({
  id,
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
      <DeleteIssueModalDialog />
      <Link
        to={previousUrl}
        className="ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon hover:bg-grey-300 dark:text-font-light-dark dark:hover:bg-dark-100"
      >
        <IoCloseOutline size={32} />
      </Link>
    </div>
  );
};

interface PanelHeaderIssueProps {
  id: IssueId;
}

const DeleteIssueModalDialog = (): JSX.Element => {
  const buttonBaseClass = cx(
    "border-none py-1.5 px-3.5 rounded bg-grey-300 dark:bg-dark-100 font-primary-bold cursor-pointer"
  );

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="flex cursor-pointer rounded border-none p-1.5 text-icon flex-center hover:bg-grey-300 hover:text-error-main dark:text-font-light-dark dark:hover:bg-dark-100 dark:hover:text-error-main-dark">
        <MdDeleteOutline size={26} />
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-40" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-5 shadow-lg dark:bg-dark-300">
          <AlertDialog.Title className="mb-5 font-primary-black text-3xl">
            Delete issue?
          </AlertDialog.Title>
          <AlertDialog.Description className="font-primary-light leading-6 text-font-light dark:text-font-light-dark">
            This action is permanent and cannot be undone. Are you sure you want
            to remove this issue completely?
          </AlertDialog.Description>
          <Form method="delete" className="mt-8 flex w-full justify-end gap-4">
            <AlertDialog.Cancel
              className={cx(
                "hover:bg-grey-400 dark:text-font-light-dark dark:hover:bg-dark-500",
                buttonBaseClass
              )}
            >
              Cancel
            </AlertDialog.Cancel>
            <button
              name="_action"
              value="delete"
              type="submit"
              className={cx(
                "bg-error-light text-error-dark hover:bg-error-hover dark:bg-error-main-dark dark:text-error-light-dark dark:hover:bg-error-hover-dark",
                buttonBaseClass
              )}
            >
              Delete
            </button>
          </Form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
