import * as Dialog from "@radix-ui/react-dialog";
import { observer } from "mobx-react-lite";
import { Comment } from "domain/comment";
import { useStore } from "infrastructure/store";
import { Avatar } from "ui/components/avatar";
import { PanelHeader } from "./panel-header";
import { Title } from "./title";
import { CreateComment } from "./comment/create-comment";
import { ViewComment } from "./comment/view-comment";
import { SelectStatus } from "./select/select-status";
import { SelectPriority } from "./select/select-priority";
import { SelectAsignee } from "./select/select-asignee";
import styles from "./issue-panel.module.scss";


export const IssueEditPanel = observer( ({ isOpen }: IssueEditPanelProps): JSX.Element => {
  const store = useStore();
  const issue = store.editingIssue;

  if (!issue) return <></>

  const close = () => store.editingIssue = null;

  const deleteIssue = () => {
    close();
  }

  const addComment = (comment: Comment): void => {
    issue.addComment(comment);
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content onPointerDownOutside={close} className={styles.content}>
            <PanelHeader 
              onDeleteIssue={deleteIssue} 
              onClose={close}
            />
            <div className={styles.body}>
              <section className={styles.left_column}>
                <Dialog.Title>
                  <Title />
                </Dialog.Title>
                <p className={styles.label}>Description</p>
                <Dialog.Description className={styles.description}>
                  <textarea placeholder="Add a description..." />
                </Dialog.Description>
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
                  <SelectStatus />
                </div>
                <div>
                  <p className={styles.select_label}>Priority</p>
                  <SelectPriority />
                </div>
                <div>
                  <p className={styles.select_label}>Asignee</p>
                  <SelectAsignee />
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
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
});

interface IssueEditPanelProps {
  isOpen: boolean;
}