import jiraLogo from "ui/assets/images/logo.png";
import { ReactComponent as SettingsIcon } from "ui/assets/icons/settings.svg";
import { ReactComponent as QuestionIcon } from "ui/assets/icons/question.svg";
import styles from "./header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.container}>
      <section>
        <div className={styles.logo}>
          <img src={jiraLogo} width={24} height={24} />
          <span className={styles.app_title}>Jira Clone</span>
        </div>
      </section>
      <section className={styles.icons_container}>
        <HeaderIcon>
          <QuestionIcon />
        </HeaderIcon>
        <HeaderIcon>
          <SettingsIcon />
        </HeaderIcon>
      </section>
    </header>
  )
}

const HeaderIcon = ({ onClick, children }: HeaderIconProps): JSX.Element => {
  return (
    <button
      className={styles.icon_button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface HeaderIconProps {
  onClick?: () => void;
  children: JSX.Element;
}