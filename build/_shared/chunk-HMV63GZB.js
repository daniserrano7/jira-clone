import {
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/.pnpm/tailwindcss-radix-ui@0.0.4_react@18.2.0/node_modules/tailwindcss-radix-ui/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function twix(component, className) {
  return import_react.default.forwardRef((props, ref) => {
    return import_react.default.createElement(component, {
      ...props,
      ref,
      className: `${className} ${props.className ?? ""}`
    });
  });
}

export {
  twix
};
//# sourceMappingURL=/build/_shared/chunk-HMV63GZB.js.map
