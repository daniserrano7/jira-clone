import { useState } from "react";
import { TextareaAutosize } from "../../textarea-autosize";
import { COMMENT_PLACEHOLDER } from "../comment";
import styles from "./edit-box.module.scss";

export const EditBox = ({ defaultMessage, disabled, save, cancel }: EditBoxProps): JSX.Element => {
  const [ message, setMessage ] = useState<string>(defaultMessage);
  const [ initError, setInitError ] = useState<boolean>(false);

  const messageAreOnlySpaces = (): boolean => {
    return /^( )\1*$/.test(message);
  }

  const messageIsValid = (): boolean => {
    return message.length > 0 && !messageAreOnlySpaces();
  }

  const onSave = () => {
    messageIsValid()
      ? save(message)
      : setInitError(true);
  }

  const isError = initError && !messageIsValid();
  const errorStyles = isError ? styles.error : undefined;
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
      />
      <div>
        <button className={styles.save} onClick={onSave}>Save</button>
        <button className={styles.cancel} onClick={cancel}>Cancel</button>
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