import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Issue } from "domain/issue";
import { Category } from "domain/category";
import { Comment } from "domain/comment";
import { createIssue } from "domain/issue";
import styles from "./issue-edit-panel.module.scss";

export const IssueEditPanel = (props: IssueEditPanelProps): JSX.Element => {
  const { category, isOpen, closePanel } = props;
  const issue = props.issue || createIssue({});
  console.log(category);

  const [ name, setName ] = useState<string>(issue.name);
  const [ description, setDescription ] = useState<string>(issue.description || "");

  const updateName = (name: string) => {
    setName(name);
    issue?.setName(name);
  }

  const updateDescription = (description: string) => {
    setDescription(description);
    issue?.setDescription(description);
  }

  return (
    <Dialog
      as="div" 
      open={isOpen} 
      onClose={closePanel}
      className={styles.container}
    >
      <Dialog.Overlay className={styles.overlay} />
        <div className={styles.content}>
          <section>
            <Dialog.Title>
              <input
                type="text" 
                placeholder="Issue name"
                value={name}
                className={styles.name}
                onChange={e => updateName(e.target.value)}
              />
            </Dialog.Title>
            <Dialog.Description>
              <p className={styles.label}>Description</p>
              <textarea
                placeholder="Add a description..."
                value={description}
                className={styles.description}
                onChange={e => updateDescription(e.target.value)}
              />
              <div className={styles.comments}>
                {issue.comments.map((comment, index) => (
                  <CommentComponent key={index} {...comment} />
                ))}
              </div>
            </Dialog.Description>
          </section>
          <section>
            PRIORITY
          </section>
        </div>
    </Dialog>
  )
}

interface IssueEditPanelProps {
  category: Category | null;
  issue: Issue | null;
  isOpen: boolean;
  closePanel: () => void;
}

const CommentComponent = (props: Comment): JSX.Element => {
  return (
    <div className={styles.comment}>
      <div>USER PROFILE</div>
      <div>{props.message}</div>
    </div>
  )
}