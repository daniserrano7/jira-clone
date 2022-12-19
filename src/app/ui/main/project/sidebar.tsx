import { useState } from "react";
import { NavLink } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import * as Select from "@radix-ui/react-select";
import cx from "classix";
import { Theme, Preference } from "@app/store/theme.store";
import { useTheme } from "@app/store/theme.store";
import { Icon, IconName } from "@app/components/icon";

export const Sidebar = (props: Props): JSX.Element => {
  const { projectName, projectDescription, projectImage } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="relative flex">
      <div
        className={cx(
          "flex h-full max-w-0 flex-col whitespace-nowrap bg-grey-100 opacity-0 duration-300 ease-out dark:bg-dark-500",
          isOpen && "w-[240px] max-w-[240px] whitespace-normal opacity-100"
        )}
      >
        <section className="flex w-full items-start py-6 px-5">
          <img
            src={projectImage}
            width={28}
            height={28}
            alt="project"
            className="rounded-[3px]"
          />
          <div className="ml-4 w-full">
            <p className="font-primary-bold text-lg leading-4">{projectName}</p>
            <p className="mt-2 whitespace-normal font-primary-light text-sm leading-4 line-clamp-2">
              {projectDescription}
            </p>
          </div>
        </section>
        <section className="flex-grow p-3">
          <nav className="flex-grow">
            {navItems.map(({ href, name, icon, disabled }) => (
              <NavItem
                key={href}
                href={href}
                icon={icon}
                name={name}
                disabled={disabled}
              />
            ))}
          </nav>
        </section>
        <SelectTheme />
      </div>
      <div
        className={cx("r-0 relative z-10 ml-7 h-full w-3", isOpen && "ml-0")}
      >
        <div className="absolute -left-[3px] h-full w-[3px] bg-gradient-to-l from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.0)] opacity-50" />
        <button
          onClick={toggleSidebar}
          className={cx(
            "absolute -left-[12px] mt-6 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full border-none bg-white shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] transition-transform delay-150 duration-200 ease-in hover:bg-primary-main hover:text-white dark:bg-dark-200 dark:hover:bg-dark-100",
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
  projectName: string;
  projectDescription: string;
  projectImage: string;
}

const navItems: NavItemProps[] = [
  {
    href: "board",
    icon: "board",
    name: "Board",
  },
  {
    href: "analytics",
    icon: "analytics",
    name: "Analytics",
  },
  {
    href: "backlog",
    icon: "backlog",
    name: "Backlog",
    disabled: true,
  },
  {
    href: "server-error",
    icon: "server-error",
    name: "Server error",
  },
  {
    href: "not-found",
    icon: "not-found",
    name: "Not found",
  },
];

const NavItem = ({ href, icon, name, disabled }: NavItemProps): JSX.Element => {
  return (
    <NavLink
      to={disabled ? "#" : href}
      className={({ isActive }) =>
        cx(
          "group flex w-full cursor-pointer items-center gap-4 rounded border-none p-2 text-sm",
          isActive && !disabled
            ? "bg-grey-300 text-primary-main dark:bg-dark-100 dark:text-primary-main-dark"
            : "text-font-light dark:text-font-main-dark",
          disabled
            ? "!cursor-not-allowed hover:bg-transparent"
            : "hover:bg-grey-300 dark:hover:bg-dark-100"
        )
      }
    >
      <Icon name={icon} />
      <span className={cx(disabled && "group-hover:hidden")}>{name}</span>
      <span
        className={cx(
          "itmes-center -ml-2 hidden rounded bg-grey-300 py-1 px-2 text-2xs uppercase disabled:hover:flex dark:bg-dark-100",
          disabled && "group-hover:block"
        )}
      >
        Not implemented
      </span>
    </NavLink>
  );
};

export interface NavItemProps {
  href: string;
  icon: IconName;
  name: string;
  disabled?: boolean;
}

const SelectTheme = observer((): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const themePreference = "system";
  const basebuttonClass = cx("p-1 rounded-lg");
  const selectedButtonClass = cx("dark:bg-dark-100 bg-grey-100");

  const themes: { value: Theme; label: string }[] = [
    {
      value: Theme.LIGHT,
      label: "Light",
    },
    {
      value: Theme.DARK,
      label: "Dark",
    },
  ];

  const preferences: { value: Preference; label: string }[] = [
    {
      value: Preference.SELECTED,
      label: "Selected",
    },
    {
      value: Preference.SYSTEM,
      label: "System",
    },
  ];

  const changeTheme = (newTheme: Theme) => {
    if (newTheme !== theme) setTheme(newTheme);
  };

  const changeThemePreference = (newThemePreference: Preference) => {
    if (newThemePreference !== themePreference) {
      console.log("asdf");
    }
    // setThemePreference(newThemePreference);
  };

  return (
    <section className="flex gap-2 px-5 py-3">
      <div className="grid w-full grid-cols-2 gap-2 rounded-lg bg-grey-400 p-1 dark:bg-dark-300">
        {themes.map(({ value, label }) => (
          <button
            key={value}
            className={cx(
              basebuttonClass,
              theme === value && selectedButtonClass
            )}
            onClick={() => changeTheme(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <Select.Root
        defaultValue={themePreference}
        onValueChange={changeThemePreference}
      >
        <Select.Trigger className="flex cursor-pointer items-center justify-center rounded-lg border-none bg-primary-light p-2 text-xs text-primary-main hover:bg-primary-light-hover dark:border-2 dark:border-solid dark:border-primary-main-dark dark:bg-transparent dark:text-primary-main-dark dark:hover:bg-primary-main-dark dark:hover:bg-opacity-20 dark:focus-visible:outline-white">
          <Icon name="settings" size={24} />
          <Select.Value>{""}</Select.Value>
        </Select.Trigger>
        <Select.Content className="relative z-50 rounded bg-white p-1.5 shadow-blue dark:bg-dark-500">
          <Select.ScrollUpButton />
          <Select.Viewport>
            {preferences.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="relative flex cursor-pointer items-center gap-2 rounded py-2 pl-6 pr-2 text-2xs uppercase leading-none text-primary-main outline-none hover:bg-primary-light focus:bg-primary-light dark:text-primary-main-dark dark:outline-none dark:hover:bg-dark-300 dark:focus:bg-dark-300"
              >
                <Select.ItemIndicator className="absolute left-2 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-primary-main" />
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Root>
    </section>
  );
});
