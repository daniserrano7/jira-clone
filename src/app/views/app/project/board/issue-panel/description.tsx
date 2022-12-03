import { useState } from "react";
import { TextareaAutosize } from "@app/components/textarea-autosize";

export const Description = ({
  initDescription,
}: DescriptionProps): JSX.Element => {
  const [description, setDescription] = useState<string>(initDescription);

  const updateDescription = (newDescription: string) => {
    setDescription(newDescription);
  };

  return (
    <div className="mt-1 [&_textarea]:font-primary-light [&_textarea]:leading-6 [&_p]:font-primary-light [&_p]:leading-6">
      <TextareaAutosize
        name="description"
        value={description}
        setValue={updateDescription}
        placeholder="Add a description"
        textareaClassName="dark:text-font-main-dark"
      />
    </div>
  );
};

interface DescriptionProps {
  initDescription: string;
}
