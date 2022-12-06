import { useState } from "react";
import { useActionData } from "@remix-run/react";
import cx from "classix";
import { ActionData as IssueActionData } from "@app/routes/__main/projects/$projectId/board/issue/$issueId";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@app/utils";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle,
  maxLength = DEFAULT_MAX_LENGTH,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const actionData = useActionData() as IssueActionData;

  console.log("MAX LEN: ", maxLength);
  const isMaxLength = title.length >= maxLength;
  // Handle server and client name error
  const requireError =
    (actionData?.errors.name || !isFocus) &&
    (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div className="relative">
      <TextareaAutosize
        name="title"
        value={title}
        setValue={updateTitle}
        placeholder="Write the title"
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          "font-primary-black text-2xl dark:text-font-main-dark",
          requireError &&
            "focus-visible:outline-error-main outline outline-2 outline-error-main dark:outline-error-main-dark dark:focus-visible:outline-error-main-dark"
        )}
        autofocus
      />
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-error-main dark:text-error-main-dark">
          This field is required
        </span>
      )}
      {isFocus && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light",
            isMaxLength
              ? "text-error-main dark:text-error-main-dark"
              : "text-font-light dark:text-font-light-dark"
          )}
        >
          {title.length} / {maxLength}
        </span>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle: string;
  maxLength?: number;
}
