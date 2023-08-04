import {
  useFetcher
} from "/build/_shared/chunk-OBXMDE47.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/store/theme.store.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Theme = /* @__PURE__ */ ((Theme2) => {
  Theme2["LIGHT"] = "light";
  Theme2["DARK"] = "dark";
  Theme2["LAVA"] = "lava";
  Theme2["LIME"] = "lime";
  return Theme2;
})(Theme || {});
var themes = Object.values(Theme);
var Preference = /* @__PURE__ */ ((Preference2) => {
  Preference2["SELECTED"] = "selected";
  Preference2["SYSTEM"] = "system";
  return Preference2;
})(Preference || {});
var preferences = Object.values(Preference);
var DEFAULT_THEME = "light" /* LIGHT */;
var DEFAULT_PREFERENCE = "system" /* SYSTEM */;
var ThemeContext = (0, import_react.createContext)(null);
var prefersLightMQ = "(prefers-color-scheme: light)";
var getSystemTheme = () => window.matchMedia(prefersLightMQ).matches ? "light" /* LIGHT */ : "dark" /* DARK */;
var ThemeProvider = ({
  children,
  specifiedTheme,
  specifiedPreference
}) => {
  const [theme, setThemeState] = (0, import_react.useState)(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme))
        return specifiedTheme;
      else
        return null;
    }
    if (typeof window !== "object")
      return null;
    return getSystemTheme();
  });
  const [preference, setPreference] = (0, import_react.useState)(() => {
    if (isValidPreference(specifiedPreference))
      return specifiedPreference;
    return DEFAULT_PREFERENCE;
  });
  const persistTheme = useFetcher();
  const persistThemeRef = (0, import_react.useRef)(persistTheme);
  (0, import_react.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  (0, import_react.useEffect)(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);
    const handleChange = () => {
      if (preference !== "system" /* SYSTEM */)
        return;
      const newTheme = mediaQuery.matches ? "light" /* LIGHT */ : "dark" /* DARK */;
      setThemeState(newTheme);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [preference]);
  const setTheme = (0, import_react.useCallback)(
    (newTheme, newPreference = "system" /* SYSTEM */) => {
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
    setTheme
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, { value, children }, void 0, false, {
    fileName: "src/app/store/theme.store.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
};
var useTheme = () => {
  const themeContext = (0, import_react.useContext)(ThemeContext);
  if (themeContext === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};
var isValidTheme = (theme) => {
  return themes.includes(theme);
};
var isValidPreference = (preference) => {
  return preferences.includes(preference);
};

export {
  DEFAULT_THEME,
  getSystemTheme,
  ThemeProvider,
  useTheme,
  isValidTheme,
  isValidPreference
};
//# sourceMappingURL=/build/_shared/chunk-PUG2S6IS.js.map
