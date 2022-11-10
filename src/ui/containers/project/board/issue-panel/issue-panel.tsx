import { observer } from "mobx-react-lite";
import * as Dialog from "@radix-ui/react-dialog";
import {
  addIssueDb,
  updateIssueDb,
  removeIssueDb,
} from "infrastructure/db/issue";
import { appStore, projectStore } from "infrastructure/store";
import { UserAvatar } from "ui/components/avatar";
import { PanelHeader } from "./panel-header";
import { Title } from "./title";
import { Description } from "./description";
import { CreateComment } from "./comment/create-comment";
import { ViewComment } from "./comment/view-comment";
import { SelectStatus } from "./select/select-status";
import { SelectPriority } from "./select/select-priority";
// import { SelectAsignee } from "./select/select-asignee";
import { SelectAsignee } from "./select/select-asignee";
import { textAreOnlySpaces } from "./utils";

export const IssueEditPanel = observer(
  ({ isOpen }: IssueEditPanelProps): JSX.Element => {
    const issue = projectStore.editingIssue;

    if (!issue) return <></>;

    const applyChanges = () => {
      if (issue.name.length === 0 || textAreOnlySpaces(issue.name)) {
        return;
      }

      const oldCategory = projectStore.project.categories.find((category) => {
        const foundIssue = category.getIssue(issue.id);

        if (foundIssue) {
          return category;
        }
      });

      if (oldCategory) {
        oldCategory.removeIssue(issue.id);
        updateIssueDb(issue);
      } else {
        addIssueDb(issue);
      }

      const newCategory = projectStore.project.getCategory(issue.categoryId);
      newCategory?.addIssue(issue);

      close();
    };

    const deleteIssue = () => {
      const category = projectStore.project.getCategory(issue.categoryId);
      category?.removeIssue(issue.id);
      removeIssueDb(issue);
      close();
    };

    const close = () => (projectStore.editingIssue = null);

    return (
      <Dialog.Root open={isOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="absolute top-0 left-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto bg-black bg-opacity-50 py-[60px] px-[40px]">
            <Dialog.Content
              onEscapeKeyDown={applyChanges}
              onPointerDownOutside={applyChanges}
              className="relative z-50 w-4/5 max-w-[1000px] rounded-md bg-white py-6 px-8 shadow-lg"
            >
              <PanelHeader
                id={issue.id}
                onDeleteIssue={deleteIssue}
                onClose={applyChanges}
              />
              <div className="grid grid-cols-5 gap-16">
                <section className="col-span-3">
                  <Dialog.Title className="my-5 -ml-3">
                    <Title issue={issue} />
                  </Dialog.Title>
                  <p className="font-primary-black text-font-main">
                    Description
                  </p>
                  <div className="-ml-3">
                    <Description issue={issue} />
                  </div>
                  <div className="mt-6">
                    <p className="font-primary-black text-font-main">
                      Comments
                    </p>
                    <div>
                      <CreateComment />
                    </div>
                    <ul className="mt-8 space-y-6">
                      {issue.comments.map((comment, index) => (
                        <li key={index}>
                          <ViewComment comment={comment} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                <section className="col-span-2 space-y-10">
                  <div>
                    <p className="mb-1">Status</p>
                    <SelectStatus issue={issue} />
                  </div>
                  <div>
                    <p className="mb-1">Priority</p>
                    <SelectPriority issue={issue} />
                  </div>
                  <div>
                    <p className="mb-1">Asignee</p>
                    <SelectAsignee issue={issue} />
                  </div>
                  <div>
                    <p className="mb-1">Reporter</p>
                    <div className="mt-1 flex w-fit items-center gap-2 rounded-full bg-grey-300 py-1 pl-1 pr-3.5 pb-1">
                      <UserAvatar {...appStore.user} tooltip={false} />
                      <p className="m-0">{appStore.user.name}</p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="grid grid-cols-3 items-end">
                <span className="font-primary-light text-2xs text-font-light text-opacity-80">
                  Press{" "}
                  <kbd className="rounded bg-grey-300 p-1 font-primary-light text-icon">
                    Esc
                  </kbd>{" "}
                  to apply changes
                </span>
                <Dialog.Close
                  onClick={applyChanges}
                  className="w-fit cursor-pointer justify-self-center rounded border-none bg-primary-main py-2 px-8 font-primary-bold text-lg text-white hover:bg-primary-main-hover"
                >
                  Done
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);

interface IssueEditPanelProps {
  isOpen: boolean;
}
