import {
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0
} from "/build/_shared/chunk-4NIBFM3Q.js";
import {
  twix
} from "/build/_shared/chunk-HMV63GZB.js";
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

// src/utils/text-are-only-spaces.ts
var textAreOnlySpaces = (text) => {
  return /^( )\1*$/.test(text);
};

// src/app/components/dialog/dialog.tsx
var Root = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
var Portal = $5d3850c4d0b4e6c7$export$602eac185826482c;
var Overlay = twix(
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  t(
    "absolute top-0 left-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto py-[40px] px-[40px]",
    "radix-state-open:animate-fade-in duration-300 backdrop-blur-md"
  )
);
var Content = twix(
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  t(
    "relative z-50 text-font w-4/5 max-w-[1000px] rounded-md bg-elevation-surface py-6 px-8 shadow-lg",
    "duration-300 radix-state-open:animate-slide-up"
  )
);
var Title = twix($5d3850c4d0b4e6c7$export$f99233281efd08a0, "mb-5 font-primary-black text-3xl");

// src/app/components/title/title.tsx
var import_react2 = __toESM(require_react());

// src/app/components/textarea-autosize.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TextareaAutosize = (props) => {
  const {
    name,
    value,
    setValue,
    placeholder,
    readOnly,
    autofocus,
    textareaClassName,
    onFocus,
    onBlur
  } = props;
  const [textareaHeight, setTextareaHeight] = (0, import_react.useState)(40);
  const textareaRef = (0, import_react.useRef)(null);
  const handleOnFocus = (e) => {
    const target = e.currentTarget;
    const length = target.value.length;
    target.setSelectionRange(length, length);
    if (onFocus)
      onFocus();
  };
  const handleTitleChange = (e) => {
    const value2 = e.currentTarget.value;
    setValue(value2);
  };
  const valueIsNotOnlySpaces = () => {
    return !/^( )\1*$/.test(value);
  };
  (0, import_react.useLayoutEffect)(() => {
    if (!textareaRef.current)
      return;
    setTextareaHeight(textareaRef.current.scrollHeight);
  }, [value]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        name,
        className: t(
          "box-border w-full resize-none overflow-y-hidden rounded-md border-none bg-background-input p-3 text-font outline-2 hover:bg-background-input-hovered focus-visible:bg-background-input-pressed",
          textareaClassName
        ),
        value,
        onChange: handleTitleChange,
        placeholder,
        readOnly,
        onFocus: handleOnFocus,
        onBlur,
        style: { height: `${textareaHeight}px` },
        autoFocus: autofocus
      },
      void 0,
      false,
      {
        fileName: "src/app/components/textarea-autosize.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "p",
      {
        ref: textareaRef,
        className: t(
          "absolute left-0 top-0 -z-10 box-border overflow-y-hidden p-3 opacity-0",
          textareaClassName
        ),
        children: valueIsNotOnlySpaces() && value || placeholder
      },
      void 0,
      false,
      {
        fileName: "src/app/components/textarea-autosize.tsx",
        lineNumber: 60,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/components/textarea-autosize.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};

// src/app/components/title/title.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var DEFAULT_MAX_LENGTH = 80;
var Title2 = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title"
}) => {
  const [title, setTitle] = (0, import_react2.useState)(initTitle);
  const [isFocus, setIsFocus] = (0, import_react2.useState)(true);
  const isMaxLength = title.length >= maxLength;
  const requireError = error && (title.length === 0 || textAreOnlySpaces(title));
  const onFocus = () => {
    if (!readOnly)
      setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);
  const updateTitle = (newTitle) => {
    if (newTitle.length > maxLength)
      return;
    setTitle(newTitle);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      TextareaAutosize,
      {
        name: "title",
        value: title,
        setValue: updateTitle,
        placeholder,
        readOnly,
        onFocus,
        onBlur,
        textareaClassName: t(
          "font-primary-black text-2xl",
          requireError && "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        ),
        autofocus: true
      },
      void 0,
      false,
      {
        fileName: "src/app/components/title/title.tsx",
        lineNumber: 35,
        columnNumber: 7
      },
      this
    ),
    requireError && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-3 font-primary-light text-sm text-font-danger", children: error }, void 0, false, {
      fileName: "src/app/components/title/title.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    isFocus && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "span",
      {
        className: t(
          "absolute right-0 top-full font-primary-light",
          isMaxLength ? "text-font-danger" : "text-font-subtlest"
        ),
        children: [
          title.length,
          " / ",
          maxLength
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/components/title/title.tsx",
        lineNumber: 56,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/components/title/title.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
};

// src/app/components/description/description.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Description = ({
  initDescription = "",
  readOnly
}) => {
  const [description, setDescription] = (0, import_react3.useState)(initDescription);
  const updateDescription = (newDescription) => {
    setDescription(newDescription);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-1 [&_p]:font-primary-light [&_p]:leading-6 [&_textarea]:font-primary-light [&_textarea]:leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    TextareaAutosize,
    {
      name: "description",
      value: description,
      setValue: updateDescription,
      placeholder: "Add a description",
      readOnly
    },
    void 0,
    false,
    {
      fileName: "src/app/components/description/description.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "src/app/components/description/description.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

export {
  Root,
  Portal,
  Overlay,
  Content,
  Title,
  TextareaAutosize,
  textAreOnlySpaces,
  Title2,
  Description
};
//# sourceMappingURL=/build/_shared/chunk-ZGECWANN.js.map
