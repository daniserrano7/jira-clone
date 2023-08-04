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

// src/app/ui/main/project/analytics/analytics.view.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var AnalyticsView = () => {
  (0, import_react.useEffect)(() => {
    Q.info("This section is not available yet.");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Comming soon..." }, void 0, false, {
    fileName: "src/app/ui/main/project/analytics/analytics.view.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
};

// src/app/routes/__main/projects.$projectId/analytics.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ErrorBoundary({ error }) {
  console.error(error);
  const errorMessage = "The analytics page failed. Navigate to the board page";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Error500, { message: errorMessage, href: "board" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/analytics.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/analytics.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function AnalyticsRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AnalyticsView, {}, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/analytics.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  AnalyticsRoute as default
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/analytics-OZV2ID6I.js.map
