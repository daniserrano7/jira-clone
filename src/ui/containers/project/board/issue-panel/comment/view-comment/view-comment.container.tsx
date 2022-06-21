import { useState } from "react";
import { Comment } from "domain/comment";
import { Avatar } from "ui/components/avatar";
import { EditBox } from "../edit-box";
import styles from "./view-comment.module.scss";

export const ViewComment = ({ comment }: ViewCommentProps): JSX.Element => {
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
    <div className={styles.container}>
      <Avatar 
        size={32}
        image="default-avatar.png"
        tooltip={comment.user.name}
      />
      <div style={{ width: "100%"}}>
        <p className={styles.user_name}>{comment.user.name}</p>
        <span className={styles.timestamp}>a day ago</span>
        {isEditing
          ? <EditBox
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

interface ViewCommentProps {
  comment: Comment;
}