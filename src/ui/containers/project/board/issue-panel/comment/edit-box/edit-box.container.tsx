import React from "react";
import { COMMENT_PLACEHOLDER } from "../comment";
import styles from "./edit-box.module.scss";

export const EditBox = ({ message, save, cancel }: EditBoxProps): JSX.Element => {
  const onFocus = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
    const target = e.currentTarget;
    target.setSelectionRange(target.value.length, target.value.length)
  }
  return (
    <div className={styles.container}>
      <textarea
        ref={ref => ref && ref.focus()}
        onFocus={onFocus}
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
}

interface EditBoxProps {
  message: string;
  save: () => void;
  cancel: () => void;
}