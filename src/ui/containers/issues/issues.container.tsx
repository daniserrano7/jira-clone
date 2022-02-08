import { ScrollArea } from "ui/components";
import styles from "./issues.module.scss";

export const Issues = (): JSX.Element => {
  return (
    <div className={styles.container}>
      {Array(8).fill(null).map((_, index) => (
        <IssueCategory key={index} />
      ))}
    </div>
  )
}

const IssueCategory = (): JSX.Element => {
  return (
    <div className={styles.issue_category}>
      <div className={styles.header}>HEADER</div>
      <div className={styles.body}>
        <ScrollArea height>
          {Array(40).fill(null).map((_, index) => (
            <div key={index}>
              Issue card
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}