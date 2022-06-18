import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Comment, commentMock1, commentMock2 } from "domain/comment";
import { Icon } from "ui/components/icon";
import { Avatar } from "ui/components/avatar";
import deleteAnimatedIcon from "ui/assets/icons/delete-animated.gif";
import styles from "./issue-edit-panel.module.scss";


const COMMENT_PLACEHOLDER = "Add your comment...";

export const IssueEditPanel = (): JSX.Element => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const [ isDeleting, setIsDeleting ] = useState<boolean>(false);
  const [ comments, setComments ] = useState<Comment[]>([commentMock1, commentMock2]);

  const open = () => {
    setIsDeleting(false);
    setIsOpen(true);
  }
  const close = () => setIsOpen(false);

  const deleteIssue = () => {
    setIsDeleting(true);
    setTimeout(() => {
      close();
      setIsDeleting(false);
    }, 1180);
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
      <Dialog.Trigger onClick={open} className={styles.trigger}>
        <Icon name="add" size={24} />
      </Dialog.Trigger>
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
              <button onClick={deleteIssue} className={styles.header_button}>
                {renderDeleteIcon()}
              </button>
              <Dialog.Close onClick={close} className={styles.header_button}>
                <Icon name="close" size={24} />
              </Dialog.Close>
            </div>
            <div className={styles.body}>
              <section>
                <Dialog.Title>
                  <input
                    placeholder="Write the title" 
                    className={styles.title}
                    autoFocus
                  />
                </Dialog.Title>
                <p className={styles.label}>Description</p>
                <Dialog.Description>
                  <textarea
                    placeholder="Add a description..."
                    className={styles.description}
                  />
                </Dialog.Description>
                <div className={styles.comments}>
                  <p className={styles.label}>Comments</p>
                  <div>
                    <CreateComment />
                  </div>
                  <ul className={styles.comment_list}>
                    {comments.map((comment, index) => (
                      <li key={index}>
                        <CommentComponent comment={comment} />
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <section>
                <div>
                  <p>Status</p>

                </div>
                <div>REPORTER</div>
                <div>ASIGNEE</div>
                <div>PRIORITY</div>
              </section>
            </div>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const CreateComment = (): JSX.Element => {
  const [ isEditing, setIsEditing ] = useState<boolean>(false);

  const edit = () => setIsEditing(true);
  const save = () => setIsEditing(false);
  const cancel = () => setIsEditing(false);

  return (
    <div className={styles.create_comment}>
      <Avatar 
        size={32}
        image="default-avatar.png"
        tooltip="User"
      />
      {isEditing
        ? (
          <EditComment 
            message=""
            save={save}
            cancel={cancel}
          />
        )
        : (
          <textarea 
            placeholder={COMMENT_PLACEHOLDER}
            onClick={edit}
            className={styles.comment_placeholder}
          />
        )
      }
    </div>
  )
}

const CommentComponent = ({ comment }: CommentComponentProps): JSX.Element => {
  const [ isEditing, setIsEditing ] = useState<boolean>(false);

  const edit = () => setIsEditing(true);
  const remove = () => console.log("DELETING");
  const save = () => setIsEditing(false);
  const cancel = () => setIsEditing(false);

  const IdleComment = (): JSX.Element => (
    <div className={styles.idle}>
      <p>{comment.message}</p>
      <div className={styles.buttons_container}>
        <button onClick={edit}>Edit</button>
        <span className={styles.separator}>{"·"}</span>
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  )

  return (
    <div className={styles.comment}>
      <Avatar 
        size={32}
        image="default-avatar.png"
        tooltip={comment.user.name}
      />
      <div style={{ width: "100%"}}>
        <p className={styles.user_name}>{comment.user.name}</p>
        <span>a day ago</span>
        {isEditing
          ? <EditComment
              message={comment.message} 
              save={save} 
              cancel={cancel} 
            />
          : <IdleComment />
        }
      </div>
    </div>
  )
}

interface CommentComponentProps {
  comment: Comment;
}

const EditComment = ({ message, save, cancel }: EditCommentProps): JSX.Element => (
  <div className={styles.edit_comment}>
    <textarea
      ref={ref => ref && ref.focus()}
      onFocus={e => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
      defaultValue={message}
      placeholder={COMMENT_PLACEHOLDER}
      autoFocus
    />
    <div>
      <button className={styles.save} onClick={save}>Save</button>
      <button className={styles.cancel} onClick={cancel}>Cancel</button>
    </div>
  </div>
);

interface EditCommentProps {
  message: string;
  save: () => void;
  cancel: () => void;
}