import {
  userMock1,
  userMock2,
  usersMock
} from "/build/_shared/chunk-NCHMJE4I.js";
import {
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  $5d3850c4d0b4e6c7$export$41fb9f06171c75f4,
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$69b62a49393917d6,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41,
  $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0
} from "/build/_shared/chunk-4NIBFM3Q.js";
import {
  twix
} from "/build/_shared/chunk-HMV63GZB.js";
import {
  Button
} from "/build/_shared/chunk-KIAY75M2.js";
import {
  $5e63c961fc1ce211$export$d9f1ccf0bdb05d45,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  _extends
} from "/build/_shared/chunk-KJW57NP4.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/domain/comment/comment.mock.ts
var createdAt = Date.now();
var updatedAt = Date.now();
var commentMock1 = {
  id: "92149ee5-0459-4286-8323-1542e1295154",
  user: usersMock[3],
  // Jessie
  message: "Depending on the user, some features are restricted. For example, only the reporter of an issue can edit the title and description.",
  createdAt,
  updatedAt
};
var commentMock2 = {
  id: "3375b7ea-425d-4bd3-a728-c8888b63a7f2",
  user: usersMock[7],
  // Little Green Men
  message: "And only the original poster of a comment can edit or delete it!",
  createdAt,
  updatedAt
};
var commentMock3 = {
  id: "ee000718-85e5-44ac-91e2-e29340fb0b61",
  user: usersMock[5],
  // Mr. Potato
  message: "This is not they only accessible feature implemented. By using Radix UI, components like select, dialog or checkboxes are accessible by default, and you can handle them with the keyboard.",
  createdAt,
  updatedAt
};
var commentMock4 = {
  id: "c0db6d6f-f395-4882-8bf4-e644f0e45460",
  user: userMock1,
  // Daniel Serrano
  message: "By the way, the 404 error will be triggered if you modify the URL to any non existing path.",
  createdAt,
  updatedAt
};
var commentMock5 = {
  id: "6c57eff9-f310-470a-b8e9-0f5234b63f5a",
  user: usersMock[6],
  // Ms. Potato
  message: "By the way, the 404 error will be triggered if you modify the URL to any non existing path.",
  createdAt,
  updatedAt
};

// src/domain/priority/priority.mock.ts
var prioritiesMock = [
  {
    id: "low",
    name: "Low",
    order: 0
  },
  {
    id: "medium",
    name: "Medium",
    order: 1
  },
  {
    id: "high",
    name: "High",
    order: 2
  }
];
var priorityLow = prioritiesMock[0];
var priorityMedium = prioritiesMock[1];
var priorityHigh = prioritiesMock[2];

// src/domain/issue/issue.mock.ts
var createdAt2 = (/* @__PURE__ */ new Date("2022-01-18 11:00")).valueOf();
var todoIssuesMock1 = [];
var inProgressIssuesMock1 = [
  {
    id: "ea07f7ca-13e9-4143-b623-f5713adef81a",
    name: "HINT: Open two tabs to see events in real time.",
    description: "With the same project open in two different tabs, try making some changes on one of them. The result will be reflected instantly on the other. This will happen with every other user with the app open.",
    reporter: userMock1,
    // Daniel Serrano
    asignee: userMock2,
    // Woody
    comments: [],
    priority: priorityHigh,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: createdAt2
  },
  {
    id: "23717058-379a-447a-a215-e425a124154f",
    name: "HINT: Try to login and interact with different users. ",
    description: "This will be reflected on the UI (e. g. which user created and issue or wrote a comment). A user can only see the projects they are assigned to. You can try this by creating a new project at the /projects page. To logout, go to the avatar dropdown (top right).",
    reporter: userMock2,
    // Woody
    asignee: usersMock[2],
    // Buzz Lightyear
    comments: [commentMock1, commentMock2],
    priority: priorityHigh,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 17:50")).valueOf()
  }
];
var doneIssuesMock1 = [
  {
    id: "cb3eb5e6-299d-4e1a-8521-a5541f8403e4",
    name: "HINT: Check the URL when filter or navigate. Try navigate directly to the URL.",
    description: "All the routing is handled server-side thanks to Remix Run framework. Everytime you apply a filter, a new request is sent, the data is revalidated in the server and the page HTML is resent to the server. This is very useful when sharing a link. The other person will receive the same exact result as you.",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityLow,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 10:51")).valueOf()
  },
  {
    id: "8264e3fc-dd97-4abe-9612-deee6472e5c4",
    name: "HINT: Try key combinations to execute actions. They are indicated on the UI.",
    description: 'E. g., try Shift + N on the board page to create a new issue. By default, it will be created under the category "TO DO". Another common key combination is using Shift + S to save changes (try it on this very issue!).',
    reporter: userMock1,
    asignee: userMock1,
    comments: [commentMock3],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 02:04")).valueOf()
  },
  {
    id: "4db55cbf-222d-424a-b23b-08e61534c706",
    name: "HINT: Check network status when navigating to an error page.",
    description: 'There are two sections on the sidebar that will intentionally throw an error. The section "Server error" will trigger a 500 error response, while "Not found" returns a 404 error. You can check the status response on the browser network tab and see how it is handled on the UI.',
    reporter: userMock1,
    asignee: userMock1,
    comments: [commentMock4, commentMock5],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 15:28")).valueOf()
  }
];
var todoIssuesMock2 = [
  {
    id: "f3efefcf-7859-4241-8b03-4ae815183355",
    name: "Add and display issue timestamps",
    description: "Id should be create automatically on new Issue(). It must be displayed on issue panel, as well as an updatedAt parameter",
    reporter: userMock1,
    asignee: userMock2,
    comments: [],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-18 11:01")).valueOf()
  },
  {
    id: "6bf6a1f4-20bb-492b-8ea4-4aa18efeb062",
    name: "Add projects section and the ability to create multiple projects",
    description: "Router would be needed. Can create and edit project, as well as add users to that particular project",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityLow,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 14:28")).valueOf()
  }
];
var inProgressIssuesMock2 = [
  {
    id: "812664aa-82be-418b-9ba3-1d7acdcd6be2",
    name: "Add dark mode",
    description: "",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityHigh,
    categoryType: "IN_PROGRESS",
    createdAt: createdAt2,
    updatedAt: createdAt2
  }
];
var doneIssuesMock2 = [];
var defaultIssuesIds = [
  todoIssuesMock1,
  inProgressIssuesMock1,
  doneIssuesMock1,
  todoIssuesMock2,
  inProgressIssuesMock2,
  doneIssuesMock2
].flat().map((issue) => issue.id);

// node_modules/.pnpm/@radix-ui+react-alert-dialog@1.0.4_@types+react-dom@18.2.7_@types+react@18.2.15_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $905f4ae918aab1aa$var$ROOT_NAME = "AlertDialog";
var [$905f4ae918aab1aa$var$createAlertDialogContext, $905f4ae918aab1aa$export$b8891880751c2c5b] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($905f4ae918aab1aa$var$ROOT_NAME, [
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41
]);
var $905f4ae918aab1aa$var$useDialogScope = $5d3850c4d0b4e6c7$export$cc702773b8ea3e41();
var $905f4ae918aab1aa$export$de466dd8317b0b75 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, _extends({}, dialogScope, alertDialogProps, {
    modal: true
  }));
};
var $905f4ae918aab1aa$export$6edd7a623ef0f40b = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...triggerProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$41fb9f06171c75f4, _extends({}, dialogScope, triggerProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$660f2bfdb986706c = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$602eac185826482c, _extends({}, dialogScope, portalProps));
};
var $905f4ae918aab1aa$export$a707a4895ce23256 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...overlayProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, _extends({}, dialogScope, overlayProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CONTENT_NAME = "AlertDialogContent";
var [$905f4ae918aab1aa$var$AlertDialogContentProvider, $905f4ae918aab1aa$var$useAlertDialogContentContext] = $905f4ae918aab1aa$var$createAlertDialogContext($905f4ae918aab1aa$var$CONTENT_NAME);
var $905f4ae918aab1aa$export$94e6af45f0af4efd = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, children, ...contentProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const contentRef = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const cancelRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$69b62a49393917d6, {
    contentName: $905f4ae918aab1aa$var$CONTENT_NAME,
    titleName: $905f4ae918aab1aa$var$TITLE_NAME,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ (0, import_react.createElement)($905f4ae918aab1aa$var$AlertDialogContentProvider, {
    scope: __scopeAlertDialog,
    cancelRef
  }, /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, _extends({
    role: "alertdialog"
  }, dialogScope, contentProps, {
    ref: composedRefs,
    onOpenAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onOpenAutoFocus, (event) => {
      var _cancelRef$current;
      event.preventDefault();
      (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
        preventScroll: true
      });
    }),
    onPointerDownOutside: (event) => event.preventDefault(),
    onInteractOutside: (event) => event.preventDefault()
  }), /* @__PURE__ */ (0, import_react.createElement)($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), false)));
});
var $905f4ae918aab1aa$var$TITLE_NAME = "AlertDialogTitle";
var $905f4ae918aab1aa$export$225e0da62d314b7 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...titleProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f99233281efd08a0, _extends({}, dialogScope, titleProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$a23b55cde55ad9a5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$393edc798c47379d, _extends({}, dialogScope, descriptionProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CANCEL_NAME = "AlertDialogCancel";
var $905f4ae918aab1aa$export$2f67a923571aaea0 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...cancelProps } = props;
  const { cancelRef } = $905f4ae918aab1aa$var$useAlertDialogContentContext($905f4ae918aab1aa$var$CANCEL_NAME, __scopeAlertDialog);
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, cancelRef);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, cancelProps, {
    ref
  }));
});
var $905f4ae918aab1aa$export$be92b6f5f03c0fe9 = $905f4ae918aab1aa$export$de466dd8317b0b75;
var $905f4ae918aab1aa$export$41fb9f06171c75f4 = $905f4ae918aab1aa$export$6edd7a623ef0f40b;
var $905f4ae918aab1aa$export$602eac185826482c = $905f4ae918aab1aa$export$660f2bfdb986706c;
var $905f4ae918aab1aa$export$c6fdb837b070b4ff = $905f4ae918aab1aa$export$a707a4895ce23256;
var $905f4ae918aab1aa$export$7c6e2c02157bb7d2 = $905f4ae918aab1aa$export$94e6af45f0af4efd;
var $905f4ae918aab1aa$export$848c9b7ead0df967 = $905f4ae918aab1aa$export$2f67a923571aaea0;
var $905f4ae918aab1aa$export$f99233281efd08a0 = $905f4ae918aab1aa$export$225e0da62d314b7;
var $905f4ae918aab1aa$export$393edc798c47379d = $905f4ae918aab1aa$export$a23b55cde55ad9a5;

// src/app/components/alert-dialog/alert-dialog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Root = $905f4ae918aab1aa$export$be92b6f5f03c0fe9;
var Trigger = $905f4ae918aab1aa$export$41fb9f06171c75f4;
var Portal = $905f4ae918aab1aa$export$602eac185826482c;
var Overlay = twix(
  $905f4ae918aab1aa$export$c6fdb837b070b4ff,
  "fixed top-0 left-0 z-50 h-full w-full backdrop-blur-sm"
);
var Content = twix(
  $905f4ae918aab1aa$export$7c6e2c02157bb7d2,
  "fixed top-1/2 text-font left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-elevation-surface-overlay p-5 shadow-lg"
);
var Title = twix(
  $905f4ae918aab1aa$export$f99233281efd08a0,
  "mb-5 font-primary-black text-3xl"
);
var Description = twix(
  $905f4ae918aab1aa$export$393edc798c47379d,
  "mt-8 flex w-full justify-end gap-4"
);
var Cancel = ({ children, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$848c9b7ead0df967, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { ...rest, color: "neutral", variant: "subtlest", children: "Cancel" }, void 0, false, {
  fileName: "src/app/components/alert-dialog/alert-dialog.tsx",
  lineNumber: 26,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/components/alert-dialog/alert-dialog.tsx",
  lineNumber: 25,
  columnNumber: 3
}, this);
var Action = ({ children, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { ...rest, color: "danger", children }, void 0, false, {
  fileName: "src/app/components/alert-dialog/alert-dialog.tsx",
  lineNumber: 32,
  columnNumber: 3
}, this);

export {
  prioritiesMock,
  todoIssuesMock1,
  inProgressIssuesMock1,
  doneIssuesMock1,
  todoIssuesMock2,
  inProgressIssuesMock2,
  doneIssuesMock2,
  defaultIssuesIds,
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Cancel,
  Action
};
//# sourceMappingURL=/build/_shared/chunk-MFSC2VCD.js.map
