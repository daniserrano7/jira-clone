import React, { useState } from "react";
import { COMMENT_PLACEHOLDER } from "../comment";
import styles from "./edit-box.module.scss";

export const EditBox = ({ defaultMessage, save, cancel }: EditBoxProps): JSX.Element => {
  const [ message, setMessage ] = useState<string>(defaultMessage);

  const onFocus = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
    const target = e.currentTarget;
    target.setSelectionRange(target.value.length, target.value.length)
  }

  const onSave = () => {
    save(message);
  }

  const onTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const value = e.currentTarget.value;
    setMessage(value);
  }
  return (
    <div className={styles.container}>
      <textarea
        ref={ref => ref && ref.focus()}
        onFocus={onFocus}
        value={message}
        defaultValue={defaultMessage}
        onChange={onTextAreaChange}
        placeholder={COMMENT_PLACEHOLDER}
        autoFocus
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
  save: (commentText: string) => void;
  cancel: () => void;
}