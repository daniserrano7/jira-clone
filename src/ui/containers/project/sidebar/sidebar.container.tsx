import { useState } from 'react';
import { projectStore } from 'infrastructure/store';
import { Icon, IconName } from 'ui/components/icon';
import { navItems } from './sidebar.info';
import imageProject from 'ui/assets/images/default-project.png';
import styles from './sidebar.module.scss';

export const Sidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [currentItem, setCurrentItem] = useState<number>(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={styles.container}>
      <div className={`${styles.content} ${isOpen && styles.open}`}>
        <section className={styles.header}>
          <img src={imageProject} width={28} height={28} alt="project" />
          <div className={styles.project}>
            <span className={styles.name}>{projectStore.project.name}</span>
            <span className={styles.description}>{projectStore.project.description}</span>
          </div>
        </section>
        <section className={styles.body}>
          <nav>
            {navItems.map(({ icon, name, disabled }, index) => (
              <NavItem
                key={name}
                icon={icon}
                name={name}
                disabled={disabled}
                active={index === currentItem}
                onClick={() => setCurrentItem(index)}
              />
            ))}
          </nav>
        </section>
      </div>
      <div className={`${styles.toggle_bar} ${isOpen && styles.open}`}>
        <div className={styles.bar} />
        <div className={styles.button_container}>
          <button onClick={toggleSidebar} className={isOpen ? styles.open : ''}>
            <Icon name="arrow" size={24} />
          </button>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, name, disabled, active, onClick }: NavItemProps): JSX.Element => {
  return (
    <button
      className={`
        ${styles.nav_item} 
        ${active && styles.active}
        ${disabled ? styles.disabled : undefined}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon name={icon} />
      <span className={styles.name}>{name}</span>
      <span className={styles.not_implemented}>Not implemented</span>
    </button>
  );
};

export interface NavItemProps {
  icon: IconName;
  name: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}
