import { useState } from "react";
import { Issue } from "domain/issue";
import { TextareaAutosize } from "../../../../components/textarea-autosize";

export const Description = ({ issue }: DescriptionProps): JSX.Element => {
  const [description, setDescription] = useState<string>(
    issue.description || ""
  );

  const updateDescription = (newDescription: string) => {
    setDescription(newDescription);
    issue.setDescription(newDescription);
  };

  return (
    <div className="mt-1 [&_textarea]:font-primary-light [&_textarea]:leading-6 [&_p]:font-primary-light [&_p]:leading-6">
      <TextareaAutosize
        value={description}
        setValue={updateDescription}
        placeholder="Add a description"
      />
    </div>
  );
};

interface DescriptionProps {
  issue: Issue;
}
