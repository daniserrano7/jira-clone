import {
  IssuePanel
} from "/build/_shared/chunk-7CSLLUNP.js";
import "/build/_shared/chunk-E2SOKFYO.js";
import "/build/_shared/chunk-L3DOVY7A.js";
import "/build/_shared/chunk-R3UI3B5K.js";
import "/build/_shared/chunk-MFSC2VCD.js";
import "/build/_shared/chunk-NCHMJE4I.js";
import "/build/_shared/chunk-ZGECWANN.js";
import "/build/_shared/chunk-PCSK3WXQ.js";
import "/build/_shared/chunk-7RER4I7C.js";
import {
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff
} from "/build/_shared/chunk-4NIBFM3Q.js";
import "/build/_shared/chunk-HMV63GZB.js";
import "/build/_shared/chunk-INOV5TKW.js";
import "/build/_shared/chunk-TTKFU63G.js";
import "/build/_shared/chunk-Z2HWOQXD.js";
import "/build/_shared/chunk-BZEEQDWJ.js";
import "/build/_shared/chunk-7E745BWT.js";
import "/build/_shared/chunk-KIAY75M2.js";
import "/build/_shared/chunk-5KGVAOR3.js";
import "/build/_shared/chunk-KJW57NP4.js";
import "/build/_shared/chunk-JPUJUZ7O.js";
import "/build/_shared/chunk-DKH7XA3G.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  Error404
} from "/build/_shared/chunk-GNXEGRWU.js";
import "/build/_shared/chunk-IBV4GJWC.js";
import "/build/_shared/chunk-L3QT7SD6.js";
import {
  t
} from "/build/_shared/chunk-TUGJO2L3.js";
import {
  useLoaderData,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-OBXMDE47.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import "/build/_shared/chunk-PL7FAYB3.js";
import "/build/_shared/chunk-LFBH4RTF.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  const { issue, projectId } = data;
  const title = `Jira clone - ${issue.name}`;
  const description = issue.description || "No description";
  const image = "https://jira-clone.fly.dev/static/images/readme/issue-panel.png";
  const url = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/${issue.name}`;
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
    "twitter:image:width": "1452",
    "twitter:image:height": "865",
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
function CatchBoundary() {
  const location = useLocation();
  const navigate = useNavigate();
  const boardUrl = location.pathname.split("/issue")[0];
  const handleProgrammaticNavigation = () => {
    navigate(boardUrl);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
    {
      className: t(
        "absolute left-0 top-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto bg-black bg-opacity-50 px-[40px] py-[40px]",
        "radix-state-open:animate-fade-in duration-300"
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
        {
          onPointerDownOutside: handleProgrammaticNavigation,
          className: t(
            "bg-background-surface relative z-50 flex rounded-md px-20 py-12 shadow-lg flex-center",
            "duration-300 radix-state-open:animate-slide-up"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Error404,
            {
              message: "This issue does not exist. Go to the board page",
              href: boardUrl
            },
            void 0,
            false,
            {
              fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
              lineNumber: 184,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
          lineNumber: 177,
          columnNumber: 11
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
      lineNumber: 171,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
    lineNumber: 170,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
    lineNumber: 169,
    columnNumber: 5
  }, this);
}
function IssuePanelRoute() {
  const { issue } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IssuePanel, { issue }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
    lineNumber: 197,
    columnNumber: 10
  }, this);
}
export {
  CatchBoundary,
  IssuePanelRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/board/issue/$issueId-7RAJBLHC.js.map
