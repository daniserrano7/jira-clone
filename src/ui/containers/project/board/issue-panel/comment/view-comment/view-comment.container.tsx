import { useState } from "react";
import { Comment } from "domain/comment";
import { useStore } from "infrastructure/store";
import { Avatar } from "ui/components/avatar";
import { EditBox } from "../edit-box";
import styles from "./view-comment.module.scss";

export const ViewComment = ({ comment }: ViewCommentProps): JSX.Element => {
  const store = useStore();
  const [ isEditing, setIsEditing ] = useState<boolean>(false);

  const edit = () => setIsEditing(true);
  const remove = () => {
    if (comment.user.id !== store.user.id) {
      return
    }
    store.editingIssue?.removeComment(comment.id);
  }
  const save = (commentText: string): void => {
    comment.setMessage(commentText);
    setIsEditing(false);
  }
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
    <div className={styles.container}>
      <Avatar 
        size={32}
        image="default-avatar.png"
        tooltip={comment.user.name}
      />
      <div style={{ width: "100%"}}>
        <p className={styles.user_name}>{comment.user.name}</p>
        <span className={styles.timestamp}>(Coming soon...)</span>
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