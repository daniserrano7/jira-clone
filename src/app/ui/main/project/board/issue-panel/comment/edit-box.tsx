import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { Button } from "@app/components/button";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

export const EditBox = ({
  defaultMessage,
  autofocus,
  save,
  cancel,
}: EditBoxProps): JSX.Element => {
  const [message, setMessage] = useState<string>(defaultMessage);
  const [initError, setInitError] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const messageIsValid = (): boolean => {
    return message.length > 0 && !textAreOnlySpaces(message);
  };

  const resetValues = () => {
    setMessage(defaultMessage);
    setInitError(false);
    setIsEditing(false);
  };

  const onSave = () => {
    if (messageIsValid()) {
      save(message);
      resetValues();
    } else {
      setInitError(true);
    }
  };

  const onCancel = () => {
    if (cancel) cancel();
    resetValues();
  };
  const onFocus = () => setIsEditing(true);

  const isError = initError && !messageIsValid();
  const placeholder = isError
    ? "Message cannot be empty"
    : "Add your comment...";

  return (
    <div className="w-full">
      <TextareaAutosize
        name="comment"
        value={message}
        setValue={setMessage}
        placeholder={placeholder}
        onFocus={onFocus}
        autofocus={autofocus}
        textareaClassName={cx(
          "min-h-[80px] leading-6 font-primary-light outline outline-2 outline-border-input focus:outline-border-brand bg-background-input",
          isError &&
            "placeholder:text-font-danger placeholder:text-opacity-70 !outline-border-danger !outline-2"
        )}
      />
      <div
        className={cx(
          "mt-2 flex gap-2 text-sm",
          isEditing ? "visible" : "hidden"
        )}
      >
        <Button
          type="button"
          className="px-4 py-2.5"
          onClick={onSave}
          aria-label="Save comment"
        >
          Save
        </Button>
        <Button
          color="neutral"
          variant="text"
          className="px-4 py-2.5"
          onClick={onCancel}
          aria-label="Cancel comment"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

interface EditBoxProps {
  defaultMessage: string;
  autofocus?: boolean;
  save: (commentText: string) => void;
  cancel?: () => void;
}
