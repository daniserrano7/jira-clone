import { useState } from "react";
import { Issue } from "@domain/issue";
import { TextareaAutosize } from "../textarea-autosize";
import { textAreOnlySpaces } from "../utils";
import styles from "./title.module.scss";

export const Title = ({ issue }: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(issue.name);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const MAX_LENGTH = 80;
  const isMaxLength = title.length >= MAX_LENGTH;
  const requireError = !isFocus && (title.length === 0 || textAreOnlySpaces(title));

  const requireErrorStyles = requireError ? styles.require_error : undefined;
  const maxLengthStyles = isMaxLength ? styles.max_length : undefined;

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    setTitle(newTitle);
    issue.setName(newTitle);
  };

  return (
    <div
      className={`
      ${styles.container}
      ${requireErrorStyles}
    `}
    >
      <TextareaAutosize
        value={title}
        setValue={updateTitle}
        placeholder="Write the title"
        onFocus={onFocus}
        onBlur={onBlur}
        autofocus
      />
      {requireError && <span className={styles.error_message}>This field is required</span>}
      {isFocus && (
        <span className={`${styles.counter} ${maxLengthStyles}`}>
          {title.length} / {MAX_LENGTH}
        </span>
      )}
    </div>
  );
};

interface TitleProps {
  issue: Issue;
}
