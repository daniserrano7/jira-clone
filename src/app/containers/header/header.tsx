import jiraLogo from "@app/assets/images/logo.png";
import { Icon } from "@app/components/icon";
import styles from "./header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.container}>
      <section>
        <div className={styles.logo}>
          <img src={jiraLogo} width={24} height={24} alt="JIRA logo" />
          <span className={styles.app_title}>Jira Clone</span>
        </div>
      </section>
      <section className={styles.icons_container}>
        <button className={styles.icon}>
          <Icon name="question" />
        </button>
        <a href="https://github.com/daniserrano7/jira-clone" className={styles.icon}>
          <Icon name="github" />
        </a>
      </section>
    </header>
  );
};
