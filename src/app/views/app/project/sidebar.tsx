import { useState } from "react";
import cx from "classix";
import { useProjectStore } from "@app/views/app/project";
import { Icon, IconName } from "@app/components/icon";
import imageProject from "public/images/default-project.png";

export const Sidebar = ({ activeItem }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const projectStore = useProjectStore();
  const projectName = projectStore.project.name || "Project Name";
  const projectDescription = projectStore.project.description || "Description";

  return (
    <aside className="relative z-0 flex">
      <div
        className={cx(
          "h-full max-w-0 whitespace-nowrap bg-grey-100 opacity-0 duration-300 ease-out",
          isOpen && "w-[240px] max-w-[240px] whitespace-normal opacity-100"
        )}
      >
        <section className="flex items-start py-6 px-5 w-full">
          <img
            src={imageProject}
            width={28}
            height={28}
            alt="project"
            className="rounded-[3px]"
          />
          <div className="ml-4 w-full">
            <p className="font-primary-bold text-lg leading-4">{projectName}</p>
            <p className="font-primary-light text-sm mt-2 line-clamp-2 whitespace-normal leading-4">
              {projectDescription}
            </p>
          </div>
        </section>
        <section className="p-3">
          <nav>
            {navItems.map(({ href, name, icon, disabled }) => (
              <NavItem
                key={href}
                href={href}
                name={name}
                icon={icon}
                disabled={disabled}
                active={activeItem === href}
              />
            ))}
          </nav>
        </section>
      </div>
      <div
        className={cx(
          "r-0 relative z-10 ml-7 h-full w-3 bg-white",
          isOpen && "ml-0"
        )}
      >
        <div className="absolute -left-[3px] h-full w-[3px] bg-gradient-to-l from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.0)] opacity-50" />
        <button
          onClick={toggleSidebar}
          className={cx(
            "absolute -left-[12px] mt-6 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full border-none bg-white shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] transition-transform delay-150 duration-200 ease-in hover:bg-primary-main hover:text-white",
            isOpen && "rotate-180"
          )}
        >
          <Icon name="arrow" size={24} />
        </button>
      </div>
    </aside>
  );
};

interface Props {
  activeItem: string;
}

const navItems: NavItemProps[] = [
  {
    href: "board",
    name: "Board",
    icon: "board",
  },
  {
    href: "analytics",
    name: "Analytics",
    icon: "analytics",
  },
  {
    href: "backlog",
    name: "Backlog",
    icon: "backlog",
    disabled: true,
  },
];

const NavItem = ({
  icon,
  name,
  href,
  disabled,
  active,
}: NavItemProps): JSX.Element => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      // eslint-disable-next-line no-script-url
      href={disabled ? "#" : href}
      className={cx(
        "group flex w-full cursor-pointer items-center gap-4 rounded border-none p-2 text-sm",
        active ? "bg-grey-300 text-primary-main" : "text-font-light",
        disabled
          ? "hover:bg-transparent !cursor-not-allowed"
          : "hover:bg-grey-300"
      )}
    >
      <Icon name={icon} />
      <span className={cx(disabled && "group-hover:hidden")}>{name}</span>
      <span
        className={cx(
          "itmes-center -ml-2 hidden rounded bg-grey-300 py-1 px-2 text-2xs uppercase disabled:hover:flex",
          disabled && "group-hover:block"
        )}
      >
        Not implemented
      </span>
    </a>
  );
};

export interface NavItemProps {
  icon: IconName;
  name: string;
  href: string;
  disabled?: boolean;
  active?: boolean;
}
