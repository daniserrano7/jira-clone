import { useState } from "react";
import { useActionData } from "@remix-run/react";
import cx from "classix";
import { ActionData as IssueActionData } from "@app/routes/__main/projects/$projectId/board/issue/$issueId";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@app/utils";

export const Title = ({ initTitle }: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const actionData = useActionData() as IssueActionData;

  const MAX_LENGTH = 80;
  const isMaxLength = title.length >= MAX_LENGTH;
  // Handle server and client name error
  const requireError =
    (actionData?.errors.name || !isFocus) &&
    (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > MAX_LENGTH) return;

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
  initTitle: string;
}
