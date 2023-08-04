import {
  t
} from "/build/_shared/chunk-TUGJO2L3.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/components/button/button.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Button = (0, import_react.forwardRef)(
  ({
    children,
    color = "primary",
    variant = "contained",
    size = "md",
    className,
    ...rest
  }, forwardedRef) => {
    const primaryStyle = () => {
      if (variant === "contained") {
        return "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";
      }
      if (variant === "subtlest") {
        return "bg-background-brand-subtlest text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed";
      }
      if (variant === "text") {
        return "text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed";
      }
      return "";
    };
    const neutralStyle = () => {
      if (variant === "contained") {
        return "bg-background-neutral-bold text-font-inverse hover:bg-background-neutral-bold-hovered active:bg-background-neutral-bold-pressed";
      }
      if (variant === "subtlest") {
        return "bg-background-neutral hover:bg-background-neutral-hovered active:bg-background-neutral-pressed";
      }
      if (variant === "text") {
        return "text-font-subtle hover:bg-background-neutral-hovered active:bg-background-neutral-pressed";
      }
      return "";
    };
    const successStyle = () => {
      if (variant === "contained") {
        return "bg-background-success-bold text-font-inverse hover:bg-background-success-bold-hovered active:bg-background-success-bold-pressed";
      }
      if (variant === "subtlest") {
        return "bg-background-success text-font-success hover:bg-background-success-hovered active:bg-background-success-pressed";
      }
      if (variant === "text") {
        return "text-font-success hover:bg-background-success-hovered active:bg-background-success-pressed";
      }
      return "";
    };
    const dangerStyle = () => {
      if (variant === "contained") {
        return "bg-background-danger-bold text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed";
      }
      if (variant === "subtlest") {
        return "bg-background-danger text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed";
      }
      if (variant === "text") {
        return "text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed";
      }
      return "";
    };
    const warningStyle = () => {
      if (variant === "contained") {
        return "bg-background-warning-bold text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed";
      }
      if (variant === "subtlest") {
        return "bg-background-warning text-font-warning hover:bg-background-warning-hovered active:bg-background-warning-pressed";
      }
      if (variant === "text") {
        return "text-font-warning hover:bg-background-warning-hovered active:bg-background-warning-pressed";
      }
      return "";
    };
    const infoStyle = () => {
      if (variant === "contained") {
        return "bg-background-info-bold text-font-inverse hover:bg-background-info-bold-hovered active:bg-background-info-bold-pressed";
      }
      if (variant === "subtlest") {
        return "bg-background-info text-font-info hover:bg-background-info-hovered active:bg-background-info-pressed";
      }
      if (variant === "text") {
        return "text-font-info hover:bg-background-info-hovered active:bg-background-info-pressed";
      }
      return "";
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        ref: forwardedRef,
        className: t(
          "flex cursor-pointer items-center justify-center gap-2 rounded p-2 text-font disabled:cursor-not-allowed disabled:opacity-60",
          color === "primary" && primaryStyle(),
          color === "neutral" && neutralStyle(),
          color === "success" && successStyle(),
          color === "danger" && dangerStyle(),
          color === "warning" && warningStyle(),
          color === "info" && infoStyle(),
          size === "lg" && "gap-3 px-8 py-2 text-lg",
          className
        ),
        ...rest,
        children
      },
      void 0,
      false,
      {
        fileName: "src/app/components/button/button.tsx",
        lineNumber: 113,
        columnNumber: 7
      },
      this
    );
  }
);
Button.displayName = "Button";

export {
  Button
};
//# sourceMappingURL=/build/_shared/chunk-KIAY75M2.js.map
