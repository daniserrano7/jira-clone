import { useState } from "react";
import { Comment, createComment } from "domain/comment";
import { projectStore } from "infrastructure/store";
import { UserAvatar } from "ui/components/avatar";
import { EditBox } from "../edit-box";
import styles from "./create-comment.module.scss";


export const CreateComment = ({ addComment }: CreateCommentProps): JSX.Element => {
  const [ isEditing, setIsEditing ] = useState<boolean>(false);

  const save = (message: string) => {
    const comment = createComment({
      user: projectStore.user,
      message,
    });
    addComment(comment);
    setIsEditing(false);
  }
  const cancel = () => setIsEditing(false);

  const editStyles = isEditing ? styles.editing : undefined;

  return (
    <div className={`${styles.container} ${editStyles}`}>
      <UserAvatar {...projectStore.user} tooltip={false} />
      <EditBox
        defaultMessage=""
        save={save}
        cancel={cancel}
      />
    </div>
  )
}

interface CreateCommentProps {
  addComment: (comment: Comment) => void;
}