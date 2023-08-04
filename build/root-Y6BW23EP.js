import {
  ThemeProvider,
  useTheme
} from "/build/_shared/chunk-PUG2S6IS.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  Error404
} from "/build/_shared/chunk-GNXEGRWU.js";
import {
  t
} from "/build/_shared/chunk-TUGJO2L3.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-OBXMDE47.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  k
} from "/build/_shared/chunk-PL7FAYB3.js";
import {
  Error500
} from "/build/_shared/chunk-XQ35TRLE.js";
import "/build/_shared/chunk-LFBH4RTF.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// empty-module:./session-storage/theme-storage.server
var require_theme_storage = __commonJS({
  "empty-module:./session-storage/theme-storage.server"(exports, module) {
    module.exports = {};
  }
});

// src/app/root.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_theme_storage = __toESM(require_theme_storage());

// src/app/components/toast/toast.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Toast = ({ theme }) => {
  const toastTheme = theme === "light" ? "light" : "dark";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    k,
    {
      position: "top-right",
      autoClose: 5e3,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: toastTheme
    },
    void 0,
    false,
    {
      fileName: "src/app/components/toast/toast.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
};

// src/app/styles/app-compiled.css
var app_compiled_default = "/build/_assets/app-compiled-VG5UKFNM.css";

// src/app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-O3VH7KO3.css";

// node_modules/.pnpm/react-toastify@9.1.3_react-dom@18.2.0_react@18.2.0/node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-K46O6LFP.css";

// src/app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    { rel: "stylesheet", href: fonts_default },
    { rel: "stylesheet", href: app_compiled_default },
    { rel: "stylesheet", href: ReactToastify_default },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
  ];
};
var meta = () => {
  const title = "Jira clone";
  const description = "Task manager application inspired in Jira. Side project made with Remix, React, Tailwind, TypeScript and more.";
  const image = "https://jira-clone.fly.dev/static/images/select-theme-light.png";
  const url = "https://jira-clone.fly.dev";
  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "951",
    "twitter:image:height": "696",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  };
  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [...formatTags(tags), ...formatProperties(properties)];
};
function AppWithProviders() {
  const { theme, preference } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeProvider, { specifiedTheme: theme, specifiedPreference: preference, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(App, {}, void 0, false, {
    fileName: "src/app/root.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/root.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
var App = () => {
  const loaderData = useLoaderData();
  const { theme: sessionTheme, preference: sessionPreference } = loaderData;
  const { theme } = useTheme();
  const fetcher = useFetcher();
  (0, import_react.useEffect)(() => {
    if (sessionTheme && sessionPreference === "selected" /* SELECTED */)
      return;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" /* DARK */ : "light" /* LIGHT */;
    fetcher.submit(
      { theme: systemTheme, preference: "system" /* SYSTEM */ },
      { action: "action/set-theme", method: "post" }
    );
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: t("h-full", theme), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/root.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full bg-elevation-surface font-primary text-font", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Toast, { theme: theme || "light" /* LIGHT */ }, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: !sessionTheme ? `
                (function () {
                  if (typeof window === 'undefined') return;

                  const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    
                  if (isSystemThemeDark) {
                    const htmlElement = document.documentElement;
                    htmlElement.classList.add('dark');
                  }
                })();
              ` : ""
          }
        },
        void 0,
        false,
        {
          fileName: "src/app/root.tsx",
          lineNumber: 133,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/app/root.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/root.tsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
};
var errorComponentStyle = {
  maxWidth: "500px",
  width: "80%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#0052cc",
  fontFamily: "sans-serif",
  fontWeight: "bold"
};
function ErrorBoundary({ error }) {
  console.error(error);
  const errorMessage = "It seems there is a critical error! Please try again or contact me at: danielserrano.contacto@gmail.com";
  return (
    // Inline styles because tailwind is not loaded at this point
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: errorComponentStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Error500, { message: errorMessage, href: "/" }, void 0, false, {
      fileName: "src/app/root.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "src/app/root.tsx",
      lineNumber: 176,
      columnNumber: 5
    }, this)
  );
}
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Oops! Not found" }, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/root.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: errorComponentStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Error404,
      {
        message: "It seems that you have lost! Go to the main page",
        href: "/"
      },
      void 0,
      false,
      {
        fileName: "src/app/root.tsx",
        lineNumber: 192,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/root.tsx",
      lineNumber: 191,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/root.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/root.tsx",
    lineNumber: 184,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  AppWithProviders as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-Y6BW23EP.js.map
