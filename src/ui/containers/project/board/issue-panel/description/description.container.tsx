import { useState } from "react";
import { Issue } from "domain/issue";
import { TextareaAutosize } from "../textarea-autosize";
import styles from "./description.module.scss";


export const Description = ({ issue }: DescriptionProps): JSX.Element => {
  const [ description, setDescription ] = useState<string>(issue.description || "");

  const updateDescription = (newDescription: string) => {
    setDescription(newDescription);
    issue.setDescription(newDescription);
  }

  return (
    <div className={styles.container}>
      <TextareaAutosize 
        value={description}
        setValue={updateDescription}
        placeholder="Add a description"
      />
    </div>
  )
}

interface DescriptionProps {
  issue: Issue;
}