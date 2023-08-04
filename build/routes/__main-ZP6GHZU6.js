import {
  $d08ef79370b62062$export$1ff3c3f08ae963c0,
  $d08ef79370b62062$export$371ab307eab489c0,
  $d08ef79370b62062$export$41fb9f06171c75f4,
  $d08ef79370b62062$export$602eac185826482c,
  $d08ef79370b62062$export$6d08773d2e66f8f2,
  $d08ef79370b62062$export$7c6e2c02157bb7d2,
  $d08ef79370b62062$export$a98f0dcb43a68a25,
  $d08ef79370b62062$export$b04be29aa201d4f5,
  $d08ef79370b62062$export$be92b6f5f03c0fe9
} from "/build/_shared/chunk-I4XVXYPQ.js";
import {
  FaPowerOff
} from "/build/_shared/chunk-INOV5TKW.js";
import "/build/_shared/chunk-TTKFU63G.js";
import {
  AiFillGithub
} from "/build/_shared/chunk-MFMVNLXL.js";
import {
  MdDarkMode,
  MdLightMode
} from "/build/_shared/chunk-Z2HWOQXD.js";
import {
  UserContextProvider,
  useUserStore
} from "/build/_shared/chunk-BZEEQDWJ.js";
import {
  Tooltip,
  UserAvatar
} from "/build/_shared/chunk-7E745BWT.js";
import {
  Button
} from "/build/_shared/chunk-KIAY75M2.js";
import "/build/_shared/chunk-5KGVAOR3.js";
import "/build/_shared/chunk-KJW57NP4.js";
import "/build/_shared/chunk-JPUJUZ7O.js";
import {
  DEFAULT_THEME,
  getSystemTheme,
  isValidPreference,
  isValidTheme,
  useTheme
} from "/build/_shared/chunk-PUG2S6IS.js";
import {
  HiQuestionMarkCircle
} from "/build/_shared/chunk-IBV4GJWC.js";
import "/build/_shared/chunk-L3QT7SD6.js";
import {
  t
} from "/build/_shared/chunk-TUGJO2L3.js";
import {
  Form,
  Link,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-OBXMDE47.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// empty-module:@app/session-storage/user-storage.server
var require_user_storage = __commonJS({
  "empty-module:@app/session-storage/user-storage.server"(exports, module) {
    module.exports = {};
  }
});

// src/app/routes/__main.tsx
var import_node = __toESM(require_node());
var import_user_storage = __toESM(require_user_storage());

// src/app/ui/main/header/select-theme.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SelctTheme = () => {
  const { theme, setTheme, preference } = useTheme();
  const themeOptions = [
    {
      value: "light" /* LIGHT */,
      label: "Light",
      image: "/images/select-theme-light.png"
    },
    {
      value: "dark" /* DARK */,
      label: "Dark",
      image: "/images/select-theme-dark.png"
    },
    {
      value: "lava" /* LAVA */,
      label: "Lava",
      image: "/images/select-theme-dark.png"
    },
    {
      value: "lime" /* LIME */,
      label: "Lime",
      image: "/images/select-theme-dark.png"
    },
    {
      value: "system" /* SYSTEM */,
      label: "System",
      image: "/images/select-theme-system.png"
    }
  ];
  const currentValue = preference === "system" /* SYSTEM */ ? preference : theme;
  const triggerIconClass = t("fill-icon group-hover:fill-icon-brand");
  const selectTheme = (value) => {
    if (isValidPreference(value)) {
      setTheme(getSystemTheme(), value);
    }
    if (isValidTheme(value)) {
      setTheme(value, "selected" /* SELECTED */);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$be92b6f5f03c0fe9, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { title: "Select theme", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      $d08ef79370b62062$export$41fb9f06171c75f4,
      {
        "aria-label": "Open theme select",
        className: "group flex h-[30px] w-[30px] rounded-full outline outline-2 outline-icon flex-center hover:bg-background-brand-subtlest hover:outline-border-brand",
        children: theme === "light" /* LIGHT */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdLightMode, { className: triggerIconClass }, void 0, false, {
          fileName: "src/app/ui/main/header/select-theme.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdDarkMode, { className: triggerIconClass }, void 0, false, {
          fileName: "src/app/ui/main/header/select-theme.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/header/select-theme.tsx",
        lineNumber: 65,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/ui/main/header/select-theme.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      $d08ef79370b62062$export$7c6e2c02157bb7d2,
      {
        align: "end",
        sideOffset: 5,
        className: "z-50 origin-top-right rounded bg-elevation-surface-overlay p-3 shadow-md radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$b04be29aa201d4f5, { className: "select-none pb-2 text-lg", children: "Select theme" }, void 0, false, {
            fileName: "src/app/ui/main/header/select-theme.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            $d08ef79370b62062$export$a98f0dcb43a68a25,
            {
              value: currentValue || DEFAULT_THEME,
              onValueChange: selectTheme,
              className: t(
                "grid gap-2",
                themeOptions.length > 6 ? "grid-cols-3" : themeOptions.length > 3 ? "grid-cols-2" : "grid-cols-1"
              ),
              children: themeOptions.map(({ value, label, image }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                $d08ef79370b62062$export$371ab307eab489c0,
                {
                  value,
                  className: t(
                    "group flex gap-4 rounded px-2 pb-2 pt-1 outline outline-2 hover:outline-border-brand",
                    value === currentValue ? "bg-background-brand-subtlest text-font-brand outline-border-brand" : "outline-transparent"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "span",
                      {
                        className: t(
                          "border-1 mt-1 flex h-4 w-4 rounded-full border flex-center group-hover:border-border-brand",
                          value === currentValue ? "border-border-brand" : "border-border-disabled"
                        ),
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "span",
                          {
                            className: t(
                              "h-2 w-2 rounded-full bg-background-brand-bold",
                              value === currentValue ? "block" : "hidden"
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "src/app/ui/main/header/select-theme.tsx",
                            lineNumber: 116,
                            columnNumber: 19
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "src/app/ui/main/header/select-theme.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: label }, void 0, false, {
                        fileName: "src/app/ui/main/header/select-theme.tsx",
                        lineNumber: 124,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "img",
                        {
                          src: image,
                          alt: `${label} theme`,
                          className: "h-[100px] w-[180px] rounded border-2 border-border-disabled object-cover"
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/app/ui/main/header/select-theme.tsx",
                          lineNumber: 125,
                          columnNumber: 19
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "src/app/ui/main/header/select-theme.tsx",
                      lineNumber: 123,
                      columnNumber: 17
                    }, this)
                  ]
                },
                value,
                true,
                {
                  fileName: "src/app/ui/main/header/select-theme.tsx",
                  lineNumber: 98,
                  columnNumber: 15
                },
                this
              ))
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/header/select-theme.tsx",
              lineNumber: 85,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/header/select-theme.tsx",
        lineNumber: 77,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/ui/main/header/select-theme.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/header/select-theme.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/header/user-profile.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var UserProfile = () => {
  const { user } = useUserStore();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($d08ef79370b62062$export$be92b6f5f03c0fe9, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($d08ef79370b62062$export$41fb9f06171c75f4, { className: "ml-1 rounded-full outline outline-2 outline-border-disabled hover:outline-border-brand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserAvatar, { ...user }, void 0, false, {
      fileName: "src/app/ui/main/header/user-profile.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/header/user-profile.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($d08ef79370b62062$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      $d08ef79370b62062$export$7c6e2c02157bb7d2,
      {
        align: "end",
        sideOffset: 5,
        className: t(
          "z-50 rounded bg-elevation-surface-overlay shadow-md",
          "radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($d08ef79370b62062$export$6d08773d2e66f8f2, { className: "flex flex-col items-center p-3 !outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserAvatar, { ...user, size: 80 }, void 0, false, {
              fileName: "src/app/ui/main/header/user-profile.tsx",
              lineNumber: 27,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "mt-2 text-lg", children: user.name }, void 0, false, {
              fileName: "src/app/ui/main/header/user-profile.tsx",
              lineNumber: 28,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($d08ef79370b62062$export$1ff3c3f08ae963c0, { className: "h-px bg-border" }, void 0, false, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($d08ef79370b62062$export$6d08773d2e66f8f2, { className: "select-none p-1 !outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { action: "action/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Button,
            {
              color: "danger",
              variant: "subtlest",
              type: "submit",
              onClick: (e) => e.stopPropagation(),
              className: "w-full",
              "aria-label": "Log out",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FaPowerOff, {}, void 0, false, {
                  fileName: "src/app/ui/main/header/user-profile.tsx",
                  lineNumber: 42,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Log out" }, void 0, false, {
                  fileName: "src/app/ui/main/header/user-profile.tsx",
                  lineNumber: 43,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "src/app/ui/main/header/user-profile.tsx",
              lineNumber: 33,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/header/user-profile.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/ui/main/header/user-profile.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/header/user-profile.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/header/header.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Header = () => {
  const iconBaseClass = "w-[24px] h-[24px] rounded-full flex items-center justify-center hover:bg-background-brand-subtlest hover:text-icon-brand";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "relative z-10 flex w-full items-center justify-between bg-elevation-surface-raised px-5 py-2 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      Link,
      {
        to: "/",
        className: "flex cursor-pointer items-center rounded px-3 py-2 hover:bg-background-brand-subtlest hover:text-font-brand",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/images/logo.png", width: 24, height: 24, alt: "Logo" }, void 0, false, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-2", children: "Jira Clone" }, void 0, false, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/ui/main/header/header.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { title: "About", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "button",
        {
          "aria-label": "About this website",
          disabled: true,
          className: t(iconBaseClass, "cursor-not-allowed"),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HiQuestionMarkCircle, { size: 24 }, void 0, false, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/header/header.tsx",
          lineNumber: 26,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { title: "Github", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "a",
        {
          href: "https://github.com/daniserrano7/jira-clone",
          className: iconBaseClass,
          "aria-label": "Go to my Github",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AiFillGithub, { size: 24 }, void 0, false, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/header/header.tsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelctTheme, {}, void 0, false, {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserProfile, {}, void 0, false, {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/header/header.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/header/header.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/main.layout.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var MainLayout = ({ user }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserContextProvider, { user, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, {}, void 0, false, {
      fileName: "src/app/ui/main/main.layout.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "src/app/ui/main/main.layout.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/main.layout.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/ui/main/main.layout.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};

// src/app/routes/__main.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function AppRoute() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MainLayout, { user }, void 0, false, {
    fileName: "src/app/routes/__main.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
export {
  AppRoute as default
};
//# sourceMappingURL=/build/routes/__main-ZP6GHZU6.js.map
