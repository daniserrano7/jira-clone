import { useState } from "react";
import { TextareaAutosize } from "../textarea-autosize";
import styles from "./description.module.scss";


export const Description = (): JSX.Element => {
  const [ description, setDescription ] = useState<string>("");

  return (
    <div className={styles.container}>
      <TextareaAutosize 
        value={description}
        setValue={setDescription}
        placeholder="Add a description"
      />
    </div>
  )
}