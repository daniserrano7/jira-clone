import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
  doneIssuesMock1,
  doneIssuesMock2,
  inProgressIssuesMock1,
  inProgressIssuesMock2,
  todoIssuesMock1,
  todoIssuesMock2
} from "/build/_shared/chunk-MFSC2VCD.js";
import {
  usersMock
} from "/build/_shared/chunk-NCHMJE4I.js";
import {
  categoryTypeDict,
  categoryTypes
} from "/build/_shared/chunk-VD4CXEVL.js";
import "/build/_shared/chunk-4NIBFM3Q.js";
import "/build/_shared/chunk-HMV63GZB.js";
import {
  AiOutlinePlus
} from "/build/_shared/chunk-MFMVNLXL.js";
import {
  MdDeleteOutline
} from "/build/_shared/chunk-Z2HWOQXD.js";
import {
  Button
} from "/build/_shared/chunk-KIAY75M2.js";
import "/build/_shared/chunk-5KGVAOR3.js";
import "/build/_shared/chunk-KJW57NP4.js";
import "/build/_shared/chunk-JPUJUZ7O.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import "/build/_shared/chunk-L3QT7SD6.js";
import {
  t
} from "/build/_shared/chunk-TUGJO2L3.js";
import {
  Form,
  Link,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-OBXMDE47.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.tsx
var import_node = __toESM(require_node());

// src/domain/category/category.mock.ts
var createdAt = (/* @__PURE__ */ new Date("2022-01-01")).valueOf();
var updatedAt = (/* @__PURE__ */ new Date("2022-01-01")).valueOf();
var ids1 = [
  "1e8877a7-91dc-46de-bce0-f077ad922fc8",
  "46964edd-62e0-4c2f-90bf-e275ee087433",
  "c1278ad3-29b3-422c-8219-54bb66b26ff4"
];
var issuesMock1 = [todoIssuesMock1, inProgressIssuesMock1, doneIssuesMock1];
var ids2 = [
  "bbb348d5-ef02-447c-94f5-5fbf1ceeac07",
  "14055a19-1a79-4b16-90fb-811652e33128",
  "aa102bcb-335c-4d82-8392-058f6172ebe8"
];
var issuesMock2 = [todoIssuesMock2, inProgressIssuesMock2, doneIssuesMock2];
var categoriesMock1 = categoryTypes.map((categoryType, index) => {
  const id = ids1[index];
  const name = categoryTypeDict[categoryType];
  const type = categoryType;
  const order = index;
  const issues = issuesMock1[index];
  return {
    id,
    name,
    issues,
    type,
    order,
    createdAt,
    updatedAt
  };
});
var categoriesMock2 = categoryTypes.map((categoryType, index) => {
  const id = ids2[index];
  const name = categoryTypeDict[categoryType];
  const type = categoryType;
  const order = index;
  const issues = issuesMock2[index];
  return {
    id,
    name,
    type,
    issues,
    order,
    createdAt,
    updatedAt
  };
});

// src/domain/project/project.mock.ts
var projectMock1 = {
  id: "jira-clone",
  name: "JIRA Clone",
  description: "Software project",
  users: usersMock,
  categories: categoriesMock1,
  image: "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10400?size=xxlarge",
  createdAt: (/* @__PURE__ */ new Date("2023-01-01 10:00")).valueOf()
};
var projectMock2 = {
  id: "second-project",
  name: "Second project",
  description: "Super long description to test how it clamps on project card in the projects page and in the project sidebar",
  users: usersMock.slice(0, 3),
  // Only the first 3 users
  categories: categoriesMock2,
  image: "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10401?size=xxlarge",
  createdAt: (/* @__PURE__ */ new Date("2023-01-01 11:00")).valueOf()
};
var projectsMock = [projectMock1, projectMock2];

// src/app/ui/main/projects/projects.view.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var defaultProjectsIds = projectsMock.map(
  (projectMock) => projectMock.id
);
var ProjectsView = ({
  projectsSummary
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-primary-black text-2xl", children: "PROJECTS" }, void 0, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "new", className: "flex w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { color: "neutral", variant: "subtlest", className: "py-3 pl-3 pr-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AiOutlinePlus, { size: 22 }, void 0, false, {
        fileName: "src/app/ui/main/projects/projects.view.tsx",
        lineNumber: 23,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/ui/main/projects/projects.view.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "leading-4", children: "Add Project" }, void 0, false, {
        fileName: "src/app/ui/main/projects/projects.view.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "4 mt-4 grid grid-cols-auto-400 gap-8", children: projectsSummary.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCard, { project }, project.id, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};
var ProjectCard = ({ project }) => {
  const isDefaultProject = defaultProjectsIds.includes(project.id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[400px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: project.id,
        className: t(
          "group flex h-[112px] rounded bg-elevation-surface-raised shadow-sm outline outline-2 outline-transparent duration-100 ease-linear",
          "hover:-translate-y-0.5 hover:bg-background-brand-subtlest-hovered hover:text-font-brand hover:shadow-md hover:outline-border-brand"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: project.image || "/images/default-project.png",
              alt: "Project",
              width: "90px",
              height: "104px",
              className: "h-auto w-[90px] rounded-l object-cover"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 55,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-1 px-3 pb-4 pt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg", children: project.name }, void 0, false, {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "line-clamp-2 min-h-[40px] font-primary-light text-sm text-font-subtle text-opacity-100", children: project.description }, void 0, false, {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 64,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/projects/projects.view.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/projects/projects.view.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Trigger,
        {
          className: t(
            "mt-1 flex items-center gap-1 border-none text-sm",
            isDefaultProject ? "cursor-not-allowed text-font-disabled text-opacity-50" : "text-icon hover:text-font-danger"
          ),
          "aria-label": "Open delete issue dialog",
          title: isDefaultProject ? "Cannot delete default project" : "Delete project",
          disabled: isDefaultProject,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdDeleteOutline, { size: 15 }, void 0, false, {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, this),
            "Delete project"
          ]
        },
        void 0,
        true,
        {
          fileName: "src/app/ui/main/projects/projects.view.tsx",
          lineNumber: 70,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Overlay, {}, void 0, false, {
          fileName: "src/app/ui/main/projects/projects.view.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Delete issue?" }, void 0, false, {
            fileName: "src/app/ui/main/projects/projects.view.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This action is permanent and cannot be undone. Are you sure you want to remove this issue completely?" }, void 0, false, {
            fileName: "src/app/ui/main/projects/projects.view.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Form,
            {
              method: "delete",
              className: "mt-8 flex w-full justify-end gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cancel, { "aria-label": "Cancel", children: "Cancel" }, void 0, false, {
                  fileName: "src/app/ui/main/projects/projects.view.tsx",
                  lineNumber: 101,
                  columnNumber: 15
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
                    fileName: "src/app/ui/main/projects/projects.view.tsx",
                    lineNumber: 104,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "projectId", value: project.id }, void 0, false, {
                  fileName: "src/app/ui/main/projects/projects.view.tsx",
                  lineNumber: 112,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 97,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "src/app/ui/main/projects/projects.view.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/ui/main/projects/projects.view.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
};

// src/app/routes/__main/projects.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  const title = "Jira clone - Projects";
  const description = "See all your projects in one place. Create new ones and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev/projects";
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
    "twitter:image:width": "1297",
    "twitter:image:height": "635",
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-full w-full text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "mt-[200px] mb-6 text-lg", children: "/projects ERROR" }, void 0, false, {
      fileName: "src/app/routes/__main/projects.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", className: "text-primary-main hover:underline", children: "Navigate to home" }, void 0, false, {
      fileName: "src/app/routes/__main/projects.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/__main/projects.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function ProjectsRoute() {
  const { projectsSummary } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectsView, { projectsSummary }, void 0, false, {
    fileName: "src/app/routes/__main/projects.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  ProjectsRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects-WMF2FX2H.js.map
