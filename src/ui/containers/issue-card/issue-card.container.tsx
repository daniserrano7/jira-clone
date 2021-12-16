import styles from "./issue-card.module.scss";

export const IssueCard = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Title
      </div>
      <div className={styles.epic}>
        Epic
      </div>
      <div className={styles.footer}>
        <div>Ticket number</div>
        <div>Asigned users</div>
      </div>
    </div>
  )
}