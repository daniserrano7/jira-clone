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
      image: "/images/theme/light.png",
    },
    {
      value: Theme.DARK,
      label: "Dark",
      image: "/images/theme/dark.png",
    },
    {
      value: Theme.LAVA,
      label: "Lava",
      image: "/images/theme/lava.png",
    },
    {
      value: Theme.LIME,
      label: "Lime",
      image: "/images/theme/lime.png",
    },
    {
      value: Theme.BARBIE,
      label: "Barbie",
      image: "/images/theme/barbie.png",
    },
    {
      value: Preference.SYSTEM,
      label: "System",
      image: "/images/theme/system.png",
    },
  ];
  const currentValue = preference === Preference.SYSTEM ? preference : theme;
  const triggerIconClass = cx("fill-icon group-hover:fill-icon-brand");

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
          className="group flex h-[30px] w-[30px] rounded-full outline outline-2 outline-icon flex-center hover:bg-background-brand-subtlest hover:outline-border-brand"
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
          className="z-50 origin-top-right rounded bg-elevation-surface-overlay p-3 text-font shadow-md radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
        >
          <DropdownMenu.Label className="select-none pb-2 text-lg">
            Select theme
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup
            value={currentValue || DEFAULT_THEME}
            onValueChange={selectTheme}
            className={cx(
              "grid gap-2",
              themeOptions.length > 6
                ? "grid-cols-3"
                : themeOptions.length > 3
                ? "grid-cols-2"
                : "grid-cols-1"
            )}
          >
            {themeOptions.map(({ value, label, image }) => (
              <DropdownMenu.RadioItem
                key={value}
                value={value}
                className={cx(
                  "group flex gap-4 rounded px-2 pb-2 pt-1 outline outline-2 hover:outline-border-brand",
                  value === currentValue
                    ? "bg-background-brand-subtlest text-font-brand outline-border-brand"
                    : "outline-transparent"
                )}
              >
                <span
                  className={cx(
                    "border-1 mt-1 flex h-4 w-4 rounded-full border flex-center group-hover:border-border-brand",
                    value === currentValue
                      ? "border-border-brand"
                      : "border-border-disabled"
                  )}
                >
                  <span
                    className={cx(
                      "h-2 w-2 rounded-full bg-background-brand-bold",
                      value === currentValue ? "block" : "hidden"
                    )}
                  />
                </span>
                <div>
                  <span className="text-sm">{label}</span>
                  <img
                    src={image}
                    alt={`${label} theme`}
                    className="h-[100px] w-[180px] rounded border-2 border-border-disabled object-cover"
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
