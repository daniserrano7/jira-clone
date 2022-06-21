import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Comment, commentMock1, commentMock2 } from "domain/comment";
import { useStore } from "infrastructure/store";
import { Icon } from "ui/components/icon";
import { Avatar } from "ui/components/avatar";
import deleteAnimatedIcon from "ui/assets/icons/delete-animated.gif";
import { CreateComment } from "./comment/create-comment";
import { ViewComment } from "./comment/view-comment";
import { SelectStatus } from "./select/select-status";
import { SelectPriority } from "./select/select-priority";
import { SelectAsignee } from "./select/select-asignee";
import styles from "./issue-edit-panel.module.scss";


export const IssueEditPanel = ({ isOpen }: IssueEditPanelProps): JSX.Element => {
  const store = useStore();
  const [ isDeleting, setIsDeleting ] = useState<boolean>(false);
  const [ comments, setComments ] = useState<Comment[]>([commentMock1, commentMock2]);

  const close = () => store.isEditingIssue = false;

  const deleteIssue = () => {
    setIsDeleting(true);
    setTimeout(() => {
      close();
      setIsDeleting(false);
    }, 1180);
  }

  const addComment = (comment: Comment): void => {
    setComments([...comments, comment]);
  }

  const renderDeleteIcon = (): JSX.Element => {
    const StaticIcon = () => (
      <span style={{ display: isDeleting ? "none" : "flex"}}>
        <Icon name="delete" size={24} />
      </span>
    );

    const AnimatedIcon = () => (
      <img
        src={deleteAnimatedIcon}
        width={24} 
        height={24} 
        style={{ display: isDeleting ? "flex" : "none"}}
      />
    );
    
    return isDeleting
      ? <AnimatedIcon />
      : <StaticIcon />
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content onPointerDownOutside={close} className={styles.content}>
            <div className={styles.header}>
              <span className={styles.issue_type}>
                <span className={styles.icon}>
                  <Icon name="task" size={16} />
                </span>
                <span className={styles.code}>Issue 1</span>
              </span>
              <button 
                onClick={deleteIssue} 
                className={`${styles.header_button} ${styles.delete_button}`}
              >
                {renderDeleteIcon()}
              </button>
              <Dialog.Close onClick={close} className={styles.header_button}>
                <Icon name="close" size={24} />
              </Dialog.Close>
            </div>
            <div className={styles.body}>
              <section className={styles.left_column}>
                <Dialog.Title>
                  <input
                    placeholder="Write the title" 
                    className={styles.title}
                    autoFocus
                  />
                </Dialog.Title>
                <p className={styles.label}>Description</p>
                <Dialog.Description className={styles.description}>
                  <textarea
                    placeholder="Add a description..."
                    
                  />
                </Dialog.Description>
                <div className={styles.comments}>
                  <p className={styles.label}>Comments</p>
                  <div>
                    <CreateComment addComment={addComment} />
                  </div>
                  <ul className={styles.comment_list}>
                    {comments.map((comment, index) => (
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
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

interface IssueEditPanelProps {
  isOpen: boolean;
}