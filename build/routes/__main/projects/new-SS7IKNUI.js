import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Title2
} from "/build/_shared/chunk-ZGECWANN.js";
import {
  IoCloseOutline,
  Kbd
} from "/build/_shared/chunk-PCSK3WXQ.js";
import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b
} from "/build/_shared/chunk-7RER4I7C.js";
import "/build/_shared/chunk-VD4CXEVL.js";
import "/build/_shared/chunk-4NIBFM3Q.js";
import "/build/_shared/chunk-HMV63GZB.js";
import {
  useUserStore
} from "/build/_shared/chunk-BZEEQDWJ.js";
import {
  $db6c3485150b8e66$export$1ab7ae714698c4b8,
  UserAvatar
} from "/build/_shared/chunk-7E745BWT.js";
import {
  Button
} from "/build/_shared/chunk-KIAY75M2.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-5KGVAOR3.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  _extends
} from "/build/_shared/chunk-KJW57NP4.js";
import "/build/_shared/chunk-JPUJUZ7O.js";
import {
  BsCheckLg
} from "/build/_shared/chunk-W6GYYNIT.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import "/build/_shared/chunk-L3QT7SD6.js";
import {
  t
} from "/build/_shared/chunk-TUGJO2L3.js";
import {
  Form,
  Link,
  useActionData,
  useFetcher,
  useLoaderData,
  useNavigate
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

// src/app/routes/__main/projects/new.tsx
var import_node = __toESM(require_node());

// src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx
var import_react3 = __toESM(require_react());

// node_modules/.pnpm/@radix-ui+react-checkbox@1.0.4_@types+react-dom@18.2.7_@types+react@18.2.15_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-checkbox/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $e698a72e93240346$var$CHECKBOX_NAME = "Checkbox";
var [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($e698a72e93240346$var$CHECKBOX_NAME);
var [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
var $e698a72e93240346$export$48513f6b9f8ce62d = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...checkboxProps } = props;
  const [button, setButton] = (0, import_react.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  const initialCheckedStateRef = (0, import_react.useRef)(checked);
  (0, import_react.useEffect)(() => {
    const form = button === null || button === void 0 ? void 0 : button.form;
    if (form) {
      const reset = () => setChecked(initialCheckedStateRef.current);
      form.addEventListener("reset", reset);
      return () => form.removeEventListener("reset", reset);
    }
  }, [
    button,
    setChecked
  ]);
  return /* @__PURE__ */ (0, import_react.createElement)($e698a72e93240346$var$CheckboxProvider, {
    scope: __scopeCheckbox,
    state: checked,
    disabled
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": $e698a72e93240346$var$isIndeterminate(checked) ? "mixed" : checked,
    "aria-required": required,
    "data-state": $e698a72e93240346$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, checkboxProps, {
    ref: composedRefs,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => $e698a72e93240346$var$isIndeterminate(prevChecked) ? true : !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ (0, import_react.createElement)($e698a72e93240346$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
var $e698a72e93240346$var$INDICATOR_NAME = "CheckboxIndicator";
var $e698a72e93240346$export$59aad738f51d1c05 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
  const context = $e698a72e93240346$var$useCheckboxContext($e698a72e93240346$var$INDICATOR_NAME, __scopeCheckbox);
  return /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $e698a72e93240346$var$isIndeterminate(context.state) || context.state === true
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $e698a72e93240346$var$getState(context.state),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      pointerEvents: "none",
      ...props.style
    }
  })));
});
var $e698a72e93240346$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      input.indeterminate = $e698a72e93240346$var$isIndeterminate(checked);
      setChecked.call(input, $e698a72e93240346$var$isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ (0, import_react.createElement)("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: $e698a72e93240346$var$isIndeterminate(checked) ? false : checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $e698a72e93240346$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $e698a72e93240346$var$getState(checked) {
  return $e698a72e93240346$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var $e698a72e93240346$export$be92b6f5f03c0fe9 = $e698a72e93240346$export$48513f6b9f8ce62d;
var $e698a72e93240346$export$adb584737d712b70 = $e698a72e93240346$export$59aad738f51d1c05;

// src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var PanelHeaderProject = ({
  id
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex flex-grow items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: id }, void 0, false, {
      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/projects",
        className: "ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon hover:bg-background-accent-grey-subtlest",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IoCloseOutline, { size: 32 }, void 0, false, {
          fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ProjectPanelView = ({ project, users }) => {
  var _a;
  const [isOpen, setIsOpen] = (0, import_react3.useState)(true);
  const [portalContainer, setPortalContainer] = (0, import_react3.useState)(
    null
  );
  const formRef = (0, import_react3.useRef)(null);
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const actionData = useActionData();
  const { user: loggedUser } = useUserStore();
  const postData = (0, import_react3.useCallback)(
    (formTarget) => {
      const formData = new FormData(formTarget);
      formData.set("_action", "upsert");
      fetcher.submit(formData, {
        method: "post"
      });
    },
    [fetcher]
  );
  const handleProgrammaticSubmit = (0, import_react3.useCallback)(() => {
    if (formRef.current) {
      postData(formRef.current);
    }
  }, [postData]);
  const handleProgrammaticClose = () => {
    setIsOpen(false);
  };
  const onKeyDown = (0, import_react3.useCallback)(
    (e) => {
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleProgrammaticSubmit();
      }
    },
    [handleProgrammaticSubmit]
  );
  (0, import_react3.useEffect)(() => {
    var _a2;
    const isErrors = (actionData == null ? void 0 : actionData.errors) && Object.keys(actionData == null ? void 0 : actionData.errors).length > 0;
    if (isErrors) {
      (_a2 = document.getElementById("project-panel-overlay")) == null ? void 0 : _a2.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [actionData]);
  (0, import_react3.useEffect)(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  (0, import_react3.useEffect)(() => {
    if (!isOpen) {
      setTimeout(() => navigate("/projects"), 300);
    }
  }, [isOpen, navigate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Root, { open: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Portal, { container: portalContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Overlay,
      {
        id: "project-panel-overlay",
        className: isOpen ? "" : "bg-opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Content,
          {
            onEscapeKeyDown: handleProgrammaticClose,
            onPointerDownOutside: handleProgrammaticClose,
            className: t(
              "max-w-[600px]",
              !isOpen && "translate-y-[10px] opacity-0"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PanelHeaderProject, { id: (project == null ? void 0 : project.id) || "Create new project" }, void 0, false, {
                fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                lineNumber: 100,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", ref: formRef, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-6", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { className: "-ml-3 mb-8 mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    Title2,
                    {
                      initTitle: (project == null ? void 0 : project.name) || "",
                      maxLength: 30,
                      error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name
                    },
                    void 0,
                    false,
                    {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 104,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 103,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-primary-black", children: "Description" }, void 0, false, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 110,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-ml-3 mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Description, { initDescription: (project == null ? void 0 : project.description) || "" }, void 0, false, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 112,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 111,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "space-y-1.5", children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "li",
                    {
                      className: "-mx-2 rounded-lg px-2 outline outline-2 outline-transparent duration-75 ease-linear hover:bg-background-brand-subtlest hover:outline-border-brand",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        "label",
                        {
                          htmlFor: `checkbox-${user.id}`,
                          className: "flex w-full cursor-pointer items-center justify-between gap-4 py-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center gap-4", children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserAvatar, { ...user, size: 48 }, void 0, false, {
                                fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                lineNumber: 125,
                                columnNumber: 29
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: user.name }, void 0, false, {
                                fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                lineNumber: 126,
                                columnNumber: 29
                              }, this)
                            ] }, void 0, true, {
                              fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                              lineNumber: 124,
                              columnNumber: 27
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                              $e698a72e93240346$export$be92b6f5f03c0fe9,
                              {
                                id: `checkbox-${user.id}`,
                                className: "h-[36px] w-[36px] rounded-md bg-background-input",
                                name: "user",
                                value: user.id,
                                defaultChecked: user.id === (loggedUser == null ? void 0 : loggedUser.id),
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($e698a72e93240346$export$adb584737d712b70, { className: "flex h-[36px] w-[36px] rounded-md bg-background-brand-bold duration-150 ease-in flex-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                                  BsCheckLg,
                                  {
                                    size: 16,
                                    className: "text-font-inverse"
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                    lineNumber: 136,
                                    columnNumber: 31
                                  },
                                  this
                                ) }, void 0, false, {
                                  fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                  lineNumber: 135,
                                  columnNumber: 29
                                }, this)
                              },
                              void 0,
                              false,
                              {
                                fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                lineNumber: 128,
                                columnNumber: 27
                              },
                              this
                            )
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                          lineNumber: 120,
                          columnNumber: 25
                        },
                        this
                      )
                    },
                    user.id,
                    false,
                    {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 116,
                      columnNumber: 23
                    },
                    this
                  )) }, void 0, false, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 114,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                  lineNumber: 102,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 grid grid-cols-3 items-end justify-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-primary-light text-2xs text-font-subtlest text-opacity-80", children: [
                    "Press ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Kbd, { children: "Shift" }, void 0, false, {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 149,
                      columnNumber: 27
                    }, this),
                    " + ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Kbd, { children: "S" }, void 0, false, {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 149,
                      columnNumber: 46
                    }, this),
                    " to accept"
                  ] }, void 0, true, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 148,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    Button,
                    {
                      color: "primary",
                      type: "submit",
                      name: "_action",
                      value: "upsert",
                      className: "w-fit gap-2 px-8 py-2 font-primary-bold text-lg",
                      disabled: fetcher.state !== "idle",
                      "aria-label": "Accept changes",
                      children: fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
                        "Submmiting",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Spinner, {}, void 0, false, {
                          fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                          lineNumber: 164,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                        lineNumber: 162,
                        columnNumber: 25
                      }, this) : "Accept"
                    },
                    void 0,
                    false,
                    {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 152,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 151,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "justify-self-end font-primary-light text-2xs text-font-subtlest text-opacity-80", children: [
                    "Press ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Kbd, { children: "Esc" }, void 0, false, {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 172,
                      columnNumber: 27
                    }, this),
                    " to close"
                  ] }, void 0, true, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 171,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                  lineNumber: 147,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                lineNumber: 101,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
            lineNumber: 92,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
        lineNumber: 88,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        ref: setPortalContainer,
        className: "fixed left-0 top-0 z-50 h-full w-full"
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
        lineNumber: 181,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
};
var Spinner = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  "svg",
  {
    "aria-hidden": "true",
    className: "fill-grey-600 mr-2 inline-block h-5 w-5 animate-spin",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "path",
        {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentBaseColor"
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
          lineNumber: 202,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "path",
        {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentColor"
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
          lineNumber: 206,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  true,
  {
    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
    lineNumber: 195,
    columnNumber: 3
  },
  this
);

// src/app/routes/__main/projects/new.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  const title = "Jira clone - Create project";
  const description = "Create new project and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects-new.png";
  const url = "https://jira-clone.fly.dev/projects/new";
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
    "twitter:image:width": "1268",
    "twitter:image:height": "856",
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
function IssuePanelRoute() {
  const { users } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectPanelView, { users }, void 0, false, {
    fileName: "src/app/routes/__main/projects/new.tsx",
    lineNumber: 123,
    columnNumber: 10
  }, this);
}
export {
  IssuePanelRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects/new-SS7IKNUI.js.map
