import { useState } from "react";
import { TextareaAutosize } from "../../textarea-autosize";
import { COMMENT_PLACEHOLDER } from "../comment";
import styles from "./edit-box.module.scss";

export const EditBox = ({ defaultMessage, disabled, save, cancel }: EditBoxProps): JSX.Element => {
  const [ message, setMessage ] = useState<string>(defaultMessage);
  const [ initError, setInitError ] = useState<boolean>(false);
  const [ isEditing, setIsEditing ] = useState<boolean>(true);

  const messageAreOnlySpaces = (): boolean => {
    return /^( )\1*$/.test(message);
  }

  const messageIsValid = (): boolean => {
    return message.length > 0 && !messageAreOnlySpaces();
  }

  const resetValues = () => {
    setMessage(defaultMessage);
    setInitError(false);
    setIsEditing(false);
  }

  const onSave = () => {
    if (messageIsValid()) {
      save(message);
      resetValues();
    } else {
      setInitError(true);
    }
  }

  const onCancel = () => {
    resetValues();
    cancel();
  }

  const onFocus = () => setIsEditing(true);

  const isError = initError && !messageIsValid();
  const errorStyles = isError ? styles.error : undefined;
  const editingStyles = isEditing ? styles.editing : undefined;
  const placeholder = isError
    ? "Message cannot be empty"
    : COMMENT_PLACEHOLDER;

  return (
    <div className={`${styles.container} ${errorStyles}`}>
      <TextareaAutosize
        value={message}
        setValue={setMessage}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={onFocus}
      />
      <div className={`${styles.buttons} ${editingStyles}`}>
        <button className={styles.save} onClick={onSave}>Save</button>
        <button className={styles.cancel} onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

interface EditBoxProps {
  defaultMessage: string;
  disabled?: boolean;
  save: (commentText: string) => void;
  cancel: () => void;
}