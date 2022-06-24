import * as Dialog from "@radix-ui/react-dialog";
import { observer } from "mobx-react-lite";
import { Comment } from "domain/comment";
import { useStore } from "infrastructure/store";
import { Avatar } from "ui/components/avatar";
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


export const IssueEditPanel = observer( ({ isOpen }: IssueEditPanelProps): JSX.Element => {
  const store = useStore();
  const issue = store.editingIssue;

  if (!issue) return <></>

  const category = store.project.getCategory(issue.categoryId);

  const applyChanges = () => {
    if (issue.name.length === 0 || textAreOnlySpaces(issue.name)) {
      return
    }
    const foundIssue = category?.getIssue(issue.id);

    if (!foundIssue) {
      category?.addIssue(issue);
    }

    close();
  }

  const deleteIssue = () => {
    category?.removeIssue(issue.id);
    close();
  }

  const close = () => store.editingIssue = null;

  const addComment = (comment: Comment): void => {
    issue.addComment(comment);
  }

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
                    <CreateComment addComment={addComment} />
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
                    <Avatar 
                      size={32}
                      image="default-avatar.png"
                      tooltip={store.user.name}
                    />
                    <p>{store.user.name}</p>
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