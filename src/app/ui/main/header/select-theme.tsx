import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdLightMode, MdDarkMode } from "react-icons/md";
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
import { Tooltip } from "@app/components/tooltip";

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
      image: "/images/select-theme-system.png",
    },
  ];
  const currentValue = preference === Preference.SYSTEM ? preference : theme;
  const triggerIconClass = cx("fill-icon group-hover:fill-primary-main");

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
      <Tooltip title="Select theme">
        <DropdownMenu.Trigger
          aria-label="Open theme select"
          className="group flex h-[30px] w-[30px] rounded-full outline outline-2 outline-icon flex-center hover:bg-primary-light hover:outline-primary-main"
        >
          {theme === Theme.LIGHT ? (
            <MdLightMode className={triggerIconClass} />
          ) : (
            <MdDarkMode className={triggerIconClass} />
          )}
        </DropdownMenu.Trigger>
      </Tooltip>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className="z-50 origin-top-right rounded bg-white px-3 py-1 shadow-md-dark radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
        >
          <DropdownMenu.Label className="text-gray-700 select-none py-2 text-lg">
            Select theme
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup
            value={currentValue || DEFAULT_THEME}
            onValueChange={selectTheme}
            className="space-y-2"
          >
            {themeOptions.map(({ value, label, image }) => (
              <DropdownMenu.RadioItem
                key={value}
                value={value}
                className={cx(
                  "group flex gap-4 rounded px-2 pt-1 pb-2 outline outline-2 outline-transparent hover:outline-primary-main",
                  value === currentValue &&
                    "bg-primary-light text-primary-main outline-primary-main"
                )}
              >
                <span
                  className={cx(
                    "border-1 mt-1 flex h-4 w-4 rounded-full border flex-center group-hover:border-primary-main",
                    value === currentValue
                      ? "border-primary-main"
                      : "border-grey-600"
                  )}
                >
                  <span
                    className={cx(
                      "h-2 w-2 rounded-full bg-primary-main",
                      value === currentValue ? "block" : "hidden"
                    )}
                  />
                </span>
                <div>
                  <span className="text-sm">{label}</span>
                  <img
                    src={image}
                    alt={`${label} theme`}
                    className="h-[100px] w-[180px] rounded border-2 border-grey-300 object-cover"
                  />
                </div>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
