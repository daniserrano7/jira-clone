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
import "/build/_shared/chunk-4NIBFM3Q.js";
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
import "/build/_shared/chunk-IBV4GJWC.js";
import "/build/_shared/chunk-L3QT7SD6.js";
import "/build/_shared/chunk-TUGJO2L3.js";
import "/build/_shared/chunk-OBXMDE47.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import "/build/_shared/chunk-PL7FAYB3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId/board/issue/new.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  const { projectId } = data;
  const title = `Jira clone - Create issue`;
  const description = "Create new issue, edit it and and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/issue-panel.png";
  const url = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/new`;
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
function IssuePanelRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IssuePanel, {}, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/new.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}
export {
  IssuePanelRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/board/issue/new-QODCBL7V.js.map
