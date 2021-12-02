import { useState } from "react";
import { Icon, IconName } from "ui/components";
import { navItems } from "./sidebar.info";
import imageProject from "ui/assets/images/default-project.png";
import styles from "./sidebar.module.scss";

export const Sidebar = (): JSX.Element => {
  const [ isOpen, setIsOpen ] = useState<boolean>(true);
  const [ currentItem, setCurrentItem ] = useState<number>(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <aside className={styles.container}>
      <div className={`${styles.content} ${isOpen && styles.open}`}>
        <section className={styles.header}>
          <img
            src={imageProject}
            width={24}
            height={24}
            alt="project"
          />
          <div className={styles.project}>
            <span className={styles.project_name}>My project</span>
            <span className={styles.project_description}>Software project</span>
          </div>
        </section>
        <section className={styles.body}>
          <nav>
            {navItems.map(({ icon, name }, index) => (
              <NavItem
                key={name}
                icon={icon}
                name={name}
                active={index === currentItem}
                onClick={() => setCurrentItem(index)}
              />
            ))}
          </nav>
        </section>
      </div>
      <div className={`${styles.toggle_bar} ${isOpen && styles.open}`}>
        <div className={styles.button_container}>
          <button onClick={toggleSidebar} className={isOpen ? styles.open : ""}>
            <Icon name="arrow" width={24} height={24} />
          </button>
        </div>
      </div>
    </aside>
  )
}

const NavItem = ({ icon, name, active, onClick }: NavItemProps): JSX.Element => {
  return (
    <a
      className={`${styles.nav_item} ${active && styles.active}`}
      onClick={onClick}
    >
      <Icon name={icon} />
      <span className={styles.name}>{name}</span>
    </a>
  )
}

export interface NavItemProps {
  icon: IconName,
  name: string;
  active?: boolean;
  onClick?: () => void;
}