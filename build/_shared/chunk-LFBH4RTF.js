import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/components/error-base.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ErrorBase = ({ variant, message, href }) => {
  const imgPath = `/images/error-${variant}.svg`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-[500px] text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: imgPath,
        alt: "Server error",
        className: "mx-auto mb-4 h-[350px] w-auto"
      },
      void 0,
      false,
      {
        fileName: "src/app/components/error-base.tsx",
        lineNumber: 6,
        columnNumber: 7
      },
      this
    ),
    href ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "a",
      {
        href,
        className: "max-w-[100px] text-lg text-link hover:underline active:text-link-pressed",
        children: message
      },
      void 0,
      false,
      {
        fileName: "src/app/components/error-base.tsx",
        lineNumber: 12,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-w-[100px] text-lg text-font", children: message }, void 0, false, {
      fileName: "src/app/components/error-base.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/error-base.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};

export {
  ErrorBase
};
//# sourceMappingURL=/build/_shared/chunk-LFBH4RTF.js.map
