import { createContext, useContext, useState, useEffect } from "react";
import {
  Theme,
  ThemePreference,
  getLocalStorageTheme,
  setLocalStorageTheme,
  getLocalStorageThemePreference,
  setLocalStorageThemePreference,
} from "@infrastructure/local-storage/theme";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, _setTheme] = useState<Theme>("light");
  const [preference, _setPreference] = useState<ThemePreference>("system");

  useEffect(() => {
    const themePreference = getLocalStorageThemePreference() || "system";
    let defaultTheme: Theme;

    if (themePreference === "system") {
      defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      defaultTheme = getLocalStorageTheme() || "light";
    }
    _setPreference(themePreference);
    _setTheme(defaultTheme);
  }, []);

  const setTheme = (theme: Theme): void => {
    _setTheme(theme);
    setLocalStorageTheme(theme);
  };

  const setPreference = (preference: ThemePreference): void => {
    _setPreference(preference);
    setLocalStorageThemePreference(preference);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, preference, setPreference }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};
