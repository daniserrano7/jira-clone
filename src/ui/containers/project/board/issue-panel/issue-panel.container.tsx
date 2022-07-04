import { observer } from "mobx-react-lite";
import * as Dialog from "@radix-ui/react-dialog";
import {
  IssueDB,
  getIssueDb, 
  addIssueDb, 
  updateIssueDb, 
  removeIssueDb 
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
import { SelectAsignee } from "./select/select-asignee";
import { textAreOnlySpaces } from "./utils";
import styles from "./issue-panel.module.scss";


export const IssueEditPanel = observer(({ isOpen }: IssueEditPanelProps): JSX.Element => {
  const issue = projectStore.editingIssue;

  if (!issue) return <></>

  const applyChanges = () => {
    if (issue.name.length === 0 || textAreOnlySpaces(issue.name)) {
      return
    }

    getIssueDb(issue.id)
      .then((issueDb: IssueDB | undefined) => {
        issueDb
          ? updateIssueDb(issue)
          : addIssueDb(issue);
      });

    close();
  }

  const deleteIssue = () => {
    const category = projectStore.project.getCategory(issue.categoryId);
    category?.removeIssue(issue.id);
    removeIssueDb(issue);
    close();
  }

  const close = () => projectStore.editingIssue = null;

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content 
            onEscapeKeyDown={applyChanges}
            onPointerDownOutside={applyChanges} 
            className={styles.content}
          >
            <PanelHeader
              id={issue.id}
              onDeleteIssue={deleteIssue} 
              onClose={applyChanges}
            />
            <div className={styles.body}>
              <section className={styles.left_column}>
                <Dialog.Title className={styles.title}>
                  <Title issue={issue} />
                </Dialog.Title>
                <p className={styles.label}>Description</p>
                <div className={styles.description}>
                  <Description issue={issue} />
                </div>
                <div className={styles.comments}>
                  <p className={styles.label}>Comments</p>
                  <div>
                    <CreateComment />
                  </div>
                  <ul className={styles.comment_list}>
                    {issue.comments.map((comment, index) => (
                      <li key={index}>
                        <ViewComment comment={comment} />
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <section className={styles.right_column}>
                <div>
                  <p className={styles.select_label}>Status</p>
                  <SelectStatus issue={issue} />
                </div>
                <div>
                  <p className={styles.select_label}>Priority</p>
                  <SelectPriority issue={issue} />
                </div>
                <div>
                  <p className={styles.select_label}>Asignee</p>
                  <SelectAsignee issue={issue} />
                </div>
                <div>
                  <p className={styles.select_label}>Reporter</p>
                  <div className={styles.reporter}>
                    <UserAvatar {...appStore.user} tooltip={false} />
                    <p>{appStore.user.name}</p>
                  </div>
                </div>
              </section>
            </div>
            <div className={styles.bottom}>
              <span className={styles.escape_label}>
                Press <kbd>Esc</kbd> to apply changes
              </span>
              <Dialog.Close onClick={applyChanges} className={styles.done_button}>
                Done
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
});

interface IssueEditPanelProps {
  isOpen: boolean;
}