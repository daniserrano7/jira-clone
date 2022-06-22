import { useState } from "react";
import { useStore } from "infrastructure/store";
import { TextareaAutosize } from "../textarea-autosize";
import styles from "./title.module.scss";

export const Title = (): JSX.Element => {
  const store = useStore();
  const [ title, setTitle ] = useState<string>("");
  const [ isFocus, setIsFocus ] = useState<boolean>(true);

  const MAX_LENGTH = 6000;
  const isMaxLength = title.length >= MAX_LENGTH;
  const requireError = !isFocus && title.length === 0;

  const requireErrorStyles = requireError ? styles.require_error : undefined
  const maxLengthStyles = isMaxLength ? styles.max_length : undefined

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    setTitle(newTitle);
    store.editingIssue?.setName(newTitle);
  }

  return (
    <div className={`
      ${styles.container}
      ${requireErrorStyles}
    `}>
      <TextareaAutosize
        value={title}
        setValue={updateTitle}
        placeholder="Write the title"
        onFocus={onFocus}
        onBlur={onBlur}
        autofocus
      />
      {requireError && (
        <span className={styles.error_message}>
          This field is required
        </span>
      )}
      {isFocus && (
        <span className={`${styles.counter} ${maxLengthStyles}`}>
          {title.length} / {MAX_LENGTH}
        </span>
      )}
    </div>
  )
}