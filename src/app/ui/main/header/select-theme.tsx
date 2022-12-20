import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import cx from "classix";
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

export const SelctTheme = (): JSX.Element => {
  const { theme, setTheme, preference } = useTheme();

  const themeOptions: {
    value: Theme | Preference.SYSTEM;
    label: string;
    image: string;
  }[] = [
    {
      value: Theme.LIGHT,
      label: "Light",
      image: "/images/select-theme-light.png",
    },
    {
      value: Theme.DARK,
      label: "Dark",
      image: "/images/select-theme-dark.png",
    },
    {
      value: Preference.SYSTEM,
      label: "System",
      image: "/images/select-theme-light.png",
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
        <Icon name="clock" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className={cx(
            "z-50 rounded bg-grey-200 px-3 py-1 shadow-md-dark dark:bg-dark-400",
            "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down"
          )}
        >
          <DropdownMenu.Label className="text-gray-700 dark:text-gray-200 select-none py-2 text-lg">
            Select theme
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup
            value={currentValue || DEFAULT_THEME}
            onValueChange={selectTheme}
            className="space-y-1"
          >
            {themeOptions.map(({ value, label, image }) => (
              <DropdownMenu.RadioItem
                key={value}
                value={value}
                className={cx(
                  "group flex gap-4 rounded p-2 outline outline-1 outline-transparent hover:outline-primary-main dark:hover:text-primary-main-dark dark:hover:outline-primary-main-dark",
                  value === currentValue &&
                    "bg-primary-light text-primary-main outline-primary-main dark:bg-primary-light-dark dark:text-primary-main-dark dark:outline-primary-main-dark"
                )}
              >
                <span
                  className={cx(
                    "border-1 mt-1 flex h-4 w-4 rounded-full border flex-center group-hover:border-primary-main dark:group-hover:border-primary-main-dark",
                    value === currentValue
                      ? "border-primary-main dark:border-primary-main-dark"
                      : "border-grey-600 dark:border-white"
                  )}
                >
                  <span
                    className={cx(
                      "h-2 w-2 rounded-full bg-primary-main dark:bg-primary-main-dark",
                      value === currentValue ? "block" : "hidden"
                    )}
                  />
                </span>
                <div>
                  <span className="text-sm">{label}</span>
                  <img
                    src={image}
                    alt={`${label} theme`}
                    className="h-[100px] w-[180px] rounded border-2 border-grey-300 object-cover dark:border-dark-100"
                  />
                </div>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Separator className="my-3 h-px bg-grey-200 dark:bg-grey-300" />
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
