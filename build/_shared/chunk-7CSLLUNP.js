import {
  Content as Content3,
  Item,
  ItemIndicator,
  ItemText,
  Root as Root3,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger as Trigger2,
  TriggerIcon,
  Value,
  Viewport
} from "/build/_shared/chunk-E2SOKFYO.js";
import {
  PriorityIcon,
  TaskIcon,
  useProjectStore
} from "/build/_shared/chunk-L3DOVY7A.js";
import {
  Action,
  Cancel,
  Content as Content2,
  Description as Description2,
  Overlay as Overlay2,
  Portal as Portal2,
  Root as Root2,
  Title as Title3,
  Trigger,
  defaultIssuesIds,
  prioritiesMock
} from "/build/_shared/chunk-MFSC2VCD.js";
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  TextareaAutosize,
  Title,
  Title2,
  textAreOnlySpaces
} from "/build/_shared/chunk-ZGECWANN.js";
import {
  IoCloseOutline,
  Kbd
} from "/build/_shared/chunk-PCSK3WXQ.js";
import {
  MdDeleteOutline
} from "/build/_shared/chunk-Z2HWOQXD.js";
import {
  useUserStore
} from "/build/_shared/chunk-BZEEQDWJ.js";
import {
  UserAvatar
} from "/build/_shared/chunk-7E745BWT.js";
import {
  Button
} from "/build/_shared/chunk-KIAY75M2.js";
import {
  t
} from "/build/_shared/chunk-TUGJO2L3.js";
import {
  Form,
  Link,
  useActionData,
  useFetcher,
  useLocation,
  useNavigate,
  useSearchParams,
  useTransition
} from "/build/_shared/chunk-OBXMDE47.js";
import {
  Q
} from "/build/_shared/chunk-PL7FAYB3.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx
var import_react8 = __toESM(require_react());

// src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var PanelHeaderIssue = ({
  id,
  deleteDisabled
}) => {
  const location = useLocation();
  const previousUrl = location.pathname.split("/issue")[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex flex-grow items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TaskIcon, { size: 20 }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-font-subtlest text-opacity-80", children: id }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteIssueModalDialog, { disabled: deleteDisabled }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: previousUrl,
        className: "ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon flex-center hover:bg-background-neutral",
        "aria-label": "Close issue panel",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IoCloseOutline, { size: 32 }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};
var DeleteIssueModalDialog = ({
  disabled
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Trigger,
      {
        className: t(
          "flex rounded border-none p-1.5 text-icon flex-center",
          disabled ? "cursor-not-allowed hover:text-font-disabled" : "hover:bg-background-danger hover:text-font-danger"
        ),
        "aria-label": "Open delete issue dialog",
        disabled,
        title: disabled ? "This user cannot delete the issue" : "Delete issue",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdDeleteOutline, { size: 26 }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Overlay2, {}, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title3, { children: "Delete issue?" }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description2, { children: "This action is permanent and cannot be undone. Are you sure you want to remove this issue completely?" }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "delete", className: "mt-8 flex w-full justify-end gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cancel, { "aria-label": "Cancel", children: "Cancel" }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Action,
            {
              name: "_action",
              value: "delete",
              type: "submit",
              "aria-label": "Delete issue",
              children: "Delete"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
              lineNumber: 70,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
};

// node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
var i;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var EditBox = ({
  defaultMessage,
  autofocus,
  save,
  cancel
}) => {
  const [message, setMessage] = (0, import_react2.useState)(defaultMessage);
  const [initError, setInitError] = (0, import_react2.useState)(false);
  const [isEditing, setIsEditing] = (0, import_react2.useState)(false);
  const messageIsValid = () => {
    return message.length > 0 && !textAreOnlySpaces(message);
  };
  const resetValues = () => {
    setMessage(defaultMessage);
    setInitError(false);
    setIsEditing(false);
  };
  const onSave = () => {
    if (messageIsValid()) {
      save(message);
      resetValues();
    } else {
      setInitError(true);
    }
  };
  const onCancel = () => {
    if (cancel)
      cancel();
    resetValues();
  };
  const onFocus = () => setIsEditing(true);
  const isError = initError && !messageIsValid();
  const placeholder = isError ? "Message cannot be empty" : "Add your comment...";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      TextareaAutosize,
      {
        name: "comment",
        value: message,
        setValue: setMessage,
        placeholder,
        onFocus,
        autofocus,
        textareaClassName: t(
          "min-h-[80px] leading-6 font-primary-light outline outline-2 outline-border-input focus:outline-border-brand bg-background-input",
          isError && "placeholder:text-font-danger placeholder:text-opacity-70 !outline-border-danger !outline-2"
        )
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: t(
          "mt-2 flex gap-2 text-sm",
          isEditing ? "visible" : "hidden"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Button,
            {
              type: "button",
              className: "px-4 py-2.5",
              onClick: onSave,
              "aria-label": "Save comment",
              children: "Save"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
              lineNumber: 68,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Button,
            {
              color: "neutral",
              variant: "text",
              className: "px-4 py-2.5",
              onClick: onCancel,
              "aria-label": "Cancel comment",
              children: "Cancel"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
              lineNumber: 76,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var CreateComment = ({
  addComment
}) => {
  const { user } = useUserStore();
  const save = (message) => {
    addComment({
      id: "temp-" + v4_default(),
      user,
      message,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 flex items-start gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserAvatar, { ...user }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EditBox, { defaultMessage: "", save }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx
var import_react3 = __toESM(require_react());

// src/utils/formatDateTime.ts
var formatDateTime = (timestamp) => {
  const locale = "en-US";
  const date = new Date(timestamp).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
  const time = new Date(timestamp).toLocaleTimeString(locale, {
    hour12: false,
    timeStyle: "short"
  });
  return `${time} \xB7 ${date}`;
};

// src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var ViewComment = ({
  comment,
  removeComment
}) => {
  const { user } = useUserStore();
  const [isEditing, setIsEditing] = (0, import_react3.useState)(false);
  const fetcher = useFetcher();
  const isNotSelfComment = comment.user.id !== user.id;
  const edit = () => setIsEditing(true);
  const cancel = () => setIsEditing(false);
  const remove = () => {
    removeComment(comment.id);
    if (comment.id.startsWith("temp-"))
      return;
    fetcher.submit(
      { commentId: comment.id, _action: "deleteComment" },
      { method: "delete" }
    );
  };
  const save = (commentText) => {
    comment.message = commentText;
    setIsEditing(false);
  };
  const IdleComment = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "font-primary-light", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: comment.message }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: t(
          "mt-3 text-font-subtlest",
          isNotSelfComment ? "hidden" : "visible"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              onClick: edit,
              disabled: isNotSelfComment,
              className: "font-primary-light text-xs hover:underline",
              "aria-label": "Edit comment",
              children: "Edit"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
              lineNumber: 48,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "mx-2", children: "\xB7" }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              onClick: remove,
              disabled: isNotSelfComment,
              className: "font-primary-light text-xs hover:underline",
              "aria-label": "Delete comment",
              children: "Delete"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
              lineNumber: 57,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserAvatar, { ...comment.user }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mr-4 inline-block font-primary-bold", children: comment.user.name }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-primary-light text-xs", children: [
        comment.createdAt ? formatDateTime(comment.createdAt) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "Date undefined" }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        commentIsEdited(comment) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "mx-2", children: "\xB7" }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "EDITED" }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-3", children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        EditBox,
        {
          defaultMessage: comment.message,
          save,
          cancel,
          autofocus: true
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
          lineNumber: 91,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IdleComment, {}, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
};
var commentIsEdited = (comment) => {
  const createdAtInSeconds = Math.floor(comment.createdAt / 1e3);
  const updatedAtInSeconds = Math.floor(comment.updatedAt / 1e3);
  return createdAtInSeconds !== updatedAtInSeconds;
};

// src/app/ui/main/project/board/issue-panel/select-status.tsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var SelectStatus = ({ initStatus }) => {
  var _a;
  const projectStore = useProjectStore();
  const categories = projectStore.project.categories;
  const initCategory = categories.find(
    (category) => category.type === initStatus
  );
  if (!initCategory) {
    throw new Error("No default category found");
  }
  const defaultValue = initCategory.id;
  const [selectedValue, setSelectedValue] = (0, import_react5.useState)(defaultValue);
  const selectedStatus = (_a = categories.find(
    (category) => category.id === selectedValue
  )) == null ? void 0 : _a.type;
  const onValueChange = (value) => {
    setSelectedValue(value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    Root3,
    {
      name: "status",
      defaultValue,
      onValueChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          Trigger2,
          {
            "aria-label": "Open status select",
            className: t(
              "!text-font-inverse hover:!opacity-80",
              selectedStatus === "TODO" && "hover:bg-background-accent-grey-bolder-hovered !bg-background-accent-grey-bolder",
              selectedStatus === "IN_PROGRESS" && "hover:bg-background-accent-blue-bolder-hovered !bg-background-accent-blue-bolder",
              selectedStatus === "DONE" && "hover:bg-background-accent-green-bolder-hovered !bg-background-accent-green-bolder"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Value, { className: "pt-1" }, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                lineNumber: 46,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TriggerIcon, {}, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                lineNumber: 47,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 34,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Content3, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollUpButton, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Viewport, { children: [
            categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Item, { value: category.id, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ItemIndicator, {}, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                lineNumber: 54,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "span",
                {
                  className: t(
                    "flex w-fit items-center gap-2 rounded px-1 py-0.5 text-2xs uppercase",
                    category.type === "TODO" && "bg-background-accent-grey-subtler text-font-accent-grey",
                    category.type === "IN_PROGRESS" && "bg-background-accent-blue-subtler text-font-accent-blue",
                    category.type === "DONE" && "bg-background-accent-green-subtler text-font-accent-green"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ItemText, { children: category.name }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                  lineNumber: 55,
                  columnNumber: 15
                },
                this
              )
            ] }, index, true, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Separator, {}, void 0, false, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollDownButton, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/board/issue-panel/select-priority.tsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var SelectPriority = ({ initPriority }) => {
  const [selectValue, setSelectValue] = (0, import_react6.useState)(initPriority);
  const onValueChange = (value) => {
    const priority = value;
    setSelectValue(priority);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    Root3,
    {
      name: "priority",
      defaultValue: initPriority,
      onValueChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          Trigger2,
          {
            "aria-label": "Open priority select",
            className: "text-xs uppercase",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PriorityIcon, { priority: selectValue }, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 25,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 24,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Value, {}, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 27,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TriggerIcon, {}, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 28,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 20,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Content3, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollUpButton, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Viewport, { children: [
            prioritiesMock.map((priority, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              Item,
              {
                value: priority.id,
                className: "text-xs uppercase",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ItemIndicator, {}, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                    lineNumber: 39,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PriorityIcon, { priority: priority.id }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                    lineNumber: 40,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ItemText, { children: priority.id }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                    lineNumber: 41,
                    columnNumber: 15
                  }, this)
                ]
              },
              index,
              true,
              {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 34,
                columnNumber: 13
              },
              this
            )),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Separator, {}, void 0, false, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollDownButton, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/board/issue-panel/select-asignee.tsx
var import_react7 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var SelectAsignee = ({ initAsignee }) => {
  const projectStore = useProjectStore();
  const users = projectStore.project.users;
  const [selectedValue, setSelectedValue] = (0, import_react7.useState)(initAsignee);
  const onValueChange = (userId) => {
    const asignee = projectStore.project.users.find(
      (user) => user.id === userId
    );
    if (asignee) {
      setSelectedValue(asignee);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    Root3,
    {
      name: "asignee",
      defaultValue: initAsignee.id,
      onValueChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Trigger2, { "aria-label": "Open asignee select", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UserAvatar, { ...selectedValue, size: 32 }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Value, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TriggerIcon, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Content3, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ScrollUpButton, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Viewport, { children: [
            users.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Item, { value: user.id, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ItemIndicator, {}, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
                lineNumber: 41,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UserAvatar, { ...user }, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
                lineNumber: 42,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ItemText, { children: user.name }, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
                lineNumber: 43,
                columnNumber: 15
              }, this)
            ] }, index, true, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Separator, {}, void 0, false, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ScrollDownButton, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/board/issue-panel/created-updated-at.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var CreatedUpdatedAt = ({ issue }) => {
  const values = [
    { label: "Created at:", value: issue == null ? void 0 : issue.createdAt },
    { label: "Updated at:", value: issue == null ? void 0 : issue.updatedAt }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("table", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tbody", { className: "text-xs text-font-subtlest", children: values.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-2", children: label }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
      lineNumber: 16,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-2", children: value ? formatDateTime(value) : "Just now" }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
      lineNumber: 19,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, label, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/issue-panel/spinner.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var Spinner = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "svg",
  {
    "aria-hidden": "true",
    className: "fill-grey-600 mr-2 inline-block h-5 w-5 animate-spin",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "path",
        {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentBaseColor"
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/project/board/issue-panel/spinner.tsx",
          lineNumber: 9,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "path",
        {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentColor"
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/project/board/issue-panel/spinner.tsx",
          lineNumber: 13,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  true,
  {
    fileName: "src/app/ui/main/project/board/issue-panel/spinner.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var IssuePanel = ({ issue }) => {
  var _a;
  const [isOpen, setIsOpen] = (0, import_react8.useState)(true);
  const [comments, setComments] = (0, import_react8.useState)((issue == null ? void 0 : issue.comments) || []);
  const [portalContainer, setPortalContainer] = (0, import_react8.useState)(
    null
  );
  const { user } = useUserStore();
  const reporter = issue ? issue.reporter : user;
  const formRef = (0, import_react8.useRef)(null);
  const actionData = useActionData();
  const fetcher = useFetcher();
  const params = useSearchParams();
  const transition = useTransition();
  const location = useLocation();
  const navigate = useNavigate();
  const initStatus = params[0].get("category") || "TODO";
  const userIsNotReporter = user.id !== reporter.id;
  const postData = (0, import_react8.useCallback)(
    (formTarget) => {
      const isExistingIssue = Boolean(issue == null ? void 0 : issue.id);
      const formData = new FormData(formTarget);
      const action = isExistingIssue ? "update" : "create";
      formData.set("comments", JSON.stringify(comments));
      formData.set("_action", action);
      fetcher.submit(formData, {
        method: "post"
      });
    },
    [comments, fetcher, issue == null ? void 0 : issue.id]
  );
  const handleProgrammaticSubmit = (0, import_react8.useCallback)(() => {
    if (formRef.current) {
      postData(formRef.current);
    }
  }, [postData]);
  const onKeyDown = (0, import_react8.useCallback)(
    (e) => {
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleProgrammaticSubmit();
      }
    },
    [handleProgrammaticSubmit]
  );
  const handleFormSumbit = (e) => {
    e.preventDefault();
    postData(e.currentTarget);
  };
  const handleProgrammaticClose = () => {
    setIsOpen(false);
  };
  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };
  const removeComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };
  (0, import_react8.useEffect)(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  (0, import_react8.useEffect)(() => {
    if (!isOpen) {
      setTimeout(() => {
        const previousUrl = location.pathname.split("/issue")[0];
        navigate(previousUrl);
      }, 300);
    }
  }, [isOpen, navigate, location.pathname]);
  (0, import_react8.useEffect)(() => {
    var _a2;
    const formAction = (_a2 = fetcher.formData) == null ? void 0 : _a2.get("_action");
    if (fetcher.type === "actionRedirect" && formAction === "create") {
      Q.success("Issue created successfully");
    }
  }, [fetcher.type, fetcher.formData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Root, { open: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Portal, { container: portalContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Overlay, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      Content,
      {
        onEscapeKeyDown: handleProgrammaticClose,
        onPointerDownOutside: handleProgrammaticClose,
        className: isOpen ? "" : "translate-y-[10px] opacity-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            PanelHeaderIssue,
            {
              id: (issue == null ? void 0 : issue.id) || "Create new issue",
              deleteDisabled: userIsNotReporter || defaultIssuesIds.includes((issue == null ? void 0 : issue.id) || "")
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
              lineNumber: 134,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { method: "post", onSubmit: handleFormSumbit, ref: formRef, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-5 gap-16", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "col-span-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Title, { className: "my-5 -ml-3", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                  Title2,
                  {
                    initTitle: (issue == null ? void 0 : issue.name) || "",
                    readOnly: userIsNotReporter,
                    error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 145,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 144,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "font-primary-black text-font", children: "Description" }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 151,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "-ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                  Description,
                  {
                    initDescription: (issue == null ? void 0 : issue.description) || "",
                    readOnly: userIsNotReporter
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 153,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 152,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-6", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "font-primary-black text-font", children: "Comments" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 159,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CreateComment, { addComment }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 161,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 160,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { className: "mt-8 space-y-6", children: comments.map((comment) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    ViewComment,
                    {
                      comment,
                      removeComment
                    },
                    void 0,
                    false,
                    {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 166,
                      columnNumber: 29
                    },
                    this
                  ) }, comment.id, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 165,
                    columnNumber: 27
                  }, this)) }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 163,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 158,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 143,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "col-span-2 space-y-10", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mb-1", children: "Status" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 177,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    SelectStatus,
                    {
                      initStatus: (issue == null ? void 0 : issue.categoryType) || initStatus
                    },
                    void 0,
                    false,
                    {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 178,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 176,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mb-1", children: "Priority" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 183,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    SelectPriority,
                    {
                      initPriority: (issue == null ? void 0 : issue.priority.id) || "low"
                    },
                    void 0,
                    false,
                    {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 184,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 182,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mb-1", children: "Asignee" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 189,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SelectAsignee, { initAsignee: (issue == null ? void 0 : issue.asignee) || user }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 190,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 188,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mb-1", children: "Reporter" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 193,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-1 flex w-fit items-center gap-2 rounded-full bg-background-neutral py-1 pb-1 pl-1 pr-3.5", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UserAvatar, { ...reporter }, void 0, false, {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 195,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                      "input",
                      {
                        type: "hidden",
                        name: "reporter",
                        value: reporter.id
                      },
                      void 0,
                      false,
                      {
                        fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                        lineNumber: 196,
                        columnNumber: 25
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "m-0", children: reporter.name }, void 0, false, {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 201,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 194,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 192,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CreatedUpdatedAt, { issue }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 205,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 204,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 175,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-6 grid grid-cols-3 items-end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "font-primary-light text-2xs text-font-subtlest text-opacity-80", children: [
                "Press ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Kbd, { children: "Shift" }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 211,
                  columnNumber: 27
                }, this),
                " + ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Kbd, { children: "S" }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 211,
                  columnNumber: 46
                }, this),
                " to accept"
              ] }, void 0, true, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 210,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                Button,
                {
                  type: "submit",
                  size: "lg",
                  className: "w-fit",
                  disabled: transition.state !== "idle",
                  "aria-label": "Accept changes",
                  children: transition.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
                    "Submmiting",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Spinner, {}, void 0, false, {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 224,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 222,
                    columnNumber: 25
                  }, this) : "Accept"
                },
                void 0,
                false,
                {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 214,
                  columnNumber: 21
                },
                this
              ) }, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 213,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "justify-self-end font-primary-light text-2xs text-font-subtlest text-opacity-80", children: [
                "Press ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Kbd, { children: "Esc" }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 232,
                  columnNumber: 27
                }, this),
                " to close"
              ] }, void 0, true, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 231,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
              lineNumber: 209,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
        lineNumber: 129,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 128,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "div",
      {
        ref: setPortalContainer,
        className: "fixed left-0 top-0 z-50 h-full w-full"
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
        lineNumber: 241,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
    lineNumber: 125,
    columnNumber: 5
  }, this);
};

export {
  IssuePanel
};
//# sourceMappingURL=/build/_shared/chunk-7CSLLUNP.js.map
