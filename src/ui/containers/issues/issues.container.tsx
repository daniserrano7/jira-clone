import { ScrollArea } from "ui/components";
import { IssueCard } from "..";
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
          {Array(80).fill(null).map((_, index) => (
            <IssueCard key={index} />
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}