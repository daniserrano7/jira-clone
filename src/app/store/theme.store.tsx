import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useFetcher } from "@remix-run/react";

// Inspired from Kent C. Dodds repo https://github.com/kentcdodds/kentcdodds.com/blob/main/app/utils/theme-provider.tsx
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
export const themes: Array<Theme> = Object.values(Theme);
export enum Preference {
  SELECTED = "selected",
  SYSTEM = "system",
}
const preferences: Array<Preference> = Object.values(Preference);

export const DEFAULT_THEME: Theme = Theme.LIGHT;
const DEFAULT_PREFERENCE: Preference = Preference.SYSTEM;

type ThemeContextType = {
  theme: Theme | null;
  preference: Preference | null;
  setTheme: (theme: Theme, preference?: Preference) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const prefersLightMQ = "(prefers-color-scheme: light)";
export const getSystemTheme = (): Theme =>
  window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK;

export const ThemeProvider = ({
  children,
  specifiedTheme,
  specifiedPreference,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme | null>(() => {
    // On the server, if we don't have a specified theme then we should
    // return null and the clientThemeCode will set the theme for us
    // before hydration. Then (during hydration), this code will get the same
    // value that clientThemeCode got so hydration is happy.
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme)) return specifiedTheme;
      else return null;
    }

    // there's no way for us to know what the theme should be in this context
    // the client will have to figure it out before hydration.
    if (typeof window !== "object") return null;

    return getSystemTheme();
  });
  const [preference, setPreference] = useState<Preference | null>(() => {
    if (isValidPreference(specifiedPreference)) return specifiedPreference;

    return DEFAULT_PREFERENCE;
  });

  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);
  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);

    const handleChange = () => {
      if (preference !== Preference.SYSTEM) return;

      const newTheme = mediaQuery.matches ? Theme.LIGHT : Theme.DARK;
      setThemeState(newTheme);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preference]);

  const setTheme = useCallback(
    (newTheme: Theme, newPreference: Preference = Preference.SYSTEM) => {
      persistThemeRef.current.submit(
        { theme: newTheme, preference: newPreference },
        { action: "action/set-theme", method: "post" }
      );
      setThemeState(newTheme);
      setPreference(newPreference);
    },
    []
  );

  const value = {
    theme,
    preference,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

interface ThemeProviderProps {
  children: JSX.Element;
  specifiedTheme: Theme | undefined;
  specifiedPreference: Preference | undefined;
}

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};

export const isValidTheme = (theme: unknown): theme is Theme => {
  return themes.includes(theme as Theme);
};

export const isValidPreference = (
  preference: unknown
): preference is Preference => {
  return preferences.includes(preference as Preference);
};
