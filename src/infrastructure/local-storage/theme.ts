export type Theme = "light" | "dark";
export type ThemePreference = "selected" | "system";

const THEME_KEY = "theme";
export const getLocalStorageTheme = (): Theme | null => {
  return localStorage.getItem(THEME_KEY) as Theme | null;
};

export const setLocalStorageTheme = (theme: Theme): void => {
  localStorage.setItem(THEME_KEY, theme);
};

const THEME_PREFERENCE_KEY = "theme_preference";
export const getLocalStorageThemePreference = (): ThemePreference | null => {
  return localStorage.getItem(THEME_PREFERENCE_KEY) as ThemePreference | null;
};

export const setLocalStorageThemePreference = (theme: ThemePreference): void => {
  localStorage.setItem(THEME_PREFERENCE_KEY, theme);
};
