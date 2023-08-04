import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  _extends
} from "/build/_shared/chunk-KJW57NP4.js";
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

// node_modules/.pnpm/@radix-ui+react-avatar@1.0.3_@types+react-dom@18.2.7_@types+react@18.2.15_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-avatar/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $cddcb0b647441e34$var$AVATAR_NAME = "Avatar";
var [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cddcb0b647441e34$var$AVATAR_NAME);
var [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
var $cddcb0b647441e34$export$e2255cf6045e8d47 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, ...avatarProps } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = (0, import_react.useState)("idle");
  return /* @__PURE__ */ (0, import_react.createElement)($cddcb0b647441e34$var$AvatarProvider, {
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, avatarProps, {
    ref: forwardedRef
  })));
});
var $cddcb0b647441e34$var$IMAGE_NAME = "AvatarImage";
var $cddcb0b647441e34$export$2cd8ae1985206fe8 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, src, onLoadingStatusChange = () => {
  }, ...imageProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
  const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
  const handleLoadingStatusChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a((status) => {
    onLoadingStatusChange(status);
    context.onImageLoadingStatusChange(status);
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (imageLoadingStatus !== "idle")
      handleLoadingStatusChange(imageLoadingStatus);
  }, [
    imageLoadingStatus,
    handleLoadingStatusChange
  ]);
  return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.img, _extends({}, imageProps, {
    ref: forwardedRef,
    src
  })) : null;
});
var $cddcb0b647441e34$var$FALLBACK_NAME = "AvatarFallback";
var $cddcb0b647441e34$export$69fffb6a9571fbfe = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, delayMs, ...fallbackProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
  const [canRender, setCanRender] = (0, import_react.useState)(delayMs === void 0);
  (0, import_react.useEffect)(() => {
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(
        () => setCanRender(true),
        delayMs
      );
      return () => window.clearTimeout(timerId);
    }
  }, [
    delayMs
  ]);
  return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, fallbackProps, {
    ref: forwardedRef
  })) : null;
});
function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
  const [loadingStatus, setLoadingStatus] = (0, import_react.useState)("idle");
  (0, import_react.useEffect)(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted)
        return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [
    src
  ]);
  return loadingStatus;
}
var $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
var $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
var $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;

// src/app/components/tooltip/tooltip.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Tooltip = ({
  title,
  show = true,
  children
}) => {
  const [isVisible, setIsVisible] = (0, import_react2.useState)(false);
  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);
  if (!show)
    return children;
  return (
    // Don't know why h-fit (and other h-*) doesn't work here
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-fit", style: { height: "fit-content" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onMouseEnter: showTooltip, onMouseLeave: hideTooltip, children }, void 0, false, {
        fileName: "src/app/components/tooltip/tooltip.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: t(
            "z-80 absolute left-1/2 top-full mt-1.5 -translate-x-1/2 transform justify-center break-words",
            isVisible ? "flex" : "hidden"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-fit whitespace-nowrap rounded bg-font px-1.5 py-0.5 text-2xs text-font-inverse", children: title }, void 0, false, {
            fileName: "src/app/components/tooltip/tooltip.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        },
        void 0,
        false,
        {
          fileName: "src/app/components/tooltip/tooltip.tsx",
          lineNumber: 22,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/app/components/tooltip/tooltip.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this)
  );
};

// src/app/components/user-avatar/user-avatar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip = false
}) => {
  const imageMinName = image == null ? void 0 : image.replace(".webp", "-min.webp");
  const imageSrc = size > 80 ? `/avatars/${image}` : `/avatars/${imageMinName}`;
  const imageSize = {
    width: `${size}px`,
    minWidth: `${size}px`,
    height: `${size}px`
  };
  const acronym = name.split(" ").slice(0, 2).map((word) => word[0].toUpperCase()).join("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { title: name, show: tooltip, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($cddcb0b647441e34$export$be92b6f5f03c0fe9, { className: "flex items-center rounded-full", style: imageSize, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      $cddcb0b647441e34$export$3e431a229df88919,
      {
        className: "rounded-full object-cover",
        src: image && imageSrc,
        style: imageSize,
        alt: name
      },
      void 0,
      false,
      {
        fileName: "src/app/components/user-avatar/user-avatar.tsx",
        lineNumber: 28,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      $cddcb0b647441e34$export$fb8d7f40caaeea67,
      {
        delayMs: 0,
        className: "flex items-center justify-center rounded-full text-[var(--Neutral1000)]",
        style: {
          ...imageSize,
          backgroundColor: color,
          fontSize: `${size / 2}px`
        },
        children: acronym
      },
      void 0,
      false,
      {
        fileName: "src/app/components/user-avatar/user-avatar.tsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/components/user-avatar/user-avatar.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/user-avatar/user-avatar.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.15_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size, setSize] = (0, import_react3.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size;
}

export {
  Tooltip,
  $db6c3485150b8e66$export$1ab7ae714698c4b8,
  UserAvatar
};
//# sourceMappingURL=/build/_shared/chunk-7E745BWT.js.map
