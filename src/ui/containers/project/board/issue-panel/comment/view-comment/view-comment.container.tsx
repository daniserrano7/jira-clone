import { useState } from "react";
import { Comment } from "domain/comment";
import { updateCommentDb, removeCommentDb } from "infrastructure/db/comment";
import { appStore, projectStore } from "infrastructure/store";
import { UserAvatar } from "ui/components/avatar";
import { EditBox } from "../edit-box";
import styles from "./view-comment.module.scss";

export const ViewComment = ({ comment }: ViewCommentProps): JSX.Element => {
  const [ isEditing, setIsEditing ] = useState<boolean>(false);

  const isNotSelfComment = comment.user.id !== appStore.user.id

  const edit = () => setIsEditing(true);
  const cancel = () => setIsEditing(false);

  const remove = () => {
    projectStore.editingIssue?.removeComment(comment.id);
    removeCommentDb(comment.id);
  }

  const save = (commentText: string): void => {
    comment.setMessage(commentText);
    updateCommentDb(comment.id, commentText);
    setIsEditing(false);
  }

  const formatDateTime = (): string => {
    if (!comment.createdAt) return "DATE UNDEFINED";
    
    const locale = "en-US";
    const date = comment.createdAt.toLocaleDateString(locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const time = comment.createdAt.toLocaleTimeString(locale, {
      hour12: false,
      timeStyle: "short",
    });

    return `${time} · ${date}`;
  }

  const IdleComment = (): JSX.Element => (
    <div className={styles.idle}>
      <p>{comment.message}</p>
      <div className={`
        ${styles.buttons_container}
        ${isNotSelfComment ? styles.hidden : undefined}
      `}>
        <button onClick={edit} disabled={isNotSelfComment}>
          Edit
        </button>
        <span className={styles.separator}>{"·"}</span>
        <button onClick={remove} disabled={isNotSelfComment}>
          Delete
        </button>
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      <UserAvatar {...comment.user} tooltip={false} />
      <div style={{ width: "100%"}}>
        <p className={styles.user_name}>
          {comment.user.name}
        </p>
        <span className={styles.timestamp}>
          {formatDateTime()}
        </span>
        {isEditing
          ? <EditBox
              defaultMessage={comment.message} 
              save={save} 
              cancel={cancel}
              autofocus
            />
          : <IdleComment />
        }
      </div>
    </div>
  )
}

interface ViewCommentProps {
  comment: Comment;
}