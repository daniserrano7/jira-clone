import styles from "./issues.module.scss";

export const Issues = (): JSX.Element => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.content}> */}
        {Array(5).fill(null).map((_, index) => (
          <IssueCategory key={index} />
        ))}
      {/* </div> */}
    </div>
  )
}

const IssueCategory = (): JSX.Element => {
  return (
    <div className={styles.issue_category}>
      ISSUE CATEGORY
    </div>
  )
}