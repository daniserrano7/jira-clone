import { Link } from "@remix-run/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import cx from "classix";
import { useUserStore } from "@app/store/user.store";
import {
  Theme,
  Preference,
  useTheme,
  isValidTheme,
  isValidPreference,
  getSystemTheme,
  DEFAULT_THEME,
} from "@app/store/theme.store";
import { Icon } from "@app/components/icon";
import { UserAvatar } from "@app/components/user-avatar";

export const Header = (): JSX.Element => {
  const iconBaseClass =
    "w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer fill-white hover:bg-primary-light hover:text-primary-main dark:text-white dark:fill-dark-300 dark:hover:bg-dark-100 dark:hover:text-primary-main-dark";

  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-white py-2 px-5 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] dark:bg-dark-200">
      <section>
        <Link
          to="/"
          className="flex cursor-pointer items-center rounded py-2 px-3 hover:bg-primary-light dark:hover:bg-dark-100"
        >
          <img src="/images/logo.png" width={24} height={24} alt="Logo" />
          <span className="ml-2">Jira Clone</span>
        </Link>
      </section>
      <section className="flex gap-1">
        <button className={cx(iconBaseClass, "fill- cursor-not-allowed")}>
          <Icon name="question" />
        </button>
        <a
          href="https://github.com/daniserrano7/jira-clone"
          className={iconBaseClass}
        >
          <Icon name="github" />
        </a>
        <UserProfile />
      </section>
    </header>
  );
};

const UserProfile = (): JSX.Element => {
  const { user } = useUserStore();
  const { theme, setTheme, preference } = useTheme();

  const themeOptions: { value: Theme | Preference.SYSTEM; label: string }[] = [
    {
      value: Theme.LIGHT,
      label: "Light",
    },
    {
      value: Theme.DARK,
      label: "Dark",
    },
    {
      value: Preference.SYSTEM,
      label: "System",
    },
  ];
  const currentValue = preference === Preference.SYSTEM ? preference : theme;

  const selectTheme = (value: string): void => {
    if (isValidPreference(value)) {
      setTheme(getSystemTheme(), value as Preference);
    }

    if (isValidTheme(value)) {
      setTheme(value as Theme, Preference.SELECTED);
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="ml-4 rounded-full outline outline-2 outline-grey-300 hover:outline-primary-main dark:outline-grey-600 dark:hover:outline-white">
        <UserAvatar {...user} tooltip={false} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className={cx(
            "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
            "z-50 rounded bg-white px-3 py-1 shadow-md-dark dark:bg-dark-400"
          )}
        >
          <DropdownMenu.Label className="text-gray-700 dark:text-gray-200 select-none px-2 py-2 text-xs">
            Select theme
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup
            value={currentValue || DEFAULT_THEME}
            onValueChange={selectTheme}
          >
            {themeOptions.map(({ value, label }) => (
              <DropdownMenu.RadioItem key={value} value={value}>
                <DropdownMenu.ItemIndicator className="inline-block h-1 w-1 bg-error-main"></DropdownMenu.ItemIndicator>
                {label}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Separator className="my-1 h-px bg-grey-200 dark:bg-grey-300" />
          <DropdownMenu.Item
            className={cx(
              "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
              "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
            )}
          >
            <span className="text-gray-700 dark:text-gray-300 flex-grow">
              Logout
            </span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
