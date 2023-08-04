import {
  Error404
} from "/build/_shared/chunk-GNXEGRWU.js";
import {
  useParams
} from "/build/_shared/chunk-OBXMDE47.js";
import {
  Q
} from "/build/_shared/chunk-PL7FAYB3.js";
import "/build/_shared/chunk-LFBH4RTF.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId/$.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CatchBoundary() {
  (0, import_react.useEffect)(() => {
    Q.warning("Try to go back to the previous page.");
  }, []);
  const params = useParams();
  const projectId = params.projectId;
  const slug = params["*"];
  const errorMessage = `The section "/${slug}" does not exists, so a fallback 404 is shown (check network tab). Navigate to boards page`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Error404, { message: errorMessage, href: `/projects/${projectId}/board` }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/$.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/$.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function Error404Route() {
  return null;
}
export {
  CatchBoundary,
  Error404Route as default
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/$-2V55HSZE.js.map
