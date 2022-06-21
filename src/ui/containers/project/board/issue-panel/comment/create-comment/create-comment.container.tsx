import { useState } from "react";
import { Comment, createComment } from "domain/comment";
import { useStore } from "infrastructure/store";
import { Avatar } from "ui/components/avatar";
import { EditBox } from "../edit-box";
import { COMMENT_PLACEHOLDER } from "../comment";
import styles from "./create-comment.module.scss";


export const CreateComment = ({ addComment }: CreateCommentProps): JSX.Element => {
  const store = useStore();
  const [ isEditing, setIsEditing ] = useState<boolean>(false);

  const edit = () => setIsEditing(true);
  const save = () => {
    const comment = createComment({
      user: store.user,
      message: "Test comment",
    });
    addComment(comment);
    setIsEditing(false);
  }
  const cancel = () => setIsEditing(false);

  return (
    <div className={styles.container}>
      <Avatar 
        size={32}
        image="default-avatar.png"
        tooltip="User"
      />
      {isEditing
        ? (
          <EditBox
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

interface CreateCommentProps {
  addComment: (comment: Comment) => void;
}