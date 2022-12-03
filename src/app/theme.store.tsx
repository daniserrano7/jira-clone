import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

export type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
