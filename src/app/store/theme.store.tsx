import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useFetcher } from "@remix-run/react";

export type Theme = "light" | "dark";
export type ThemePreference = "selected" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themePreference: ThemePreference;
  setThemePreference: (themePreference: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
  const initTheme = value.initTheme || "light";
  const initPreference = value.initPreference || "system";
  const fetcher = useFetcher();

  const [isInitialized, setIsInitialized] = useState(false);
  const [theme, _setTheme] = useState<Theme>(initTheme);
  const [themePreference, _setThemePreference] =
    useState<ThemePreference>(initPreference);

  interface SaveThemeToSessionStorage {
    newTheme?: Theme;
    newPreference?: ThemePreference;
  }
  const saveChangesToSessionStorage = useCallback(
    ({ newTheme, newPreference }: SaveThemeToSessionStorage) => {
      fetcher.submit(
        {
          _action: "setTheme",
          theme: newTheme || theme,
          preference: newPreference || themePreference,
          redirectTo: window.location.pathname,
        },
        { method: "post", action: "/" }
      );
    },
    [fetcher, theme, themePreference]
  );

  const setThemePreference = (newPreference: ThemePreference) => {
    _setThemePreference(newPreference);
    saveChangesToSessionStorage({ newPreference: newPreference });
  };

  const setTheme = useCallback(
    (newTheme: Theme) => {
      _setTheme(newTheme);

      // If preference is "system", don't save theme in session storage
      // because it will be overwritten by system theme instantly.
      if (themePreference === "system") return;
      saveChangesToSessionStorage({ newTheme: newTheme });
    },
    [themePreference, saveChangesToSessionStorage]
  );

  // If preference is "system" and stored theme is different from system theme,
  // save the new system theme in session storage and update.
  useEffect(() => {
    if (isInitialized || initPreference !== "system") return;

    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    // To avoid unnecessary executions or impossible updates
    if (systemTheme === theme || systemTheme == initTheme) return;

    setIsInitialized(true);
    setTheme(systemTheme);
  }, [initTheme, initPreference, fetcher, setTheme, isInitialized, theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, themePreference, setThemePreference }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

interface ThemeProviderProps {
  children: JSX.Element;
  value: {
    initTheme?: Theme;
    initPreference?: ThemePreference;
  };
}

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};
