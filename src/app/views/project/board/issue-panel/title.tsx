import { useState } from "react";
import cx from "classix";
import { Issue } from "@domain/issue";
import { TextareaAutosize } from "../../../../components/textarea-autosize";
import { textAreOnlySpaces } from "@app/utils";

export const Title = ({ issue }: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(issue.name);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const MAX_LENGTH = 80;
  const isMaxLength = title.length >= MAX_LENGTH;
  const requireError =
    !isFocus && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > MAX_LENGTH) return;

    setTitle(newTitle);
    issue.setName(newTitle);
  };

  return (
    <div className="relative">
      <TextareaAutosize
        value={title}
        setValue={updateTitle}
        placeholder="Write the title"
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          "font-primary-black text-2xl",
          requireError && "outline outline-2 outline-error-main"
        )}
        autofocus
      />
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-error-main">
          This field is required
        </span>
      )}
      {isFocus && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light",
            isMaxLength ? "text-error-main" : "text-font-light"
          )}
        >
          {title.length} / {MAX_LENGTH}
        </span>
      )}
    </div>
  );
};

interface TitleProps {
  issue: Issue;
}
