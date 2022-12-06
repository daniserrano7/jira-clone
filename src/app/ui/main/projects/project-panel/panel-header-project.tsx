import { Form, Link } from "@remix-run/react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import cx from "classix";
import { IssueId } from "@domain/issue";
import { Icon } from "@app/components/icon";

export const PanelHeaderProject = ({
  id,
}: PanelHeaderProjectProps): JSX.Element => {
  const isEditMode = false;

  return (
    <div className="flex">
      <span className="flex flex-grow items-center">
        <span className="ml-1 text-font-light text-opacity-80 dark:text-font-light-dark">
          {id}
        </span>
      </span>
      {isEditMode && <DeleteIssueModalDialog />}
      <Link
        to="/projects"
        className="ml-3 flex cursor-pointer rounded border-none p-1.5 text-icon hover:bg-grey-300 dark:text-font-light-dark dark:hover:bg-dark-100"
      >
        <Icon name="close" size={24} />
      </Link>
    </div>
  );
};

interface PanelHeaderProjectProps {
  id: IssueId;
}

const DeleteIssueModalDialog = (): JSX.Element => {
  const buttonBaseClass = cx(
    "border-none py-1.5 px-3.5 rounded bg-grey-300 dark:bg-dark-100 font-primary-bold cursor-pointer"
  );

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="flex cursor-pointer rounded border-none p-1.5 text-icon hover:bg-grey-300 hover:text-error-main dark:text-font-light-dark dark:hover:bg-dark-100 dark:hover:text-error-main-dark">
        <Icon name="delete" size={24} />
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
