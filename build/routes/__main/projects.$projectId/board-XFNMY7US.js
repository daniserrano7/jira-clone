import {
  DEFAULT_SORT,
  EVENTS,
  PriorityIcon,
  ProjectContextProvider,
  TaskIcon,
  isValidSort,
  sortList,
  useProjectStore
} from "/build/_shared/chunk-L3DOVY7A.js";
import {
  $ae6933e535247d3d$export$7d15b64cf5a3a4c4,
  $cc7e05a45900e73f$export$2f60d3ec9ad468f2,
  $cc7e05a45900e73f$export$41fb9f06171c75f4,
  $cc7e05a45900e73f$export$4c8d1a57a761ef94,
  $cc7e05a45900e73f$export$6d08773d2e66f8f2,
  $cc7e05a45900e73f$export$7c6e2c02157bb7d2,
  $cc7e05a45900e73f$export$be92b6f5f03c0fe9,
  $cc7e05a45900e73f$export$bf1aedc3039c8d63,
  $cc7e05a45900e73f$export$d5c6c08dc2d3ca7,
  $cc7e05a45900e73f$export$d6e5bf9c43ea9319
} from "/build/_shared/chunk-R3UI3B5K.js";
import {
  IoCloseOutline,
  Kbd
} from "/build/_shared/chunk-PCSK3WXQ.js";
import "/build/_shared/chunk-7RER4I7C.js";
import {
  $d08ef79370b62062$export$21b07c8f274aebd5,
  $d08ef79370b62062$export$41fb9f06171c75f4,
  $d08ef79370b62062$export$6d08773d2e66f8f2,
  $d08ef79370b62062$export$7c6e2c02157bb7d2,
  $d08ef79370b62062$export$be92b6f5f03c0fe9
} from "/build/_shared/chunk-I4XVXYPQ.js";
import {
  FaSortAmountDownAlt
} from "/build/_shared/chunk-INOV5TKW.js";
import {
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-TTKFU63G.js";
import {
  AiOutlinePlus
} from "/build/_shared/chunk-MFMVNLXL.js";
import {
  UserAvatar
} from "/build/_shared/chunk-7E745BWT.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-5KGVAOR3.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  _extends
} from "/build/_shared/chunk-KJW57NP4.js";
import "/build/_shared/chunk-JPUJUZ7O.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  BsClockHistory
} from "/build/_shared/chunk-W6GYYNIT.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  HiFlag
} from "/build/_shared/chunk-IBV4GJWC.js";
import {
  GenIcon
} from "/build/_shared/chunk-L3QT7SD6.js";
import {
  t
} from "/build/_shared/chunk-TUGJO2L3.js";
import {
  Form,
  Link,
  Outlet,
  useFetcher,
  useLoaderData,
  useNavigate,
  useRevalidator,
  useSearchParams,
  useSubmit
} from "/build/_shared/chunk-OBXMDE47.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  Error500
} from "/build/_shared/chunk-XQ35TRLE.js";
import "/build/_shared/chunk-LFBH4RTF.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV9(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement2(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement2(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement2(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement2(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV9(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal2(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal2(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal2(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// src/app/routes/__main/projects.$projectId/board.tsx
var import_node = __toESM(require_node());

// src/app/ui/main/project/board/board.view.tsx
var import_react26 = __toESM(require_react());

// node_modules/.pnpm/remix-utils@5.3.0_@remix-run+react@1.19.0_@remix-run+server-runtime@1.19.0_react@18.2.0_typescript@4.9.5_zod@3.21.4/node_modules/remix-utils/browser/react/use-event-source.js
var import_react = __toESM(require_react());
function useEventSource(url, { event = "message", init } = {}) {
  const [data, setData] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    const eventSource = new EventSource(url, init);
    eventSource.addEventListener(event !== null && event !== void 0 ? event : "message", handler);
    setData(null);
    function handler(event2) {
      setData(event2.data || "UNKNOWN_EVENT_DATA");
    }
    return () => {
      eventSource.removeEventListener(event !== null && event !== void 0 ? event : "message", handler);
      eventSource.close();
    };
  }, [url, event, init]);
  return data;
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/core/DndContext.js
var import_react2 = __toESM(require_react(), 1);
var DndContext = (0, import_react2.createContext)({
  dragDropManager: void 0
});

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/core/DndProvider.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  var type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  var constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  var typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(false ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(false ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(false ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(false ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }
    if (typeof action.type === "undefined") {
      throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(false ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

// node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js
function invariant(condition, format, ...args) {
  if (isProduction()) {
    if (format === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    let error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
function isProduction() {
  return typeof process !== "undefined" && false;
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/js_utils.js
function get(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a, c) => a && a[c] ? a[c] : defaultValue || null,
    obj
  );
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function isObject(input) {
  return typeof input === "object";
}
function xor(itemsA, itemsB) {
  const map = /* @__PURE__ */ new Map();
  const insertItem = (item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  map.forEach((count, key) => {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t2) => itemsB.indexOf(t2) > -1
  );
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js
var INIT_COORDS = "dnd-core/INIT_COORDS";
var BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
var PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
var HOVER = "dnd-core/HOVER";
var DROP = "dnd-core/DROP";
var END_DRAG = "dnd-core/END_DRAG";

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js
var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag(sourceIds = [], options = {
    publishSource: true
  }) {
    const { publishSource = true, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options;
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants(sourceIds, monitor, registry);
    const sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2) {
        throw new Error("getSourceClientOffset must be defined");
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2);
      sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    const source = registry.getSource(sourceId);
    const item = source.beginDrag(monitor, sourceId);
    if (item == null) {
      return void 0;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    const itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
  sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    });
  }
  return target;
}
function createDrop(manager) {
  return function drop(options = {}) {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyInvariants2(monitor);
    const targetIds = getDroppableTargets(monitor);
    targetIds.forEach((targetId, index) => {
      const dropResult = determineDropResult(targetId, index, registry, monitor);
      const action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function verifyInvariants2(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  const target = registry.getTarget(targetId);
  let dropResult = target ? target.drop(monitor, targetId) : void 0;
  verifyDropResultType(dropResult);
  if (typeof dropResult === "undefined") {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult === "undefined" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/endDrag.js
function createEndDrag(manager) {
  return function endDrag() {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyIsDragging(monitor);
    const sourceId = monitor.getSourceId();
    if (sourceId != null) {
      const source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(
    (t2) => t2 === draggedItemType
  ) : targetType === draggedItemType;
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/hover.js
function createHover(manager) {
  return function hover(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    const targetIds = targetIdsArg.slice(0);
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    const draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    checkInvariants(targetIds, monitor, registry);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    const targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    const target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    const targetId = targetIds[i];
    const targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    const target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js
function createPublishDragSource(manager) {
  return function publishDragSource() {
    const monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
    return;
  };
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/index.js
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/DragDropManagerImpl.js
var DragDropManagerImpl = class {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const manager = this;
    const { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        const action = actionCreator.apply(manager, args);
        if (typeof action !== "undefined") {
          dispatch(action);
        }
      };
    }
    const actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      const action = actions[key];
      boundActions[key] = bindActionCreator(action);
      return boundActions;
    }, {});
  }
  dispatch(action) {
    this.store.dispatch(action);
  }
  constructor(store, monitor) {
    this.isSetUp = false;
    this.handleRefCountChange = () => {
      const shouldSetUp = this.store.getState().refCount > 0;
      if (this.backend) {
        if (shouldSetUp && !this.isSetUp) {
          this.backend.setup();
          this.isSetUp = true;
        } else if (!shouldSetUp && this.isSetUp) {
          this.backend.teardown();
          this.isSetUp = false;
        }
      }
    };
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }
};

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/coords.js
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  const { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  const { clientOffset, initialClientOffset } = state;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/dirtiness.js
var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === "undefined") {
    return true;
  }
  const commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js
var DragDropMonitorImpl = class {
  subscribeToStateChange(listener, options = {}) {
    const { handlerIds } = options;
    invariant(typeof listener === "function", "listener must be a function.");
    invariant(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId;
    const handleChange = () => {
      const state = this.store.getState();
      const currentStateId = state.stateId;
      try {
        const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant(typeof listener === "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset;
    const handleChange = () => {
      const nextState = this.store.getState().dragOffset;
      if (nextState === previousState) {
        return;
      }
      previousState = nextState;
      listener();
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (this.isDragging()) {
      return false;
    }
    return source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId) {
      return false;
    }
    const target = this.registry.getTarget(targetId);
    invariant(target, `Expected to find a valid target. targetId=${targetId}`);
    if (!this.isDragging() || this.didDrop()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId, true);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (!this.isDragging() || !this.isSourcePublic()) {
      return false;
    }
    const sourceType = this.registry.getSourceType(sourceId);
    const draggedItemType = this.getItemType();
    if (sourceType !== draggedItemType) {
      return false;
    }
    return source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: false
  }) {
    if (!targetId) {
      return false;
    }
    const { shallow } = options;
    if (!this.isDragging()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType)) {
      return false;
    }
    const targetIds = this.getTargetIds();
    if (!targetIds.length) {
      return false;
    }
    const index = targetIds.indexOf(targetId);
    if (shallow) {
      return index === targetIds.length - 1;
    } else {
      return index > -1;
    }
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
};

// node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/makeRequestCall.js
var scope = typeof globalThis !== "undefined" ? globalThis : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    const timeoutHandle = setTimeout(handleTimer, 0);
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer = new BrowserMutationObserver(callback);
  const node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
var makeRequestCall = typeof BrowserMutationObserver === "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  makeRequestCallFromMutationObserver
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  makeRequestCallFromTimer
);

// node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/AsapQueue.js
var AsapQueue = class {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(task) {
    const { queue: q, requestFlush } = this;
    if (!q.length) {
      requestFlush();
      this.flushing = true;
    }
    q[q.length] = task;
  }
  constructor() {
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = false;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      const { queue: q } = this;
      while (this.index < q.length) {
        const currentIndex = this.index;
        this.index++;
        q[currentIndex].call();
        if (this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++) {
            q[scan] = q[scan + this.index];
          }
          q.length -= this.index;
          this.index = 0;
        }
      }
      q.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    this.registerPendingError = (err) => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
    });
  }
};

// node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/RawTask.js
var RawTask = class {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
};

// node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/TaskFactory.js
var TaskFactory = class {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t2) => tasks[tasks.length] = t2
    );
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
};

// node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/asap.js
var asapQueue = new AsapQueue();
var taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/registry.js
var ADD_SOURCE = "dnd-core/ADD_SOURCE";
var ADD_TARGET = "dnd-core/ADD_TARGET";
var REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
var REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/contracts.js
function validateSourceContract(source) {
  invariant(typeof source.canDrag === "function", "Expected canDrag to be a function.");
  invariant(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
  invariant(typeof source.endDrag === "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop === "function", "Expected canDrop to be a function.");
  invariant(typeof target.hover === "function", "Expected hover to be a function.");
  invariant(typeof target.drop === "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t2) => validateType(t2, false)
    );
    return;
  }
  invariant(typeof type === "string" || typeof type === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2["SOURCE"] = "SOURCE";
  HandlerRole2["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js
function getNextHandlerId(role) {
  const id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map, searchValue) {
  const entries = map.entries();
  let isDone = false;
  do {
    const { done, value: [, value] } = entries.next();
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
var HandlerRegistryImpl = class {
  addSource(type, source) {
    validateType(type);
    validateSourceContract(source);
    const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    this.store.dispatch(addSource(sourceId));
    return sourceId;
  }
  addTarget(type, target) {
    validateType(type, true);
    validateTargetContract(target);
    const targetId = this.addHandler(HandlerRole.TARGET, type, target);
    this.store.dispatch(addTarget(targetId));
    return targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId, includePinned = false) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    const isPinned = includePinned && sourceId === this.pinnedSourceId;
    const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
    return source;
  }
  getTarget(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    return this.types.get(sourceId);
  }
  getTargetType(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.types.get(targetId);
  }
  isSourceId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant(this.getSource(sourceId), "Expected an existing source.");
    this.store.dispatch(removeSource(sourceId));
    asap(() => {
      this.dragSources.delete(sourceId);
      this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant(this.getTarget(targetId), "Expected an existing target.");
    this.store.dispatch(removeTarget(targetId));
    this.dropTargets.delete(targetId);
    this.types.delete(targetId);
  }
  pinSource(sourceId) {
    const source = this.getSource(sourceId);
    invariant(source, "Expected an existing source.");
    this.pinnedSourceId = sourceId;
    this.pinnedSource = source;
  }
  unpinSource() {
    invariant(this.pinnedSource, "No source is pinned at the time.");
    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    const id = getNextHandlerId(role);
    this.types.set(id, type);
    if (role === HandlerRole.SOURCE) {
      this.dragSources.set(id, handler);
    } else if (role === HandlerRole.TARGET) {
      this.dropTargets.set(id, handler);
    }
    return id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map();
    this.dragSources = /* @__PURE__ */ new Map();
    this.dropTargets = /* @__PURE__ */ new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }
};

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/equality.js
var strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js
function reduce(_state = NONE, action) {
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  const { targetIds = [], prevTargetIds = [] } = action.payload;
  const result = xor(targetIds, prevTargetIds);
  const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  }
  const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  const innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dragOffset.js
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    });
  }
  return target;
}
var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce2(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return _objectSpread3({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dragOperation.js
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    });
  }
  return target;
}
var initialState2 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function reduce3(state = initialState2, action) {
  const { payload } = action;
  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread4({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread4({}, state, {
        isSourcePublic: true
      });
    case HOVER:
      return _objectSpread4({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return _objectSpread4({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread4({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread4({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/refCount.js
function reduce4(state = 0, action) {
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/stateId.js
function reduce5(state = 0) {
  return state + 1;
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/index.js
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    });
  }
  return target;
}
function reduce6(state = {}, action) {
  return {
    dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread5({}, action.payload, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce2(state.dragOffset, action),
    refCount: reduce4(state.refCount, action),
    dragOperation: reduce3(state.dragOperation, action),
    stateId: reduce5(state.stateId)
  };
}

// node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/createDragDropManager.js
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = false) {
  const store = makeStoreInstance(debugMode);
  const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  const manager = new DragDropManagerImpl(store, monitor);
  const backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  const reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce6, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/core/DndProvider.js
var import_react3 = __toESM(require_react(), 1);
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var refCount = 0;
var INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = /* @__PURE__ */ (0, import_react3.memo)(function DndProvider2(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  const [manager, isGlobalInstance] = getDndContextValue(props);
  (0, import_react3.useEffect)(() => {
    if (isGlobalInstance) {
      const context = getGlobalContext();
      ++refCount;
      return () => {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
    return;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props) {
    const manager2 = {
      dragDropManager: props.manager
    };
    return [
      manager2,
      false
    ];
  }
  const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  const isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  const ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof globalThis !== "undefined" ? globalThis : window;
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollector.js
var import_fast_deep_equal = __toESM(require_fast_deep_equal(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var import_react4 = __toESM(require_react(), 1);
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react4.useLayoutEffect : import_react4.useEffect;

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollector.js
function useCollector(monitor, collect, onUpdate) {
  const [collected, setCollected] = (0, import_react5.useState)(
    () => collect(monitor)
  );
  const updateCollected = (0, import_react5.useCallback)(() => {
    const nextValue = collect(monitor);
    if (!(0, import_fast_deep_equal.default)(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  useIsomorphicLayoutEffect(updateCollected);
  return [
    collected,
    updateCollected
  ];
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useMonitorOutput.js
function useMonitorOutput(monitor, collect, onCollect) {
  const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    const handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [
        handlerId
      ]
    });
  }, [
    monitor,
    updateCollected
  ]);
  return collected;
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollectedProps.js
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useOptionalFactory.js
var import_react6 = __toESM(require_react(), 1);
function useOptionalFactory(arg, deps) {
  const memoDeps = [
    ...deps || []
  ];
  if (deps == null && typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return (0, import_react6.useMemo)(() => {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/connectors.js
var import_react7 = __toESM(require_react(), 1);
function useConnectDragSource(connector) {
  return (0, import_react7.useMemo)(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return (0, import_react7.useMemo)(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl = class {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingCanDrag = true;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = false;
    }
  }
  isDragging() {
    if (!this.sourceId) {
      return false;
    }
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingIsDragging = true;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = false;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js
var isCallingCanDrop = false;
var DropTargetMonitorImpl = class {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId) {
      return false;
    }
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      isCallingCanDrop = true;
      return this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = false;
    }
  }
  isOver(options) {
    if (!this.targetId) {
      return false;
    }
    return this.internalMonitor.isOverTarget(this.targetId, options);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/internals/registration.js
function registerTarget(type, target, manager) {
  const registry = manager.getRegistry();
  const targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}

// node_modules/.pnpm/@react-dnd+shallowequal@4.0.2/node_modules/@react-dnd/shallowequal/dist/index.js
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/internals/isRef.js
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, "current")
  );
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
var import_react8 = __toESM(require_react(), 1);
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  const displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!(0, import_react8.isValidElement)(elementOrNode)) {
      const node = elementOrNode;
      hook(node, options);
      return node;
    }
    const element = elementOrNode;
    throwIfCompositeComponentElement(element);
    const ref = options ? (node) => hook(node, options) : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  const wrappedHooks = {};
  Object.keys(hooks).forEach((key) => {
    const hook = hooks[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks[key];
    } else {
      const wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  });
  return wrappedHooks;
}
function setRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  const previousRef = element.ref;
  invariant(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return (0, import_react8.cloneElement)(element, {
      ref: newRef
    });
  } else {
    return (0, import_react8.cloneElement)(element, {
      ref: (node) => {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/internals/SourceConnector.js
var SourceConnector = class {
  receiveHandlerId(newHandlerId) {
    if (this.handlerId === newHandlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    const didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    const dragSource = this.dragSource;
    const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    if (didChange) {
      this.disconnectDragSource();
    }
    if (!this.handlerId) {
      return didChange;
    }
    if (!dragSource) {
      this.lastConnectedDragSource = dragSource;
      return didChange;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragSource = dragSource;
      this.lastConnectedDragSourceOptions = this.dragSourceOptions;
      this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
    }
    return didChange;
  }
  reconnectDragPreview(forceDidChange = false) {
    const dragPreview = this.dragPreview;
    const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange) {
      this.disconnectDragPreview();
    }
    if (!this.handlerId) {
      return;
    }
    if (!dragPreview) {
      this.lastConnectedDragPreview = dragPreview;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragPreview = dragPreview;
      this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
      this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    if (this.dragSourceUnsubscribe) {
      this.dragSourceUnsubscribe();
      this.dragSourceUnsubscribe = void 0;
    }
  }
  disconnectDragPreview() {
    if (this.dragPreviewUnsubscribe) {
      this.dragPreviewUnsubscribe();
      this.dragPreviewUnsubscribe = void 0;
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options) => {
        this.clearDragSource();
        this.dragSourceOptions = options || null;
        if (isRef(node)) {
          this.dragSourceRef = node;
        } else {
          this.dragSourceNode = node;
        }
        this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview();
        this.dragPreviewOptions = options || null;
        if (isRef(node)) {
          this.dragPreviewRef = node;
        } else {
          this.dragPreviewNode = node;
        }
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
};

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/internals/TargetConnector.js
var TargetConnector = class {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    if (didChange) {
      this.disconnectDropTarget();
    }
    const dropTarget = this.dropTarget;
    if (!this.handlerId) {
      return;
    }
    if (!dropTarget) {
      this.lastConnectedDropTarget = dropTarget;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDropTarget = dropTarget;
      this.lastConnectedDropTargetOptions = this.dropTargetOptions;
      this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
    }
  }
  receiveHandlerId(newHandlerId) {
    if (newHandlerId === this.handlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    if (this.unsubscribeDropTarget) {
      this.unsubscribeDropTarget();
      this.unsubscribeDropTarget = void 0;
    }
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null;
    this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options) => {
        this.clearDropTarget();
        this.dropTargetOptions = options;
        if (isRef(node)) {
          this.dropTargetRef = node;
        } else {
          this.dropTargetNode = node;
        }
        this.reconnect();
      }
    });
    this.handlerId = null;
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
};

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js
var import_react9 = __toESM(require_react(), 1);
function useDragDropManager() {
  const { dragDropManager } = (0, import_react9.useContext)(DndContext);
  invariant(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  const manager = useDragDropManager();
  const connector = (0, import_react10.useMemo)(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragSource();
  }, [
    connector,
    dragSourceOptions
  ]);
  useIsomorphicLayoutEffect(() => {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragPreview();
  }, [
    connector,
    dragPreviewOptions
  ]);
  return connector;
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js
var import_react11 = __toESM(require_react(), 1);
function useDragSourceMonitor() {
  const manager = useDragDropManager();
  return (0, import_react11.useMemo)(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
var DragSourceImpl = class {
  beginDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    let result = null;
    if (typeof spec.item === "object") {
      result = spec.item;
    } else if (typeof spec.item === "function") {
      result = spec.item(monitor);
    } else {
      result = {};
    }
    return result !== null && result !== void 0 ? result : null;
  }
  canDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (typeof spec.canDrag === "boolean") {
      return spec.canDrag;
    } else if (typeof spec.canDrag === "function") {
      return spec.canDrag(monitor);
    } else {
      return true;
    }
  }
  isDragging(globalMonitor, target) {
    const spec = this.spec;
    const monitor = this.monitor;
    const { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    const connector = this.connector;
    const { end } = spec;
    if (end) {
      end(monitor.getItem(), monitor);
    }
    connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
};

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
function useDragSource(spec, monitor, connector) {
  const handler = (0, import_react12.useMemo)(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  (0, import_react12.useEffect)(() => {
    handler.spec = spec;
  }, [
    spec
  ]);
  return handler;
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js
var import_react13 = __toESM(require_react(), 1);
function useDragType(spec) {
  return (0, import_react13.useMemo)(() => {
    const result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [
    spec
  ]);
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const handler = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      const [handlerId, unregister] = registerSource(itemType, handler, manager);
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
    return;
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js
function useDrag(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
  const monitor = useDragSourceMonitor();
  const connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/connectors.js
var import_react14 = __toESM(require_react(), 1);
function useConnectDropTarget(connector) {
  return (0, import_react14.useMemo)(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js
var import_react15 = __toESM(require_react(), 1);
function useDropTargetConnector(options) {
  const manager = useDragDropManager();
  const connector = (0, import_react15.useMemo)(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return () => connector.disconnectDropTarget();
  }, [
    options
  ]);
  return connector;
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js
var import_react16 = __toESM(require_react(), 1);
function useDropTargetMonitor() {
  const manager = useDragDropManager();
  return (0, import_react16.useMemo)(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js
var import_react17 = __toESM(require_react(), 1);
function useAccept(spec) {
  const { accept } = spec;
  return (0, import_react17.useMemo)(() => {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [
      accept
    ];
  }, [
    accept
  ]);
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
var import_react18 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
var DropTargetImpl = class {
  canDrop() {
    const spec = this.spec;
    const monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
  }
  hover() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.hover) {
      spec.hover(monitor.getItem(), monitor);
    }
  }
  drop() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.drop) {
      return spec.drop(monitor.getItem(), monitor);
    }
    return;
  }
  constructor(spec, monitor) {
    this.spec = spec;
    this.monitor = monitor;
  }
};

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
function useDropTarget(spec, monitor) {
  const dropTarget = (0, import_react18.useMemo)(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  (0, import_react18.useEffect)(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]);
  return dropTarget;
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js
function useRegisteredDropTarget(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dropTarget = useDropTarget(spec, monitor);
  const accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}

// node_modules/.pnpm/react-dnd@16.0.1_@types+node@18.16.19_@types+react@18.2.15_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js
function useDrop(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  const monitor = useDropTargetMonitor();
  const connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
function memoize(fn) {
  let result = null;
  const memoized = () => {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
function without2(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  const set = /* @__PURE__ */ new Set();
  const insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  set.forEach(
    (key) => result.push(key)
  );
  return result;
}

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js
var EnterLeaveCounter = class {
  enter(enteringNode) {
    const previousLength = this.entered.length;
    const isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]);
    return previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    const previousLength = this.entered.length;
    this.entered = without2(this.entered.filter(this.isNodeInDocument), leavingNode);
    return previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }
};

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
var NativeDragSource = class {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: true,
        enumerable: true,
        get() {
          console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
          return null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      const newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        const propertyFn = this.config.exposeProperties[property];
        if (propertyFn != null) {
          newProperties[property] = {
            value: propertyFn(dataTransfer, this.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        }
      });
      Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return true;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
};

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_exports = {};
__export(NativeTypes_exports, {
  FILE: () => FILE,
  HTML: () => HTML,
  TEXT: () => TEXT,
  URL: () => URL2
});
var FILE = "__NATIVE_FILE__";
var URL2 = "__NATIVE_URL__";
var TEXT = "__NATIVE_TEXT__";
var HTML = "__NATIVE_HTML__";

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  const result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result != null ? result : defaultValue;
}

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js
var nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL2]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split("\n"),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js
function createNativeDragSource(type, dataTransfer) {
  const config = nativeTypesConfig[type];
  if (!config) {
    throw new Error(`native type ${type} has no configuration`);
  }
  const result = new NativeDragSource(config);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }
  const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    const typeConfig = nativeTypesConfig[nativeItemType];
    if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
      return false;
    }
    return typeConfig.matchesTypes.some(
      (t2) => dataTransferTypes.indexOf(t2) > -1
    );
  })[0] || null;
}

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/BrowserDetector.js
var isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
);
var isSafari = memoize(
  () => Boolean(window.safari)
);

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
var MonotonicInterpolant = class {
  interpolate(x) {
    const { xs, ys, c1s, c2s, c3s } = this;
    let i = xs.length - 1;
    if (x === xs[i]) {
      return ys[i];
    }
    let low = 0;
    let high = c3s.length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor(0.5 * (low + high));
      const xHere = xs[mid];
      if (xHere < x) {
        low = mid + 1;
      } else if (xHere > x) {
        high = mid - 1;
      } else {
        return ys[mid];
      }
    }
    i = Math.max(0, high);
    const diff = x - xs[i];
    const diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    const { length } = xs;
    const indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    const dys = [];
    const dxs = [];
    const ms = [];
    let dx;
    let dy;
    for (let i1 = 0; i1 < length - 1; i1++) {
      dx = xs[i1 + 1] - xs[i1];
      dy = ys[i1 + 1] - ys[i1];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    }
    const c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      const m2 = ms[i2];
      const mNext = ms[i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[i2];
        const dxNext = dxs[i2 + 1];
        const common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    const c2s = [];
    const c3s = [];
    let m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      const c1 = c1s[i3];
      const invDx = 1 / dxs[i3];
      const common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx);
      c3s.push(common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
};

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/OffsetUtils.js
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return null;
  }
  const { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  const isImage = isImageNode(dragPreview);
  const dragPreviewNode = isImage ? sourceNode : dragPreview;
  const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  const offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  const { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode;
  const { anchorX, anchorY } = anchorPoint;
  const { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
  const calculateYOffset = () => {
    const interpolantY = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      offsetFromDragPreview.y,
      // Align at the center
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      // Dock to the bottom
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]);
    let y = interpolantY.interpolate(anchorY);
    if (isSafari() && isImage) {
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y;
  };
  const calculateXOffset = () => {
    const interpolantX = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the left
      offsetFromDragPreview.x,
      // Align at the center
      offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
      // Dock to the right
      offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
    ]);
    return interpolantX.interpolate(anchorX);
  };
  const { offsetX, offsetY } = offsetPoint;
  const isManualOffsetX = offsetX === 0 || offsetX;
  const isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/OptionsReader.js
var OptionsReader = class {
  get window() {
    if (this.globalContext) {
      return this.globalContext;
    } else if (typeof window !== "undefined") {
      return window;
    }
    return void 0;
  }
  get document() {
    var ref;
    if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
      return this.globalContext.document;
    } else if (this.window) {
      return this.window.document;
    } else {
      return void 0;
    }
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null;
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
};

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty6(target, key, source[key]);
    });
  }
  return target;
}
var HTML5BackendImpl = class {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    if (root.__isReactDndBackendSetUp) {
      throw new Error("Cannot have two HTML5 backends at the same time.");
    }
    root.__isReactDndBackendSetUp = true;
    this.addEventListeners(root);
  }
  teardown() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    root.__isReactDndBackendSetUp = false;
    this.removeEventListeners(this.rootElement);
    this.clearCurrentDragSourceNode();
    if (this.asyncEndDragFrameId) {
      var ref;
      (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    this.sourcePreviewNodeOptions.set(sourceId, options);
    this.sourcePreviewNodes.set(sourceId, node);
    return () => {
      this.sourcePreviewNodes.delete(sourceId);
      this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node);
    this.sourceNodeOptions.set(sourceId, options);
    const handleDragStart = (e) => this.handleDragStart(e, sourceId);
    const handleSelectStart = (e) => this.handleSelectStart(e);
    node.setAttribute("draggable", "true");
    node.addEventListener("dragstart", handleDragStart);
    node.addEventListener("selectstart", handleSelectStart);
    return () => {
      this.sourceNodes.delete(sourceId);
      this.sourceNodeOptions.delete(sourceId);
      node.removeEventListener("dragstart", handleDragStart);
      node.removeEventListener("selectstart", handleSelectStart);
      node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    const handleDragEnter = (e) => this.handleDragEnter(e, targetId);
    const handleDragOver = (e) => this.handleDragOver(e, targetId);
    const handleDrop = (e) => this.handleDrop(e, targetId);
    node.addEventListener("dragenter", handleDragEnter);
    node.addEventListener("dragover", handleDragOver);
    node.addEventListener("drop", handleDrop);
    return () => {
      node.removeEventListener("dragenter", handleDragEnter);
      node.removeEventListener("dragover", handleDragOver);
      node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    if (!target.addEventListener) {
      return;
    }
    target.addEventListener("dragstart", this.handleTopDragStart);
    target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.addEventListener("dragend", this.handleTopDragEndCapture, true);
    target.addEventListener("dragenter", this.handleTopDragEnter);
    target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.addEventListener("dragover", this.handleTopDragOver);
    target.addEventListener("dragover", this.handleTopDragOverCapture, true);
    target.addEventListener("drop", this.handleTopDrop);
    target.addEventListener("drop", this.handleTopDropCapture, true);
  }
  removeEventListeners(target) {
    if (!target.removeEventListener) {
      return;
    }
    target.removeEventListener("dragstart", this.handleTopDragStart);
    target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
    target.removeEventListener("dragenter", this.handleTopDragEnter);
    target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.removeEventListener("dragover", this.handleTopDragOver);
    target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
    target.removeEventListener("drop", this.handleTopDrop);
    target.removeEventListener("drop", this.handleTopDropCapture, true);
  }
  getCurrentSourceNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread6({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    if (this.isDraggingNativeItem()) {
      return "copy";
    }
    return this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread6({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: false
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    const itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes_exports).some(
      (key) => NativeTypes_exports[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode();
    this.currentNativeSource = createNativeDragSource(type, dataTransfer);
    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
    this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode();
    this.currentDragSourceNode = node;
    const MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      this.currentDragSourceNode = null;
      if (this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
        this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
      }
      this.mouseMoveTimeoutTimer = null;
      return true;
    }
    return false;
  }
  handleDragStart(e, sourceId) {
    if (e.defaultPrevented) {
      return;
    }
    if (!this.dragStartSourceIds) {
      this.dragStartSourceIds = [];
    }
    this.dragStartSourceIds.unshift(sourceId);
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    if (this.dragOverTargetIds === null) {
      this.dragOverTargetIds = [];
    }
    this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map();
    this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map();
    this.sourceNodes = /* @__PURE__ */ new Map();
    this.sourceNodeOptions = /* @__PURE__ */ new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;
    this.lastClientOffset = null;
    this.hoverRafId = null;
    this.getSourceClientOffset = (sourceId) => {
      const source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    };
    this.endDragNativeItem = () => {
      if (!this.isDraggingNativeItem()) {
        return;
      }
      this.actions.endDrag();
      if (this.currentNativeHandle) {
        this.registry.removeSource(this.currentNativeHandle);
      }
      this.currentNativeHandle = null;
      this.currentNativeSource = null;
    };
    this.isNodeInDocument = (node) => {
      return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
    };
    this.endDragIfSourceWasRemovedFromDOM = () => {
      const node = this.currentDragSourceNode;
      if (node == null || this.isNodeInDocument(node)) {
        return;
      }
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.scheduleHover = (dragOverTargetIds) => {
      if (this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        this.hoverRafId = requestAnimationFrame(() => {
          if (this.monitor.isDragging()) {
            this.actions.hover(dragOverTargetIds || [], {
              clientOffset: this.lastClientOffset
            });
          }
          this.hoverRafId = null;
        });
      }
    };
    this.cancelHover = () => {
      if (this.hoverRafId !== null && typeof cancelAnimationFrame !== "undefined") {
        cancelAnimationFrame(this.hoverRafId);
        this.hoverRafId = null;
      }
    };
    this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode();
      this.dragStartSourceIds = [];
    };
    this.handleTopDragStart = (e) => {
      if (e.defaultPrevented) {
        return;
      }
      const { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      const clientOffset = getEventClientOffset(e);
      if (this.monitor.isDragging()) {
        this.actions.endDrag();
        this.cancelHover();
      }
      this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === "function") {
          const sourceId = this.monitor.getSourceId();
          const sourceNode = this.sourceNodes.get(sourceId);
          const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            const { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions();
            const anchorPoint = {
              anchorX,
              anchorY
            };
            const offsetPoint = {
              offsetX,
              offsetY
            };
            const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData("application/json", {});
        } catch (err) {
        }
        this.setCurrentDragSourceNode(e.target);
        const { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        if (!captureDraggingState) {
          setTimeout(
            () => this.actions.publishDragSource(),
            0
          );
        } else {
          this.actions.publishDragSource();
        }
      } else if (nativeType) {
        this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) {
        return;
      } else {
        e.preventDefault();
      }
    };
    this.handleTopDragEndCapture = () => {
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleTopDragEnterCapture = (e) => {
      this.dragEnterTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
      const isFirstEnter = this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || this.monitor.isDragging()) {
        return;
      }
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (nativeType) {
        this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };
    this.handleTopDragEnter = (e) => {
      const { dragEnterTargetIds } = this;
      this.dragEnterTargetIds = [];
      if (!this.monitor.isDragging()) {
        return;
      }
      this.altKeyPressed = e.altKey;
      if (dragEnterTargetIds.length > 0) {
        this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }
      const canDrop = dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      }
    };
    this.handleTopDragOverCapture = (e) => {
      this.dragOverTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
    };
    this.handleTopDragOver = (e) => {
      const { dragOverTargetIds } = this;
      this.dragOverTargetIds = [];
      if (!this.monitor.isDragging()) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
        return;
      }
      this.altKeyPressed = e.altKey;
      this.lastClientOffset = getEventClientOffset(e);
      this.scheduleHover(dragOverTargetIds);
      const canDrop = (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      } else if (this.isDraggingNativeItem()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
      }
    };
    this.handleTopDragLeaveCapture = (e) => {
      if (this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      const isLastLeave = this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (this.isDraggingNativeItem()) {
        setTimeout(
          () => this.endDragNativeItem(),
          0
        );
      }
      this.cancelHover();
    };
    this.handleTopDropCapture = (e) => {
      this.dropTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault();
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      } else if (matchNativeItemType(e.dataTransfer)) {
        e.preventDefault();
      }
      this.enterLeaveCounter.reset();
    };
    this.handleTopDrop = (e) => {
      const { dropTargetIds } = this;
      this.dropTargetIds = [];
      this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });
      this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      });
      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      } else if (this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleSelectStart = (e) => {
      const target = e.target;
      if (typeof target.dragDrop !== "function") {
        return;
      }
      if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      e.preventDefault();
      target.dragDrop();
    };
    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
};

// node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/index.js
var HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/bi/index.esm.js
function BiSearch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" } }] })(props);
}

// src/app/ui/main/project/board/search.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Search = () => {
  const { search, setSearch } = useProjectStore();
  const clearSearch = () => setSearch("");
  const renderIcon = () => {
    return search.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchIcon, {}, void 0, false, {
      fileName: "src/app/ui/main/project/board/search.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClearIcon, { onClick: clearSearch }, void 0, false, {
      fileName: "src/app/ui/main/project/board/search.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-fit", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        type: "text",
        name: "search",
        value: search,
        placeholder: "Filter issues",
        onChange: handleChange,
        className: t(
          "h-[40px] w-[120px] rounded border-none bg-background-input py-2 hover:bg-background-input-hovered",
          "border-1 box-border pl-2 pr-8 outline outline-2 outline-border-input duration-200 ease-in-out",
          "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
          "placeholder:duration-200 placeholder:ease-in-out focus:w-[190px]",
          "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
        )
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/board/search.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute right-0 top-1/2 -translate-y-1/2 px-2", children: renderIcon() }, void 0, false, {
      fileName: "src/app/ui/main/project/board/search.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/search.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};
var iconBaseClass = t(
  "flex border-none justify-center items-center font-icon z-10"
);
var SearchIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: iconBaseClass, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BiSearch, { size: 16 }, void 0, false, {
  fileName: "src/app/ui/main/project/board/search.tsx",
  lineNumber: 52,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/ui/main/project/board/search.tsx",
  lineNumber: 51,
  columnNumber: 3
}, this);
var ClearIcon = ({ onClick }) => (
  // onMouseDown is needed because blur (unfocus) happens
  // before 'click' event, but not before 'onMouseDown'
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "button",
    {
      onMouseDown: onClick,
      className: t(
        iconBaseClass,
        "cursor-pointer rounded hover:bg-background-neutral"
      ),
      "aria-label": "Clear search",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IoCloseOutline, { size: 16 }, void 0, false, {
        fileName: "src/app/ui/main/project/board/search.tsx",
        lineNumber: 67,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "src/app/ui/main/project/board/search.tsx",
      lineNumber: 59,
      columnNumber: 3
    },
    this
  )
);

// node_modules/.pnpm/@radix-ui+react-scroll-area@1.0.4_@types+react-dom@18.2.7_@types+react@18.2.15_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var import_react19 = __toESM(require_react(), 1);
function $6c2e24571c90391f$export$3e6543de14f8614f(initialState3, machine) {
  return (0, import_react19.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState3);
}
var $57acba87d6e25586$var$SCROLL_AREA_NAME = "ScrollArea";
var [$57acba87d6e25586$var$createScrollAreaContext, $57acba87d6e25586$export$488468afe3a6f2b1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($57acba87d6e25586$var$SCROLL_AREA_NAME);
var [$57acba87d6e25586$var$ScrollAreaProvider, $57acba87d6e25586$var$useScrollAreaContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLL_AREA_NAME);
var $57acba87d6e25586$export$ccf8d8d7bbf3c2cc = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
  const [scrollArea, setScrollArea] = (0, import_react19.useState)(null);
  const [viewport, setViewport] = (0, import_react19.useState)(null);
  const [content, setContent] = (0, import_react19.useState)(null);
  const [scrollbarX, setScrollbarX] = (0, import_react19.useState)(null);
  const [scrollbarY, setScrollbarY] = (0, import_react19.useState)(null);
  const [cornerWidth, setCornerWidth] = (0, import_react19.useState)(0);
  const [cornerHeight, setCornerHeight] = (0, import_react19.useState)(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = (0, import_react19.useState)(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = (0, import_react19.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setScrollArea(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  return /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaProvider, {
    scope: __scopeScrollArea,
    type,
    dir: direction,
    scrollHideDelay,
    scrollArea,
    viewport,
    onViewportChange: setViewport,
    content,
    onContentChange: setContent,
    scrollbarX,
    onScrollbarXChange: setScrollbarX,
    scrollbarXEnabled,
    onScrollbarXEnabledChange: setScrollbarXEnabled,
    scrollbarY,
    onScrollbarYChange: setScrollbarY,
    scrollbarYEnabled,
    onScrollbarYEnabledChange: setScrollbarYEnabled,
    onCornerWidthChange: setCornerWidth,
    onCornerHeightChange: setCornerHeight
  }, /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: direction
  }, scrollAreaProps, {
    ref: composedRefs,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
      ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
      ...props.style
    }
  })));
});
var $57acba87d6e25586$var$VIEWPORT_NAME = "ScrollAreaViewport";
var $57acba87d6e25586$export$a21cbf9f11fca853 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, children, ...viewportProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$VIEWPORT_NAME, __scopeScrollArea);
  const ref = (0, import_react19.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onViewportChange);
  return /* @__PURE__ */ (0, import_react19.createElement)(import_react19.Fragment, null, /* @__PURE__ */ (0, import_react19.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
    }
  }), /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-radix-scroll-area-viewport": ""
  }, viewportProps, {
    ref: composedRefs,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
      ...props.style
    }
  }), /* @__PURE__ */ (0, import_react19.createElement)("div", {
    ref: context.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, children)));
});
var $57acba87d6e25586$var$SCROLLBAR_NAME = "ScrollAreaScrollbar";
var $57acba87d6e25586$export$2fabd85d0eba3c57 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
  const isHorizontal = props.orientation === "horizontal";
  (0, import_react19.useEffect)(() => {
    isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
    return () => {
      isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
    };
  }, [
    isHorizontal,
    onScrollbarXEnabledChange,
    onScrollbarYEnabledChange
  ]);
  return context.type === "hover" ? /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarHover, _extends({}, scrollbarProps, {
    ref: forwardedRef,
    forceMount
  })) : context.type === "scroll" ? /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarScroll, _extends({}, scrollbarProps, {
    ref: forwardedRef,
    forceMount
  })) : context.type === "auto" ? /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, _extends({}, scrollbarProps, {
    ref: forwardedRef,
    forceMount
  })) : context.type === "always" ? /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({}, scrollbarProps, {
    ref: forwardedRef
  })) : null;
});
var $57acba87d6e25586$var$ScrollAreaScrollbarHover = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = (0, import_react19.useState)(false);
  (0, import_react19.useEffect)(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(
          () => setVisible(false),
          context.scrollHideDelay
        );
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [
    context.scrollArea,
    context.scrollHideDelay
  ]);
  return /* @__PURE__ */ (0, import_react19.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || visible
  }, /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, _extends({
    "data-state": visible ? "visible" : "hidden"
  }, scrollbarProps, {
    ref: forwardedRef
  })));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarScroll = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(
    () => send("SCROLL_END"),
    100
  );
  const [state, send] = $6c2e24571c90391f$export$3e6543de14f8614f("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  (0, import_react19.useEffect)(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(
        () => send("HIDE"),
        context.scrollHideDelay
      );
      return () => window.clearTimeout(hideTimer);
    }
  }, [
    state,
    context.scrollHideDelay,
    send
  ]);
  (0, import_react19.useEffect)(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
  }, [
    context.viewport,
    isHorizontal,
    send,
    debounceScrollEnd
  ]);
  return /* @__PURE__ */ (0, import_react19.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || state !== "hidden"
  }, /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({
    "data-state": state === "hidden" ? "hidden" : "visible"
  }, scrollbarProps, {
    ref: forwardedRef,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onPointerEnter,
      () => send("POINTER_ENTER")
    ),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onPointerLeave,
      () => send("POINTER_LEAVE")
    )
  })));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarAuto = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = (0, import_react19.useState)(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = $57acba87d6e25586$var$useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  $57acba87d6e25586$var$useResizeObserver(context.viewport, handleResize);
  $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ (0, import_react19.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || visible
  }, /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({
    "data-state": visible ? "visible" : "hidden"
  }, scrollbarProps, {
    ref: forwardedRef
  })));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarVisible = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = (0, import_react19.useRef)(null);
  const pointerOffsetRef = (0, import_react19.useRef)(0);
  const [sizes, setSizes] = (0, import_react19.useState)({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  });
  const thumbRatio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal")
    return /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarX, _extends({}, commonProps, {
      ref: forwardedRef,
      onThumbPositionChange: () => {
        if (context.viewport && thumbRef.current) {
          const scrollPos = context.viewport.scrollLeft;
          const offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
          thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
        }
      },
      onWheelScroll: (scrollPos) => {
        if (context.viewport)
          context.viewport.scrollLeft = scrollPos;
      },
      onDragScroll: (pointerPos) => {
        if (context.viewport)
          context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
      }
    }));
  if (orientation === "vertical")
    return /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarY, _extends({}, commonProps, {
      ref: forwardedRef,
      onThumbPositionChange: () => {
        if (context.viewport && thumbRef.current) {
          const scrollPos = context.viewport.scrollTop;
          const offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes);
          thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
      },
      onWheelScroll: (scrollPos) => {
        if (context.viewport)
          context.viewport.scrollTop = scrollPos;
      },
      onDragScroll: (pointerPos) => {
        if (context.viewport)
          context.viewport.scrollTop = getScrollPosition(pointerPos);
      }
    }));
  return null;
});
var $57acba87d6e25586$var$ScrollAreaScrollbarX = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = (0, import_react19.useState)();
  const ref = (0, import_react19.useRef)(null);
  const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarXChange);
  (0, import_react19.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [
    ref
  ]);
  return /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, _extends({
    "data-orientation": "horizontal"
  }, scrollbarProps, {
    ref: composeRefs,
    sizes,
    style: {
      bottom: 0,
      left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: $57acba87d6e25586$var$getThumbSize(sizes) + "px",
      ...props.style
    },
    onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
    onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
    onWheelScroll: (event, maxScrollPos) => {
      if (context.viewport) {
        const scrollPos = context.viewport.scrollLeft + event.deltaX;
        props.onWheelScroll(scrollPos);
        if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos))
          event.preventDefault();
      }
    },
    onResize: () => {
      if (ref.current && context.viewport && computedStyle)
        onSizesChange({
          content: context.viewport.scrollWidth,
          viewport: context.viewport.offsetWidth,
          scrollbar: {
            size: ref.current.clientWidth,
            paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingLeft),
            paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingRight)
          }
        });
    }
  }));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarY = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = (0, import_react19.useState)();
  const ref = (0, import_react19.useRef)(null);
  const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarYChange);
  (0, import_react19.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [
    ref
  ]);
  return /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, _extends({
    "data-orientation": "vertical"
  }, scrollbarProps, {
    ref: composeRefs,
    sizes,
    style: {
      top: 0,
      right: context.dir === "ltr" ? 0 : void 0,
      left: context.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: $57acba87d6e25586$var$getThumbSize(sizes) + "px",
      ...props.style
    },
    onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
    onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
    onWheelScroll: (event, maxScrollPos) => {
      if (context.viewport) {
        const scrollPos = context.viewport.scrollTop + event.deltaY;
        props.onWheelScroll(scrollPos);
        if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos))
          event.preventDefault();
      }
    },
    onResize: () => {
      if (ref.current && context.viewport && computedStyle)
        onSizesChange({
          content: context.viewport.scrollHeight,
          viewport: context.viewport.offsetHeight,
          scrollbar: {
            size: ref.current.clientHeight,
            paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingTop),
            paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingBottom)
          }
        });
    }
  }));
});
var [$57acba87d6e25586$var$ScrollbarProvider, $57acba87d6e25586$var$useScrollbarContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME);
var $57acba87d6e25586$var$ScrollAreaScrollbarImpl = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = (0, import_react19.useState)(null);
  const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setScrollbar(node)
  );
  const rectRef = (0, import_react19.useRef)(null);
  const prevWebkitUserSelectRef = (0, import_react19.useRef)("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onWheelScroll);
  const handleThumbPositionChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPositionChange);
  const handleResize = $57acba87d6e25586$var$useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({
        x,
        y
      });
    }
  }
  (0, import_react19.useEffect)(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar === null || scrollbar === void 0 ? void 0 : scrollbar.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, {
      passive: false
    });
    return () => document.removeEventListener("wheel", handleWheel, {
      passive: false
    });
  }, [
    viewport,
    scrollbar,
    maxScrollPos,
    handleWheelScroll
  ]);
  (0, import_react19.useEffect)(handleThumbPositionChange, [
    sizes,
    handleThumbPositionChange
  ]);
  $57acba87d6e25586$var$useResizeObserver(scrollbar, handleResize);
  $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollbarProvider, {
    scope: __scopeScrollArea,
    scrollbar,
    hasThumb,
    onThumbChange: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbChange),
    onThumbPointerUp: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerUp),
    onThumbPositionChange: handleThumbPositionChange,
    onThumbPointerDown: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerDown)
  }, /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, scrollbarProps, {
    ref: composeRefs,
    style: {
      position: "absolute",
      ...scrollbarProps.style
    },
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      const mainPointer = 0;
      if (event.button === mainPointer) {
        const element = event.target;
        element.setPointerCapture(event.pointerId);
        rectRef.current = scrollbar.getBoundingClientRect();
        prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
        document.body.style.webkitUserSelect = "none";
        handleDragScroll(event);
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, handleDragScroll),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      const element = event.target;
      if (element.hasPointerCapture(event.pointerId))
        element.releasePointerCapture(event.pointerId);
      document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
      rectRef.current = null;
    })
  })));
});
var $57acba87d6e25586$var$THUMB_NAME = "ScrollAreaThumb";
var $57acba87d6e25586$export$9fba1154677d7cd2 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...thumbProps } = props;
  const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, props.__scopeScrollArea);
  return /* @__PURE__ */ (0, import_react19.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || scrollbarContext.hasThumb
  }, /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaThumbImpl, _extends({
    ref: forwardedRef
  }, thumbProps)));
});
var $57acba87d6e25586$var$ScrollAreaThumbImpl = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, style, ...thumbProps } = props;
  const scrollAreaContext = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
  const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => scrollbarContext.onThumbChange(node)
  );
  const removeUnlinkedScrollListenerRef = (0, import_react19.useRef)();
  const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = void 0;
    }
  }, 100);
  (0, import_react19.useEffect)(() => {
    const viewport = scrollAreaContext.viewport;
    if (viewport) {
      const handleScroll = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = $57acba87d6e25586$var$addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
  }, [
    scrollAreaContext.viewport,
    debounceScrollEnd,
    onThumbPositionChange
  ]);
  return /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": scrollbarContext.hasThumb ? "visible" : "hidden"
  }, thumbProps, {
    ref: composedRef,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...style
    },
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, (event) => {
      const thumb = event.target;
      const thumbRect = thumb.getBoundingClientRect();
      const x = event.clientX - thumbRect.left;
      const y = event.clientY - thumbRect.top;
      scrollbarContext.onThumbPointerDown({
        x,
        y
      });
    }),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, scrollbarContext.onThumbPointerUp)
  }));
});
var $57acba87d6e25586$var$CORNER_NAME = "ScrollAreaCorner";
var $57acba87d6e25586$export$56969d565df7cc4b = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, props.__scopeScrollArea);
  const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
  const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ (0, import_react19.createElement)($57acba87d6e25586$var$ScrollAreaCornerImpl, _extends({}, props, {
    ref: forwardedRef
  })) : null;
});
var $57acba87d6e25586$var$ScrollAreaCornerImpl = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, __scopeScrollArea);
  const [width1, setWidth] = (0, import_react19.useState)(0);
  const [height1, setHeight] = (0, import_react19.useState)(0);
  const hasSize = Boolean(width1 && height1);
  $57acba87d6e25586$var$useResizeObserver(context.scrollbarX, () => {
    var _context$scrollbarX;
    const height = ((_context$scrollbarX = context.scrollbarX) === null || _context$scrollbarX === void 0 ? void 0 : _context$scrollbarX.offsetHeight) || 0;
    context.onCornerHeightChange(height);
    setHeight(height);
  });
  $57acba87d6e25586$var$useResizeObserver(context.scrollbarY, () => {
    var _context$scrollbarY;
    const width = ((_context$scrollbarY = context.scrollbarY) === null || _context$scrollbarY === void 0 ? void 0 : _context$scrollbarY.offsetWidth) || 0;
    context.onCornerWidthChange(width);
    setWidth(width);
  });
  return hasSize ? /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, cornerProps, {
    ref: forwardedRef,
    style: {
      width: width1,
      height: height1,
      position: "absolute",
      right: context.dir === "ltr" ? 0 : void 0,
      left: context.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...props.style
    }
  })) : null;
});
function $57acba87d6e25586$var$toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function $57acba87d6e25586$var$getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function $57acba87d6e25586$var$getThumbSize(sizes) {
  const ratio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [
    0,
    maxScrollPos
  ] : [
    maxScrollPos * -1,
    0
  ];
  const interpolate = $57acba87d6e25586$var$linearScale([
    minPointerPos,
    maxPointerPos
  ], scrollRange);
  return interpolate(pointerPos);
}
function $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [
    0,
    maxScrollPos
  ] : [
    maxScrollPos * -1,
    0
  ];
  const scrollWithoutMomentum = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(scrollPos, scrollClampRange);
  const interpolate = $57acba87d6e25586$var$linearScale([
    0,
    maxScrollPos
  ], [
    0,
    maxThumbPos
  ]);
  return interpolate(scrollWithoutMomentum);
}
function $57acba87d6e25586$var$linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var $57acba87d6e25586$var$addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = {
    left: node.scrollLeft,
    top: node.scrollTop
  };
  let rAF = 0;
  (function loop() {
    const position = {
      left: node.scrollLeft,
      top: node.scrollTop
    };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function $57acba87d6e25586$var$useDebounceCallback(callback, delay) {
  const handleCallback = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback);
  const debounceTimerRef = (0, import_react19.useRef)(0);
  (0, import_react19.useEffect)(
    () => () => window.clearTimeout(debounceTimerRef.current),
    []
  );
  return (0, import_react19.useCallback)(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [
    handleCallback,
    delay
  ]);
}
function $57acba87d6e25586$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
var $57acba87d6e25586$export$be92b6f5f03c0fe9 = $57acba87d6e25586$export$ccf8d8d7bbf3c2cc;
var $57acba87d6e25586$export$d5c6c08dc2d3ca7 = $57acba87d6e25586$export$a21cbf9f11fca853;
var $57acba87d6e25586$export$9a4e88b92edfce6b = $57acba87d6e25586$export$2fabd85d0eba3c57;
var $57acba87d6e25586$export$6521433ed15a34db = $57acba87d6e25586$export$9fba1154677d7cd2;
var $57acba87d6e25586$export$ac61190d9fc311a9 = $57acba87d6e25586$export$56969d565df7cc4b;

// src/app/components/scroll-area/scroll-area.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ScrollArea = ({
  className,
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  $57acba87d6e25586$export$be92b6f5f03c0fe9,
  {
    type: "hover",
    scrollHideDelay: 400,
    className: "h-full w-full overflow-y-scroll scrollbar-hide",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($57acba87d6e25586$export$d5c6c08dc2d3ca7, { className: t("h-full w-full", className), children }, void 0, false, {
        fileName: "src/app/components/scroll-area/scroll-area.tsx",
        lineNumber: 13,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        $57acba87d6e25586$export$9a4e88b92edfce6b,
        {
          orientation: "vertical",
          className: t(
            "flex w-2 touch-none select-none rounded-full bg-grey-400 duration-150 ease-out hover:bg-grey-600"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            $57acba87d6e25586$export$6521433ed15a34db,
            {
              className: t(
                "relative h-full flex-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-font-grey",
                "before:absolute before:top-1/2 before:left-1/2"
              )
            },
            void 0,
            false,
            {
              fileName: "src/app/components/scroll-area/scroll-area.tsx",
              lineNumber: 22,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "src/app/components/scroll-area/scroll-area.tsx",
          lineNumber: 16,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($57acba87d6e25586$export$ac61190d9fc311a9, {}, void 0, false, {
        fileName: "src/app/components/scroll-area/scroll-area.tsx",
        lineNumber: 29,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "src/app/components/scroll-area/scroll-area.tsx",
    lineNumber: 8,
    columnNumber: 3
  },
  this
);

// src/app/ui/main/project/board/avatar-list.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var AVATAR_SIZE = 40;
var MAX_DISPLAY_USERS = 4;
var UserAvatarList = ({ users }) => {
  const displayUsers = users.slice(0, MAX_DISPLAY_USERS);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-2 flex", children: [
    displayUsers.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: "z-10 -ml-[5px] rounded-full border-2 border-border bg-elevation-surface hover:z-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserAvatar, { ...user, size: AVATAR_SIZE, tooltip: true }, void 0, false, {
          fileName: "src/app/ui/main/project/board/avatar-list.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      },
      index,
      false,
      {
        fileName: "src/app/ui/main/project/board/avatar-list.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    )),
    users.length > MAX_DISPLAY_USERS && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MoreUsers, { users }, void 0, false, {
      fileName: "src/app/ui/main/project/board/avatar-list.tsx",
      lineNumber: 22,
      columnNumber: 44
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/avatar-list.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};
var MoreUsers = ({ users }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-elevation-surface", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($d08ef79370b62062$export$be92b6f5f03c0fe9, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    $d08ef79370b62062$export$41fb9f06171c75f4,
    {
      className: "-ml-[5px] box-content flex cursor-pointer items-center justify-center rounded-full border-2 border-border bg-background-neutral text-lg text-font hover:underline",
      style: {
        width: `${AVATAR_SIZE}px`,
        height: `${AVATAR_SIZE}px`
      },
      children: [
        users.length - MAX_DISPLAY_USERS,
        "+"
      ]
    },
    void 0,
    true,
    {
      fileName: "src/app/ui/main/project/board/avatar-list.tsx",
      lineNumber: 34,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($d08ef79370b62062$export$7c6e2c02157bb7d2, { className: "z-50 h-[400px] rounded-md bg-elevation-surface-overlay p-2 shadow-blue", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollArea, { className: "pr-4", children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      $d08ef79370b62062$export$6d08773d2e66f8f2,
      {
        className: "mb-1 flex items-center justify-start gap-3 rounded px-1 py-1 outline-none last:mb-0 focus:bg-background-neutral focus-visible:outline-none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserAvatar, { ...user, size: 44 }, void 0, false, {
            fileName: "src/app/ui/main/project/board/avatar-list.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: user.name }, void 0, false, {
            fileName: "src/app/ui/main/project/board/avatar-list.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this)
        ]
      },
      user.id,
      true,
      {
        fileName: "src/app/ui/main/project/board/avatar-list.tsx",
        lineNumber: 46,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/avatar-list.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($d08ef79370b62062$export$21b07c8f274aebd5, { className: "fill-elevation-surface-overlay" }, void 0, false, {
      fileName: "src/app/ui/main/project/board/avatar-list.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/avatar-list.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "src/app/ui/main/project/board/avatar-list.tsx",
  lineNumber: 33,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/ui/main/project/board/avatar-list.tsx",
  lineNumber: 32,
  columnNumber: 3
}, this);

// src/app/hooks/useSortBy.tsx
var useSortBy = () => {
  const [searchParams] = useSearchParams();
  const sortByParam = searchParams.get("sortBy");
  const sortBy = isValidSort(sortByParam) ? sortByParam : null;
  return sortBy;
};

// src/app/ui/main/project/board/select-sort.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var SelectSort = () => {
  const submit = useSubmit();
  const sortBy = useSortBy() || DEFAULT_SORT;
  const SortIcon = ({ sort }) => (
    // prettier-ignore
    sort === "priority" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HiFlag, { size: 16 }, void 0, false, {
      fileName: "src/app/ui/main/project/board/select-sort.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BsClockHistory, { size: 16 }, void 0, false, {
      fileName: "src/app/ui/main/project/board/select-sort.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  );
  const handleSubmit = (value) => {
    submit({ sortBy: value });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "get", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($cc7e05a45900e73f$export$be92b6f5f03c0fe9, { defaultValue: sortBy, onValueChange: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      $cc7e05a45900e73f$export$41fb9f06171c75f4,
      {
        className: "flex cursor-pointer items-center justify-center rounded border-none bg-background-brand-subtlest px-3 py-1.5 text-xs text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed",
        "aria-label": "Open sort issues select",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mr-2 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FaSortAmountDownAlt, { size: 14 }, void 0, false, {
            fileName: "src/app/ui/main/project/board/select-sort.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "src/app/ui/main/project/board/select-sort.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($cc7e05a45900e73f$export$4c8d1a57a761ef94, { children: [
            "Sort by ",
            sortBy
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/select-sort.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/project/board/select-sort.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($cc7e05a45900e73f$export$7c6e2c02157bb7d2, { className: "select-none rounded bg-elevation-surface-overlay p-1.5 shadow-blue", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($cc7e05a45900e73f$export$2f60d3ec9ad468f2, {}, void 0, false, {
        fileName: "src/app/ui/main/project/board/select-sort.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { children: sortList.map((sort, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        $cc7e05a45900e73f$export$6d08773d2e66f8f2,
        {
          value: sort.id,
          className: "flex cursor-pointer items-center justify-start gap-2 rounded border-none px-2 py-2 text-xs uppercase leading-none text-font-brand outline-none hover:bg-background-brand-subtlest-hovered focus:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SortIcon, { sort: sort.id }, void 0, false, {
              fileName: "src/app/ui/main/project/board/select-sort.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($cc7e05a45900e73f$export$d6e5bf9c43ea9319, { children: sort.label }, void 0, false, {
              fileName: "src/app/ui/main/project/board/select-sort.tsx",
              lineNumber: 45,
              columnNumber: 17
            }, this)
          ]
        },
        index,
        true,
        {
          fileName: "src/app/ui/main/project/board/select-sort.tsx",
          lineNumber: 39,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "src/app/ui/main/project/board/select-sort.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($cc7e05a45900e73f$export$bf1aedc3039c8d63, {}, void 0, false, {
        fileName: "src/app/ui/main/project/board/select-sort.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/board/select-sort.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/select-sort.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/ui/main/project/board/select-sort.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/category-column/category-column.tsx
var import_react24 = __toESM(require_react());

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/rx/index.esm.js
function RxValueNone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 15 15", "fill": "none" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.49985 0.877045C3.84216 0.877045 0.877014 3.84219 0.877014 7.49988C0.877014 9.1488 1.47963 10.657 2.47665 11.8162L1.64643 12.6464C1.45117 12.8417 1.45117 13.1583 1.64643 13.3535C1.8417 13.5488 2.15828 13.5488 2.35354 13.3535L3.18377 12.5233C4.34296 13.5202 5.85104 14.1227 7.49985 14.1227C11.1575 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 5.85107 13.5202 4.34299 12.5233 3.1838L13.3535 2.35354C13.5488 2.15827 13.5488 1.84169 13.3535 1.64643C13.1583 1.45117 12.8417 1.45117 12.6464 1.64643L11.8162 2.47668C10.657 1.47966 9.14877 0.877045 7.49985 0.877045ZM11.1422 3.15066C10.1567 2.32449 8.88639 1.82704 7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.88642 2.32446 10.1568 3.15063 11.1422L11.1422 3.15066ZM3.85776 11.8493C4.84317 12.6753 6.11343 13.1727 7.49985 13.1727C10.6328 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 6.11346 12.6753 4.8432 11.8493 3.85779L3.85776 11.8493Z", "fill": "currentColor" } }] })(props);
}

// src/app/ui/main/project/board/category-column/issue-card.tsx
var import_react22 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var IssueCard = ({
  issue,
  categoryId,
  isSubmitting,
  handleDragging
}) => {
  const issueIdPrefix = issue.id.split("-")[0];
  const sortBy = useSortBy();
  const issueLink = sortBy ? `issue/${issue.id}?sortBy=${sortBy}` : `issue/${issue.id}`;
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: DRAG_ISSUE_CARD,
      item: {
        issueId: issue.id,
        categoryId
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      })
    }),
    [issue.id]
  );
  (0, import_react22.useEffect)(() => {
    handleDragging(isDragging);
  }, [isDragging, handleDragging]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      ref: isSubmitting ? void 0 : dragRef,
      className: t(
        "flex w-full cursor-pointer flex-col rounded border-none bg-elevation-surface-raised p-3 text-left shadow-xs duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered active:bg-elevation-surface-raised-pressed",
        isSubmitting && "opacity-50"
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: issueLink, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "line-clamp-2 min-h-[48px] w-full", children: issue.name }, void 0, false, {
          fileName: "src/app/ui/main/project/board/category-column/issue-card.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TaskIcon, { size: 18 }, void 0, false, {
              fileName: "src/app/ui/main/project/board/category-column/issue-card.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "ml-1.5 text-2xs text-font-subtlest", children: issueIdPrefix }, void 0, false, {
              fileName: "src/app/ui/main/project/board/category-column/issue-card.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/category-column/issue-card.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PriorityIcon, { priority: issue.priority.id }, void 0, false, {
            fileName: "src/app/ui/main/project/board/category-column/issue-card.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/category-column/issue-card.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/ui/main/project/board/category-column/issue-card.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "src/app/ui/main/project/board/category-column/issue-card.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "src/app/ui/main/project/board/category-column/issue-card.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
};
var DRAG_ISSUE_CARD = "ISSUE_CARD";

// src/app/ui/main/project/board/category-column/category-column.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var CategoryColumn = (props) => {
  const {
    category,
    isDragging,
    submittingIssues,
    setSubmittingIssues,
    handleDragging
  } = props;
  const [columnHeight, setColumnHeight] = (0, import_react24.useState)(0);
  const columnRef = (0, import_react24.useRef)();
  const fetcher = useFetcher();
  const sortBy = useSortBy();
  const { search } = useProjectStore();
  const emptyCategory = category.issues.length === 0;
  const issueLink = sortBy ? `issue/new?category=${category.type}&sortBy=${sortBy}` : `issue/new?category=${category.type}`;
  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: DRAG_ISSUE_CARD,
      drop: (item) => updateIssueOnCardDrop(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
    [category.id]
  );
  const updateIssueOnCardDrop = (item) => {
    if (item.categoryId === category.id) {
      return;
    }
    fetcher.submit(
      {
        _action: "updateIssueCategory",
        issueId: item.issueId,
        categoryId: category.id
      },
      {
        method: "post"
      }
    );
    if (!submittingIssues.includes(item.issueId)) {
      setSubmittingIssues((prev) => [...prev, item.issueId]);
    }
  };
  const filteredIssues = () => category.issues.filter((issue) => {
    return issue.name.toLowerCase().includes(search);
  });
  (0, import_react24.useEffect)(() => {
    if (fetcher.data && fetcher.data.issueId) {
      const { issueId } = fetcher.data;
      setSubmittingIssues((prev) => prev.filter((id) => id !== issueId));
    }
  }, [fetcher, setSubmittingIssues]);
  (0, import_react24.useEffect)(() => {
    if (columnRef.current) {
      setColumnHeight(columnRef.current.offsetHeight);
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      ref: dropRef,
      className: "relative flex h-full w-[260px] max-w-[260px] flex-col rounded-md bg-elevation-surface-sunken",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "div",
          {
            className: t(
              "absolute z-50 box-border h-[100%] w-[100%] rounded p-1.5 duration-200",
              isDragging ? "visible" : "hidden",
              isOver || "bg-[#fff]/70"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "div",
              {
                className: t(
                  "relative h-full w-full rounded border-[3px]",
                  isDragging ? "visible" : "hidden",
                  isOver ? "border-solid border-border-success" : "flex items-center justify-center border-dashed border-border-brand"
                ),
                children: !isOver && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "rounded bg-elevation-surface px-1", children: "DROP HERE" }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
                  lineNumber: 105,
                  columnNumber: 13
                }, this)
              },
              void 0,
              false,
              {
                fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
                lineNumber: 95,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
            lineNumber: 88,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "sticky left-0 top-0 flex justify-between px-3 py-2.5 font-primary-light text-xs uppercase text-font-subtlest duration-200 ease-in-out", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: category.name }, void 0, false, {
              fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
              lineNumber: 112,
              columnNumber: 11
            }, this),
            !emptyCategory && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: [
              "( ",
              category.issues.length,
              " )"
            ] }, void 0, true, {
              fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
              lineNumber: 113,
              columnNumber: 30
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
            lineNumber: 111,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            Link,
            {
              to: issueLink,
              className: "text-font-subtlest/60 flex cursor-pointer rounded border-none p-1 hover:bg-background-neutral",
              "aria-label": `Add new ${category.name} issue`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AiOutlinePlus, { size: 24 }, void 0, false, {
                fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
                lineNumber: 120,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
              lineNumber: 115,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: columnRef, className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { height: `${columnHeight}px` }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollArea, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: "mt-1 max-w-[260px] px-3 pb-1", children: emptyCategory ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(EmptyCategory, {}, void 0, false, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) : filteredIssues().map((issue, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          IssueCard,
          {
            issue,
            categoryId: category.id,
            isSubmitting: submittingIssues.includes(issue.id),
            handleDragging
          },
          void 0,
          false,
          {
            fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
            lineNumber: 133,
            columnNumber: 21
          },
          this
        ) }, index, false, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 132,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 125,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 124,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
      lineNumber: 83,
      columnNumber: 5
    },
    this
  );
};
var EmptyCategory = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "mt-4 flex flex-col items-center text-font-subtlest", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RxValueNone, { size: 36 }, void 0, false, {
    fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
    lineNumber: 160,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-4 font-primary-light text-xs uppercase", children: "No issues found" }, void 0, false, {
    fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
    lineNumber: 161,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
  lineNumber: 159,
  columnNumber: 3
}, this);

// src/app/ui/main/project/board/board.view.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var BoardView = ({ project }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ProjectContextProvider, { project, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "box-border flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Search, {}, void 0, false, {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-4 my-0 inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UserAvatarList, { users: project.users }, void 0, false, {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectSort, {}, void 0, false, {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Categories, { categories: project.categories }, void 0, false, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/board.view.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/ui/main/project/board/board.view.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var Categories = ({ categories }) => {
  const [isDragging, setIsDragging] = (0, import_react26.useState)(false);
  const [submittingIssues, setSubmittingIssues] = (0, import_react26.useState)([]);
  const { revalidate } = useRevalidator();
  const navigate = useNavigate();
  useEventSource("board/issue/issue-event", {
    event: EVENTS.ISSUE_CREATED
  });
  const dataUpdated = useEventSource("board/issue/issue-event", {
    event: EVENTS.ISSUE_CHANGED
  });
  const onKeyDown = (0, import_react26.useCallback)(
    (e) => {
      if (e.shiftKey && e.key.toLowerCase() === "n") {
        e.preventDefault();
        navigate("issue/new");
      }
    },
    [navigate]
  );
  (0, import_react26.useEffect)(() => {
    setSubmittingIssues([]);
  }, [categories]);
  (0, import_react26.useEffect)(() => {
    revalidate();
  }, [dataUpdated, revalidate]);
  (0, import_react26.useEffect)(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "mt-12 flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "mb-2 block justify-self-end font-primary-light text-2xs text-font-subtlest", children: [
      "Press ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Kbd, { children: "Shift" }, void 0, false, {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this),
      " + ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Kbd, { children: "N" }, void 0, false, {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 86,
        columnNumber: 34
      }, this),
      " to create a new issue"
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex h-full gap-3", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      CategoryColumn,
      {
        category,
        isDragging,
        submittingIssues,
        setSubmittingIssues,
        handleDragging: setIsDragging
      },
      category.id,
      false,
      {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 90,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/board.view.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
};

// src/app/routes/__main/projects.$projectId/board.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  const { project } = data;
  const title = "Jira clone - Board";
  const description = "Manage your project. Create, edit, delete new issues and assigne them.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = `https://jira-clone.fly.dev/projects/${project.id}/board`;
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
    "twitter:image:width": "1457",
    "twitter:image:height": "872",
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
function ErrorBoundary({ error }) {
  console.error(error);
  const errorMessage = "The board page failed. Navigate to the projects page";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Error500, { message: errorMessage, href: "board" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board.tsx",
    lineNumber: 123,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board.tsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
}
function BoardRoute() {
  const { project } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoardView, { project }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board.tsx",
    lineNumber: 130,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  BoardRoute as default,
  meta
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/routes/__main/projects.$projectId/board-XFNMY7US.js.map
