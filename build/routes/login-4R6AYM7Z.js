import {
  Content,
  Item,
  ItemIndicator,
  ItemText,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  TriggerIcon,
  Value,
  Viewport
} from "/build/_shared/chunk-E2SOKFYO.js";
import "/build/_shared/chunk-R3UI3B5K.js";
import {
  userMock1
} from "/build/_shared/chunk-NCHMJE4I.js";
import "/build/_shared/chunk-7RER4I7C.js";
import "/build/_shared/chunk-HMV63GZB.js";
import "/build/_shared/chunk-TTKFU63G.js";
import {
  UserAvatar
} from "/build/_shared/chunk-7E745BWT.js";
import {
  Button
} from "/build/_shared/chunk-KIAY75M2.js";
import "/build/_shared/chunk-KJW57NP4.js";
import "/build/_shared/chunk-JPUJUZ7O.js";
import "/build/_shared/chunk-DKH7XA3G.js";
import "/build/_shared/chunk-L3QT7SD6.js";
import "/build/_shared/chunk-TUGJO2L3.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-OBXMDE47.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/login.tsx
var import_node = __toESM(require_node());

// src/app/ui/login/login.view.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LoginView = ({ users }) => {
  const [selectedValue, setSelectedValue] = (0, import_react.useState)(userMock1);
  const onValueChange = (userId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-[400px] pt-[10vh]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-primary-black text-5xl", children: "Select login user" }, void 0, false, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-8 mt-3 font-primary-light text-lg text-font-subtle", children: "There is no authentication involved. You can login with any user you want! Keep in mind you can only access the projects the user is member of. Try to create issues and comments with different users to see how it reflects in the UI and database. You can logout on the user avatar." }, void 0, false, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mx-auto w-[300px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Root,
        {
          name: "user",
          defaultValue: userMock1.id,
          onValueChange,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Trigger,
              {
                className: "flex w-full justify-between",
                "aria-label": "Open user select",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, { ...selectedValue }, void 0, false, {
                      fileName: "src/app/ui/login/login.view.tsx",
                      lineNumber: 39,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Value, {}, void 0, false, {
                      fileName: "src/app/ui/login/login.view.tsx",
                      lineNumber: 40,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 38,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriggerIcon, {}, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 34,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollUpButton, {}, void 0, false, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 45,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Viewport, { children: [
                users.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { value: user.id, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator, {}, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 49,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, { ...user }, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 50,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemText, { children: user.name }, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 51,
                    columnNumber: 19
                  }, this)
                ] }, index, true, {
                  fileName: "src/app/ui/login/login.view.tsx",
                  lineNumber: 48,
                  columnNumber: 17
                }, this)),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
                  fileName: "src/app/ui/login/login.view.tsx",
                  lineNumber: 54,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 46,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollDownButton, {}, void 0, false, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 56,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "src/app/ui/login/login.view.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "src/app/ui/login/login.view.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          type: "submit",
          name: "_action",
          value: "setUser",
          "aria-label": "Login",
          className: "mt-2 w-full",
          children: "Login"
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/login/login.view.tsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/login/login.view.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// src/app/routes/login.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function LoginRoute() {
  const { users } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LoginView, { users }, void 0, false, {
    fileName: "src/app/routes/login.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
export {
  LoginRoute as default
};
//# sourceMappingURL=/build/routes/login-4R6AYM7Z.js.map
