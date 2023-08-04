import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/store/user.store.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UserContext = (0, import_react.createContext)(void 0);
var UserContextProvider = ({
  user,
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserContext.Provider, { value: { user }, children }, void 0, false, {
  fileName: "src/app/store/user.store.tsx",
  lineNumber: 17,
  columnNumber: 3
}, this);
var useUserStore = () => {
  const userStore = (0, import_react.useContext)(UserContext);
  if (!userStore) {
    throw new Error("User context not found");
  }
  return userStore;
};

export {
  UserContextProvider,
  useUserStore
};
//# sourceMappingURL=/build/_shared/chunk-BZEEQDWJ.js.map
