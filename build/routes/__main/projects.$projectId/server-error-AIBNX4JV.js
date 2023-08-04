import {
  Q
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
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId/server-error.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ErrorBoundary({ error }) {
  (0, import_react.useEffect)(() => {
    Q.error("Try reloading the page.");
  }, []);
  console.error(error);
  const errorMessage = "The Server error page failed. This is an example of a server error page (check network tab). Navigate to the board page";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Error500, { message: errorMessage, href: "board" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/server-error.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/server-error.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function Error500Route() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "This will never show because of the server error 500" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/server-error.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  Error500Route as default
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/server-error-AIBNX4JV.js.map
