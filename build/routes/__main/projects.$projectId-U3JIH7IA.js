import {
  RiArrowDropLeftLine
} from "/build/_shared/chunk-DKH7XA3G.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  BsCloudSlash,
  BsListNested
} from "/build/_shared/chunk-W6GYYNIT.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  Error404
} from "/build/_shared/chunk-GNXEGRWU.js";
import {
  HiOutlineViewBoards
} from "/build/_shared/chunk-IBV4GJWC.js";
import {
  GenIcon
} from "/build/_shared/chunk-L3QT7SD6.js";
import {
  t
} from "/build/_shared/chunk-TUGJO2L3.js";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useLocation
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
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId.tsx
var import_node = __toESM(require_node());

// src/app/ui/main/project/sidebar.tsx
var import_react = __toESM(require_react());

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/im/index.esm.js
function ImStatsDots(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M2 14h14v2h-16v-16h2zM4.5 13c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.044 0 0.088 0.002 0.131 0.006l1.612-2.687c-0.154-0.235-0.243-0.517-0.243-0.819 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.302-0.090 0.583-0.243 0.819l1.612 2.687c0.043-0.004 0.087-0.006 0.131-0.006 0.033 0 0.066 0.001 0.099 0.004l2.662-4.658c-0.165-0.241-0.261-0.532-0.261-0.845 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5-0.033 0-0.066-0.001-0.099-0.004l-2.662 4.658c0.165 0.241 0.261 0.532 0.261 0.845 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.302 0.090-0.583 0.243-0.819l-1.612-2.687c-0.043 0.004-0.087 0.006-0.131 0.006s-0.088-0.002-0.131-0.006l-1.612 2.687c0.154 0.235 0.243 0.517 0.243 0.819 0 0.828-0.672 1.5-1.5 1.5z" } }] })(props);
}

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/tb/index.esm.js
function TbError404(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" } }, { "tag": "path", "attr": { "d": "M3 7v4a1 1 0 0 0 1 1h3" } }, { "tag": "path", "attr": { "d": "M7 7v10" } }, { "tag": "path", "attr": { "d": "M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" } }, { "tag": "path", "attr": { "d": "M17 7v4a1 1 0 0 0 1 1h3" } }, { "tag": "path", "attr": { "d": "M21 7v10" } }] })(props);
}

// src/app/ui/main/project/sidebar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Sidebar = (props) => {
  const { projectName, projectDescription, projectImage } = props;
  const [isOpen, setIsOpen] = (0, import_react.useState)(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "relative flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: t(
          "flex h-full max-w-0 flex-col whitespace-nowrap bg-elevation-surface-sunken opacity-0 duration-300 ease-out",
          isOpen && "w-[240px] max-w-[240px] whitespace-normal opacity-100"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex w-full items-start px-5 py-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: projectImage,
                width: 28,
                height: 28,
                alt: "project",
                className: "rounded-[3px]"
              },
              void 0,
              false,
              {
                fileName: "src/app/ui/main/project/sidebar.tsx",
                lineNumber: 27,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 w-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-primary-bold text-lg leading-4", children: projectName }, void 0, false, {
                fileName: "src/app/ui/main/project/sidebar.tsx",
                lineNumber: 35,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 line-clamp-2 whitespace-normal font-primary-light text-sm leading-4", children: projectDescription }, void 0, false, {
                fileName: "src/app/ui/main/project/sidebar.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "src/app/ui/main/project/sidebar.tsx",
              lineNumber: 34,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/sidebar.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex-grow p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex-grow", children: navItems.map(({ href, name, icon, disabled }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            NavItem,
            {
              href,
              icon,
              name,
              disabled
            },
            href,
            false,
            {
              fileName: "src/app/ui/main/project/sidebar.tsx",
              lineNumber: 44,
              columnNumber: 15
            },
            this
          )) }, void 0, false, {
            fileName: "src/app/ui/main/project/sidebar.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "src/app/ui/main/project/sidebar.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/project/sidebar.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: t("r-0 relative z-10 h-full w-3", isOpen ? "ml-0" : "ml-7"),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -left-[3px] h-full w-[3px] bg-gradient-to-l from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.0)] opacity-50" }, void 0, false, {
            fileName: "src/app/ui/main/project/sidebar.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: toggleSidebar,
              className: t(
                "absolute -left-[12px] mt-6 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full border-none bg-elevation-surface-raised shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] transition-transform delay-150 duration-200 ease-in hover:bg-icon-brand hover:text-font-inverse",
                !isOpen && "rotate-180"
              ),
              "aria-label": "Toggle sidebar",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiArrowDropLeftLine, { size: 24 }, void 0, false, {
                fileName: "src/app/ui/main/project/sidebar.tsx",
                lineNumber: 67,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/sidebar.tsx",
              lineNumber: 59,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/project/sidebar.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/sidebar.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var navItems = [
  {
    href: "board",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiOutlineViewBoards, { size: 24 }, void 0, false, {
      fileName: "src/app/ui/main/project/sidebar.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this),
    name: "Board"
  },
  {
    href: "analytics",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImStatsDots, { size: 20 }, void 0, false, {
      fileName: "src/app/ui/main/project/sidebar.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this),
    name: "Analytics"
  },
  {
    href: "backlog",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsListNested, { size: 24 }, void 0, false, {
      fileName: "src/app/ui/main/project/sidebar.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this),
    name: "Backlog",
    disabled: true
  },
  {
    href: "server-error",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsCloudSlash, { size: 24 }, void 0, false, {
      fileName: "src/app/ui/main/project/sidebar.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this),
    name: "Server error"
  },
  {
    href: "not-found",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TbError404, { size: 24 }, void 0, false, {
      fileName: "src/app/ui/main/project/sidebar.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this),
    name: "Not found"
  }
];
var NavItem = ({ href, icon, name, disabled }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    NavLink,
    {
      to: disabled ? "#" : href,
      className: ({ isActive }) => t(
        "group flex w-full cursor-pointer items-center gap-4 rounded border-none p-2 text-sm",
        isActive && !disabled ? "bg-background-neutral text-font-brand" : "text-font-subtlest",
        disabled ? "!cursor-not-allowed hover:bg-transparent" : "hover:bg-background-neutral"
      ),
      children: [
        icon,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: t(disabled && "group-hover:hidden"), children: name }, void 0, false, {
          fileName: "src/app/ui/main/project/sidebar.tsx",
          lineNumber: 126,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "span",
          {
            className: t(
              "itmes-center bg-grey-300 -ml-2 hidden rounded px-2 py-1 text-2xs uppercase disabled:hover:flex",
              disabled && "group-hover:block"
            ),
            children: "Not implemented"
          },
          void 0,
          false,
          {
            fileName: "src/app/ui/main/project/sidebar.tsx",
            lineNumber: 127,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "src/app/ui/main/project/sidebar.tsx",
      lineNumber: 111,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/project.view.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var sectionTitles = {
  board: "Board",
  analytics: "Analytics",
  backlog: "Backlog"
};
var defaultSection = "board";
var ProjectView = ({
  name,
  description,
  image
}) => {
  const location = useLocation();
  const section = location.pathname.split("/").slice(-1)[0];
  const sectionTitle = sectionTitles[section] || sectionTitles[defaultSection];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex h-full flex-grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Sidebar,
      {
        projectName: name,
        projectDescription: description || "Description undefined",
        projectImage: image || "/images/default-project.png"
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "z-10 flex h-full w-full flex-grow flex-col py-6 px-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/projects", className: "underline underline-offset-[3px]", children: "Projects" }, void 0, false, {
          fileName: "src/app/ui/main/project/project.view.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "mx-2", children: "/" }, void 0, false, {
          fileName: "src/app/ui/main/project/project.view.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: name }, void 0, false, {
          fileName: "src/app/ui/main/project/project.view.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "mt-4 mb-5 font-primary-black text-2xl", children: sectionTitle }, void 0, false, {
          fileName: "src/app/ui/main/project/project.view.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/project.view.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/project.view.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// src/app/routes/__main/projects.$projectId.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  const { projectSummary } = data;
  const title = `Jira clone - ${projectSummary.name || "Project"}`;
  const description = "See all your projects in one place. Create new ones and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = `https://jira-clone.fly.dev/projects/${projectSummary.id}`;
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
  const errorMessage = "The Project page failed. Navigate to the projects page";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Error500, { message: errorMessage, href: "/projects" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const errorMessage = "Project not found. Navigate to the projects page";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Error404, { message: errorMessage, href: "/projects" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
function ProjectRoute() {
  const { projectSummary } = useLoaderData();
  const { name, description, image } = projectSummary;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectView, { name, description, image }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  ProjectRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId-U3JIH7IA.js.map
