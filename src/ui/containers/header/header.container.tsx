import styles from "./header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.container}>
      Jira Clone
    </header>
  )
}