import { useState } from "react";
import styles from "./title.module.scss";

export const Title = (): JSX.Element => {
  const [ title, setTitle ] = useState<string>("");
  const [ isFocus, setIsFocus ] = useState<boolean>(true);

  const MAX_LENGTH = 60;
  const isMaxLength = title.length >= MAX_LENGTH;

  const startEditing = () => setIsFocus(true);
  const stopEditing = () => setIsFocus(false);

  const onFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    // Place cursor at the end of the current text
    target.setSelectionRange(target.value.length, target.value.length);
    startEditing();
  }

  const handleTitleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const value = e.currentTarget.value;

    if (value.length <= MAX_LENGTH) {
      setTitle(value);
    }
  }

  const EditTitle = (): JSX.Element => (
    <>
      <textarea
        value={title}
        onChange={handleTitleChange}
        placeholder="Write the title"
        onFocus={onFocus}
        onBlur={stopEditing}
        rows={2}
        className={styles.edit_title}
        autoFocus
      />
      <span className={`
        ${styles.counter}
        ${isMaxLength ? styles.max_length : undefined}
      `}>
        {title.length} / {MAX_LENGTH}
      </span>
    </>
  );

  const ViewTitle = (): JSX.Element => (
    <div
      onClick={startEditing} 
      className={styles.view_title}
    >
      {title}
    </div>
  )

  return (
    <div className={styles.container}>
      {isFocus
        ? <EditTitle />
        : <ViewTitle />
      }
      
    </div>
  )
}