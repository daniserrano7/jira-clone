import {
  $db6c3485150b8e66$export$1ab7ae714698c4b8
} from "/build/_shared/chunk-7E745BWT.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  _extends
} from "/build/_shared/chunk-KJW57NP4.js";
import {
  require_react_dom
} from "/build/_shared/chunk-JPUJUZ7O.js";
import {
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.7_@types+react@18.2.15_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react.default.useRef(null);
    const itemMap = import_react.default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ import_react.default.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  /* @__PURE__ */ Object.assign(CollectionProvider, {
    displayName: PROVIDER_NAME
  });
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = /* @__PURE__ */ import_react.default.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ import_react.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionSlot, {
    displayName: COLLECTION_SLOT_NAME
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = /* @__PURE__ */ import_react.default.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = import_react.default.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    import_react.default.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ import_react.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionItemSlot, {
    displayName: ITEM_SLOT_NAME
  });
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a3, b3) => orderedNodes.indexOf(a3.ref.current) - orderedNodes.indexOf(b3.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection,
    createCollectionScope
  ];
}

// node_modules/.pnpm/@radix-ui+react-direction@1.0.1_@types+react@18.2.15_react@18.2.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ (0, import_react2.createContext)(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = (0, import_react2.useContext)($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/.pnpm/@radix-ui+react-popper@1.1.2_@types+react-dom@18.2.7_@types+react@18.2.15_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-popper/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@floating-ui+core@1.3.1/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t2) {
  return t2.split("-")[1];
}
function e(t2) {
  return "y" === t2 ? "height" : "width";
}
function n(t2) {
  return t2.split("-")[0];
}
function o(t2) {
  return ["top", "bottom"].includes(n(t2)) ? "x" : "y";
}
function i(i3, r3, a3) {
  let { reference: l3, floating: s3 } = i3;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, m3 = o(r3), u3 = e(m3), g3 = l3[u3] / 2 - s3[u3] / 2, d3 = "x" === m3;
  let p3;
  switch (n(r3)) {
    case "top":
      p3 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p3 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p3 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p3 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p3 = { x: l3.x, y: l3.y };
  }
  switch (t(r3)) {
    case "start":
      p3[m3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p3[m3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p3;
}
var r = async (t2, e2, n3) => {
  const { placement: o3 = "bottom", strategy: r3 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e2));
  let f3 = await l3.getElementRects({ reference: t2, floating: e2, strategy: r3 }), { x: m3, y: u3 } = i(f3, o3, c3), g3 = o3, d3 = {}, p3 = 0;
  for (let n4 = 0; n4 < s3.length; n4++) {
    const { name: a4, fn: h3 } = s3[n4], { x: y3, y: x3, data: w3, reset: v3 } = await h3({ x: m3, y: u3, initialPlacement: o3, placement: g3, strategy: r3, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t2, floating: e2 } });
    m3 = null != y3 ? y3 : m3, u3 = null != x3 ? x3 : u3, d3 = { ...d3, [a4]: { ...d3[a4], ...w3 } }, v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e2, strategy: r3 }) : v3.rects), { x: m3, y: u3 } = i(f3, g3, c3)), n4 = -1);
  }
  return { x: m3, y: u3, placement: g3, strategy: r3, middlewareData: d3 };
};
function a(t2, e2) {
  return "function" == typeof t2 ? t2(e2) : t2;
}
function l(t2) {
  return "number" != typeof t2 ? function(t3) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
  }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function s(t2) {
  return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
}
async function c(t2, e2) {
  var n3;
  void 0 === e2 && (e2 = {});
  const { x: o3, y: i3, platform: r3, rects: c3, elements: f3, strategy: m3 } = t2, { boundary: u3 = "clippingAncestors", rootBoundary: g3 = "viewport", elementContext: d3 = "floating", altBoundary: p3 = false, padding: h3 = 0 } = a(e2, t2), y3 = l(h3), x3 = f3[p3 ? "floating" === d3 ? "reference" : "floating" : d3], w3 = s(await r3.getClippingRect({ element: null == (n3 = await (null == r3.isElement ? void 0 : r3.isElement(x3))) || n3 ? x3 : x3.contextElement || await (null == r3.getDocumentElement ? void 0 : r3.getDocumentElement(f3.floating)), boundary: u3, rootBoundary: g3, strategy: m3 })), v3 = "floating" === d3 ? { ...c3.floating, x: o3, y: i3 } : c3.reference, b3 = await (null == r3.getOffsetParent ? void 0 : r3.getOffsetParent(f3.floating)), A3 = await (null == r3.isElement ? void 0 : r3.isElement(b3)) && await (null == r3.getScale ? void 0 : r3.getScale(b3)) || { x: 1, y: 1 }, R3 = s(r3.convertOffsetParentRelativeRectToViewportRelativeRect ? await r3.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v3, offsetParent: b3, strategy: m3 }) : v3);
  return { top: (w3.top - R3.top + y3.top) / A3.y, bottom: (R3.bottom - w3.bottom + y3.bottom) / A3.y, left: (w3.left - R3.left + y3.left) / A3.x, right: (R3.right - w3.right + y3.right) / A3.x };
}
var f = Math.min;
var m = Math.max;
function u(t2, e2, n3) {
  return m(t2, f(e2, n3));
}
var g = (n3) => ({ name: "arrow", options: n3, async fn(i3) {
  const { x: r3, y: s3, placement: c3, rects: m3, platform: g3, elements: d3 } = i3, { element: p3, padding: h3 = 0 } = a(n3, i3) || {};
  if (null == p3)
    return {};
  const y3 = l(h3), x3 = { x: r3, y: s3 }, w3 = o(c3), v3 = e(w3), b3 = await g3.getDimensions(p3), A3 = "y" === w3, R3 = A3 ? "top" : "left", P3 = A3 ? "bottom" : "right", E3 = A3 ? "clientHeight" : "clientWidth", T2 = m3.reference[v3] + m3.reference[w3] - x3[w3] - m3.floating[v3], D3 = x3[w3] - m3.reference[w3], L3 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(p3));
  let k2 = L3 ? L3[E3] : 0;
  k2 && await (null == g3.isElement ? void 0 : g3.isElement(L3)) || (k2 = d3.floating[E3] || m3.floating[v3]);
  const O3 = T2 / 2 - D3 / 2, B3 = k2 / 2 - b3[v3] / 2 - 1, C3 = f(y3[R3], B3), H2 = f(y3[P3], B3), S2 = C3, F2 = k2 - b3[v3] - H2, M2 = k2 / 2 - b3[v3] / 2 + O3, V2 = u(S2, M2, F2), W2 = null != t(c3) && M2 != V2 && m3.reference[v3] / 2 - (M2 < S2 ? C3 : H2) - b3[v3] / 2 < 0 ? M2 < S2 ? S2 - M2 : F2 - M2 : 0;
  return { [w3]: x3[w3] - W2, data: { [w3]: V2, centerOffset: M2 - V2 + W2 } };
} });
var d = ["top", "right", "bottom", "left"];
var p = d.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []);
var h = { left: "right", right: "left", bottom: "top", top: "bottom" };
function y(t2) {
  return t2.replace(/left|right|bottom|top/g, (t3) => h[t3]);
}
function x(n3, i3, r3) {
  void 0 === r3 && (r3 = false);
  const a3 = t(n3), l3 = o(n3), s3 = e(l3);
  let c3 = "x" === l3 ? a3 === (r3 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
  return i3.reference[s3] > i3.floating[s3] && (c3 = y(c3)), { main: c3, cross: y(c3) };
}
var w = { start: "end", end: "start" };
function v(t2) {
  return t2.replace(/start|end/g, (t3) => w[t3]);
}
var A = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "flip", options: e2, async fn(o3) {
    var i3;
    const { placement: r3, middlewareData: l3, rects: s3, initialPlacement: f3, platform: m3, elements: u3 } = o3, { mainAxis: g3 = true, crossAxis: d3 = true, fallbackPlacements: p3, fallbackStrategy: h3 = "bestFit", fallbackAxisSideDirection: w3 = "none", flipAlignment: b3 = true, ...A3 } = a(e2, o3), R3 = n(r3), P3 = n(f3) === f3, E3 = await (null == m3.isRTL ? void 0 : m3.isRTL(u3.floating)), T2 = p3 || (P3 || !b3 ? [y(f3)] : function(t2) {
      const e3 = y(t2);
      return [v(t2), e3, v(e3)];
    }(f3));
    p3 || "none" === w3 || T2.push(...function(e3, o4, i4, r4) {
      const a3 = t(e3);
      let l4 = function(t2, e4, n3) {
        const o5 = ["left", "right"], i5 = ["right", "left"], r5 = ["top", "bottom"], a4 = ["bottom", "top"];
        switch (t2) {
          case "top":
          case "bottom":
            return n3 ? e4 ? i5 : o5 : e4 ? o5 : i5;
          case "left":
          case "right":
            return e4 ? r5 : a4;
          default:
            return [];
        }
      }(n(e3), "start" === i4, r4);
      return a3 && (l4 = l4.map((t2) => t2 + "-" + a3), o4 && (l4 = l4.concat(l4.map(v)))), l4;
    }(f3, b3, w3, E3));
    const D3 = [f3, ...T2], L3 = await c(o3, A3), k2 = [];
    let O3 = (null == (i3 = l3.flip) ? void 0 : i3.overflows) || [];
    if (g3 && k2.push(L3[R3]), d3) {
      const { main: t2, cross: e3 } = x(r3, s3, E3);
      k2.push(L3[t2], L3[e3]);
    }
    if (O3 = [...O3, { placement: r3, overflows: k2 }], !k2.every((t2) => t2 <= 0)) {
      var B3, C3;
      const t2 = ((null == (B3 = l3.flip) ? void 0 : B3.index) || 0) + 1, e3 = D3[t2];
      if (e3)
        return { data: { index: t2, overflows: O3 }, reset: { placement: e3 } };
      let n3 = null == (C3 = O3.filter((t3) => t3.overflows[0] <= 0).sort((t3, e4) => t3.overflows[1] - e4.overflows[1])[0]) ? void 0 : C3.placement;
      if (!n3)
        switch (h3) {
          case "bestFit": {
            var H2;
            const t3 = null == (H2 = O3.map((t4) => [t4.placement, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e4) => t5 + e4, 0)]).sort((t4, e4) => t4[1] - e4[1])[0]) ? void 0 : H2[0];
            t3 && (n3 = t3);
            break;
          }
          case "initialPlacement":
            n3 = f3;
        }
      if (r3 !== n3)
        return { reset: { placement: n3 } };
    }
    return {};
  } };
};
function R(t2, e2) {
  return { top: t2.top - e2.height, right: t2.right - e2.width, bottom: t2.bottom - e2.height, left: t2.left - e2.width };
}
function P(t2) {
  return d.some((e2) => t2[e2] >= 0);
}
var E = function(t2) {
  return void 0 === t2 && (t2 = {}), { name: "hide", options: t2, async fn(e2) {
    const { rects: n3 } = e2, { strategy: o3 = "referenceHidden", ...i3 } = a(t2, e2);
    switch (o3) {
      case "referenceHidden": {
        const t3 = R(await c(e2, { ...i3, elementContext: "reference" }), n3.reference);
        return { data: { referenceHiddenOffsets: t3, referenceHidden: P(t3) } };
      }
      case "escaped": {
        const t3 = R(await c(e2, { ...i3, altBoundary: true }), n3.floating);
        return { data: { escapedOffsets: t3, escaped: P(t3) } };
      }
      default:
        return {};
    }
  } };
};
var L = function(e2) {
  return void 0 === e2 && (e2 = 0), { name: "offset", options: e2, async fn(i3) {
    const { x: r3, y: l3 } = i3, s3 = await async function(e3, i4) {
      const { placement: r4, platform: l4, elements: s4 } = e3, c3 = await (null == l4.isRTL ? void 0 : l4.isRTL(s4.floating)), f3 = n(r4), m3 = t(r4), u3 = "x" === o(r4), g3 = ["left", "top"].includes(f3) ? -1 : 1, d3 = c3 && u3 ? -1 : 1, p3 = a(i4, e3);
      let { mainAxis: h3, crossAxis: y3, alignmentAxis: x3 } = "number" == typeof p3 ? { mainAxis: p3, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p3 };
      return m3 && "number" == typeof x3 && (y3 = "end" === m3 ? -1 * x3 : x3), u3 ? { x: y3 * d3, y: h3 * g3 } : { x: h3 * g3, y: y3 * d3 };
    }(i3, e2);
    return { x: r3 + s3.x, y: l3 + s3.y, data: s3 };
  } };
};
function k(t2) {
  return "x" === t2 ? "y" : "x";
}
var O = function(t2) {
  return void 0 === t2 && (t2 = {}), { name: "shift", options: t2, async fn(e2) {
    const { x: i3, y: r3, placement: l3 } = e2, { mainAxis: s3 = true, crossAxis: f3 = false, limiter: m3 = { fn: (t3) => {
      let { x: e3, y: n3 } = t3;
      return { x: e3, y: n3 };
    } }, ...g3 } = a(t2, e2), d3 = { x: i3, y: r3 }, p3 = await c(e2, g3), h3 = o(n(l3)), y3 = k(h3);
    let x3 = d3[h3], w3 = d3[y3];
    if (s3) {
      const t3 = "y" === h3 ? "bottom" : "right";
      x3 = u(x3 + p3["y" === h3 ? "top" : "left"], x3, x3 - p3[t3]);
    }
    if (f3) {
      const t3 = "y" === y3 ? "bottom" : "right";
      w3 = u(w3 + p3["y" === y3 ? "top" : "left"], w3, w3 - p3[t3]);
    }
    const v3 = m3.fn({ ...e2, [h3]: x3, [y3]: w3 });
    return { ...v3, data: { x: v3.x - i3, y: v3.y - r3 } };
  } };
};
var B = function(t2) {
  return void 0 === t2 && (t2 = {}), { options: t2, fn(e2) {
    const { x: i3, y: r3, placement: l3, rects: s3, middlewareData: c3 } = e2, { offset: f3 = 0, mainAxis: m3 = true, crossAxis: u3 = true } = a(t2, e2), g3 = { x: i3, y: r3 }, d3 = o(l3), p3 = k(d3);
    let h3 = g3[d3], y3 = g3[p3];
    const x3 = a(f3, e2), w3 = "number" == typeof x3 ? { mainAxis: x3, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x3 };
    if (m3) {
      const t3 = "y" === d3 ? "height" : "width", e3 = s3.reference[d3] - s3.floating[t3] + w3.mainAxis, n3 = s3.reference[d3] + s3.reference[t3] - w3.mainAxis;
      h3 < e3 ? h3 = e3 : h3 > n3 && (h3 = n3);
    }
    if (u3) {
      var v3, b3;
      const t3 = "y" === d3 ? "width" : "height", e3 = ["top", "left"].includes(n(l3)), o3 = s3.reference[p3] - s3.floating[t3] + (e3 && (null == (v3 = c3.offset) ? void 0 : v3[p3]) || 0) + (e3 ? 0 : w3.crossAxis), i4 = s3.reference[p3] + s3.reference[t3] + (e3 ? 0 : (null == (b3 = c3.offset) ? void 0 : b3[p3]) || 0) - (e3 ? w3.crossAxis : 0);
      y3 < o3 ? y3 = o3 : y3 > i4 && (y3 = i4);
    }
    return { [d3]: h3, [p3]: y3 };
  } };
};
var C = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "size", options: e2, async fn(i3) {
    const { placement: r3, rects: l3, platform: s3, elements: u3 } = i3, { apply: g3 = () => {
    }, ...d3 } = a(e2, i3), p3 = await c(i3, d3), h3 = n(r3), y3 = t(r3), x3 = "x" === o(r3), { width: w3, height: v3 } = l3.floating;
    let b3, A3;
    "top" === h3 || "bottom" === h3 ? (b3 = h3, A3 = y3 === (await (null == s3.isRTL ? void 0 : s3.isRTL(u3.floating)) ? "start" : "end") ? "left" : "right") : (A3 = h3, b3 = "end" === y3 ? "top" : "bottom");
    const R3 = v3 - p3[b3], P3 = w3 - p3[A3], E3 = !i3.middlewareData.shift;
    let T2 = R3, D3 = P3;
    if (x3) {
      const t2 = w3 - p3.left - p3.right;
      D3 = y3 || E3 ? f(P3, t2) : t2;
    } else {
      const t2 = v3 - p3.top - p3.bottom;
      T2 = y3 || E3 ? f(R3, t2) : t2;
    }
    if (E3 && !y3) {
      const t2 = m(p3.left, 0), e3 = m(p3.right, 0), n3 = m(p3.top, 0), o3 = m(p3.bottom, 0);
      x3 ? D3 = w3 - 2 * (0 !== t2 || 0 !== e3 ? t2 + e3 : m(p3.left, p3.right)) : T2 = v3 - 2 * (0 !== n3 || 0 !== o3 ? n3 + o3 : m(p3.top, p3.bottom));
    }
    await g3({ ...i3, availableWidth: D3, availableHeight: T2 });
    const L3 = await s3.getDimensions(u3.floating);
    return w3 !== L3.width || v3 !== L3.height ? { reset: { rects: true } } : {};
  } };
};

// node_modules/.pnpm/@floating-ui+dom@1.4.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n2(t2) {
  var e2;
  return (null == t2 || null == (e2 = t2.ownerDocument) ? void 0 : e2.defaultView) || window;
}
function o2(t2) {
  return n2(t2).getComputedStyle(t2);
}
function i2(t2) {
  return t2 instanceof n2(t2).Node;
}
function r2(t2) {
  return i2(t2) ? (t2.nodeName || "").toLowerCase() : "#document";
}
function c2(t2) {
  return t2 instanceof HTMLElement || t2 instanceof n2(t2).HTMLElement;
}
function l2(t2) {
  return "undefined" != typeof ShadowRoot && (t2 instanceof n2(t2).ShadowRoot || t2 instanceof ShadowRoot);
}
function s2(t2) {
  const { overflow: e2, overflowX: n3, overflowY: i3, display: r3 } = o2(t2);
  return /auto|scroll|overlay|hidden|clip/.test(e2 + i3 + n3) && !["inline", "contents"].includes(r3);
}
function f2(t2) {
  return ["table", "td", "th"].includes(r2(t2));
}
function u2(t2) {
  const e2 = a2(), n3 = o2(t2);
  return "none" !== n3.transform || "none" !== n3.perspective || !!n3.containerType && "normal" !== n3.containerType || !e2 && !!n3.backdropFilter && "none" !== n3.backdropFilter || !e2 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective", "filter"].some((t3) => (n3.willChange || "").includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => (n3.contain || "").includes(t3));
}
function a2() {
  return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function d2(t2) {
  return ["html", "body", "#document"].includes(r2(t2));
}
var h2 = Math.min;
var p2 = Math.max;
var m2 = Math.round;
var g2 = Math.floor;
var y2 = (t2) => ({ x: t2, y: t2 });
function w2(t2) {
  const e2 = o2(t2);
  let n3 = parseFloat(e2.width) || 0, i3 = parseFloat(e2.height) || 0;
  const r3 = c2(t2), l3 = r3 ? t2.offsetWidth : n3, s3 = r3 ? t2.offsetHeight : i3, f3 = m2(n3) !== l3 || m2(i3) !== s3;
  return f3 && (n3 = l3, i3 = s3), { width: n3, height: i3, $: f3 };
}
function x2(t2) {
  return t2 instanceof Element || t2 instanceof n2(t2).Element;
}
function v2(t2) {
  return x2(t2) ? t2 : t2.contextElement;
}
function b2(t2) {
  const e2 = v2(t2);
  if (!c2(e2))
    return y2(1);
  const n3 = e2.getBoundingClientRect(), { width: o3, height: i3, $: r3 } = w2(e2);
  let l3 = (r3 ? m2(n3.width) : n3.width) / o3, s3 = (r3 ? m2(n3.height) : n3.height) / i3;
  return l3 && Number.isFinite(l3) || (l3 = 1), s3 && Number.isFinite(s3) || (s3 = 1), { x: l3, y: s3 };
}
var L2 = y2(0);
function T(t2) {
  const e2 = n2(t2);
  return a2() && e2.visualViewport ? { x: e2.visualViewport.offsetLeft, y: e2.visualViewport.offsetTop } : L2;
}
function R2(e2, o3, i3, r3) {
  void 0 === o3 && (o3 = false), void 0 === i3 && (i3 = false);
  const c3 = e2.getBoundingClientRect(), l3 = v2(e2);
  let s3 = y2(1);
  o3 && (r3 ? x2(r3) && (s3 = b2(r3)) : s3 = b2(e2));
  const f3 = function(t2, e3, o4) {
    return void 0 === e3 && (e3 = false), !(!o4 || e3 && o4 !== n2(t2)) && e3;
  }(l3, i3, r3) ? T(l3) : y2(0);
  let u3 = (c3.left + f3.x) / s3.x, a3 = (c3.top + f3.y) / s3.y, d3 = c3.width / s3.x, h3 = c3.height / s3.y;
  if (l3) {
    const t2 = n2(l3), e3 = r3 && x2(r3) ? n2(r3) : r3;
    let o4 = t2.frameElement;
    for (; o4 && r3 && e3 !== t2; ) {
      const t3 = b2(o4), e4 = o4.getBoundingClientRect(), i4 = getComputedStyle(o4), r4 = e4.left + (o4.clientLeft + parseFloat(i4.paddingLeft)) * t3.x, c4 = e4.top + (o4.clientTop + parseFloat(i4.paddingTop)) * t3.y;
      u3 *= t3.x, a3 *= t3.y, d3 *= t3.x, h3 *= t3.y, u3 += r4, a3 += c4, o4 = n2(o4).frameElement;
    }
  }
  return s({ width: d3, height: h3, x: u3, y: a3 });
}
function E2(t2) {
  return x2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function S(t2) {
  var e2;
  return null == (e2 = (i2(t2) ? t2.ownerDocument : t2.document) || window.document) ? void 0 : e2.documentElement;
}
function C2(t2) {
  return R2(S(t2)).left + E2(t2).scrollLeft;
}
function F(t2) {
  if ("html" === r2(t2))
    return t2;
  const e2 = t2.assignedSlot || t2.parentNode || l2(t2) && t2.host || S(t2);
  return l2(e2) ? e2.host : e2;
}
function O2(t2) {
  const e2 = F(t2);
  return d2(e2) ? t2.ownerDocument ? t2.ownerDocument.body : t2.body : c2(e2) && s2(e2) ? e2 : O2(e2);
}
function D2(t2, e2) {
  var o3;
  void 0 === e2 && (e2 = []);
  const i3 = O2(t2), r3 = i3 === (null == (o3 = t2.ownerDocument) ? void 0 : o3.body), c3 = n2(i3);
  return r3 ? e2.concat(c3, c3.visualViewport || [], s2(i3) ? i3 : []) : e2.concat(i3, D2(i3));
}
function H(e2, i3, r3) {
  let l3;
  if ("viewport" === i3)
    l3 = function(t2, e3) {
      const o3 = n2(t2), i4 = S(t2), r4 = o3.visualViewport;
      let c3 = i4.clientWidth, l4 = i4.clientHeight, s3 = 0, f3 = 0;
      if (r4) {
        c3 = r4.width, l4 = r4.height;
        const t3 = a2();
        (!t3 || t3 && "fixed" === e3) && (s3 = r4.offsetLeft, f3 = r4.offsetTop);
      }
      return { width: c3, height: l4, x: s3, y: f3 };
    }(e2, r3);
  else if ("document" === i3)
    l3 = function(t2) {
      const e3 = S(t2), n3 = E2(t2), i4 = t2.ownerDocument.body, r4 = p2(e3.scrollWidth, e3.clientWidth, i4.scrollWidth, i4.clientWidth), c3 = p2(e3.scrollHeight, e3.clientHeight, i4.scrollHeight, i4.clientHeight);
      let l4 = -n3.scrollLeft + C2(t2);
      const s3 = -n3.scrollTop;
      return "rtl" === o2(i4).direction && (l4 += p2(e3.clientWidth, i4.clientWidth) - r4), { width: r4, height: c3, x: l4, y: s3 };
    }(S(e2));
  else if (x2(i3))
    l3 = function(t2, e3) {
      const n3 = R2(t2, true, "fixed" === e3), o3 = n3.top + t2.clientTop, i4 = n3.left + t2.clientLeft, r4 = c2(t2) ? b2(t2) : y2(1);
      return { width: t2.clientWidth * r4.x, height: t2.clientHeight * r4.y, x: i4 * r4.x, y: o3 * r4.y };
    }(i3, r3);
  else {
    const t2 = T(e2);
    l3 = { ...i3, x: i3.x - t2.x, y: i3.y - t2.y };
  }
  return s(l3);
}
function W(t2, e2) {
  const n3 = F(t2);
  return !(n3 === e2 || !x2(n3) || d2(n3)) && ("fixed" === o2(n3).position || W(n3, e2));
}
function M(t2, e2, n3) {
  const o3 = c2(e2), i3 = S(e2), l3 = "fixed" === n3, f3 = R2(t2, true, l3, e2);
  let u3 = { scrollLeft: 0, scrollTop: 0 };
  const a3 = y2(0);
  if (o3 || !o3 && !l3)
    if (("body" !== r2(e2) || s2(i3)) && (u3 = E2(e2)), c2(e2)) {
      const t3 = R2(e2, true, l3, e2);
      a3.x = t3.x + e2.clientLeft, a3.y = t3.y + e2.clientTop;
    } else
      i3 && (a3.x = C2(i3));
  return { x: f3.left + u3.scrollLeft - a3.x, y: f3.top + u3.scrollTop - a3.y, width: f3.width, height: f3.height };
}
function z(t2, e2) {
  return c2(t2) && "fixed" !== o2(t2).position ? e2 ? e2(t2) : t2.offsetParent : null;
}
function P2(t2, e2) {
  const i3 = n2(t2);
  if (!c2(t2))
    return i3;
  let l3 = z(t2, e2);
  for (; l3 && f2(l3) && "static" === o2(l3).position; )
    l3 = z(l3, e2);
  return l3 && ("html" === r2(l3) || "body" === r2(l3) && "static" === o2(l3).position && !u2(l3)) ? i3 : l3 || function(t3) {
    let e3 = F(t3);
    for (; c2(e3) && !d2(e3); ) {
      if (u2(e3))
        return e3;
      e3 = F(e3);
    }
    return null;
  }(t2) || i3;
}
var V = { convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e2, offsetParent: n3, strategy: o3 } = t2;
  const i3 = c2(n3), l3 = S(n3);
  if (n3 === l3)
    return e2;
  let f3 = { scrollLeft: 0, scrollTop: 0 }, u3 = y2(1);
  const a3 = y2(0);
  if ((i3 || !i3 && "fixed" !== o3) && (("body" !== r2(n3) || s2(l3)) && (f3 = E2(n3)), c2(n3))) {
    const t3 = R2(n3);
    u3 = b2(n3), a3.x = t3.x + n3.clientLeft, a3.y = t3.y + n3.clientTop;
  }
  return { width: e2.width * u3.x, height: e2.height * u3.y, x: e2.x * u3.x - f3.scrollLeft * u3.x + a3.x, y: e2.y * u3.y - f3.scrollTop * u3.y + a3.y };
}, getDocumentElement: S, getClippingRect: function(t2) {
  let { element: e2, boundary: n3, rootBoundary: i3, strategy: c3 } = t2;
  const l3 = [..."clippingAncestors" === n3 ? function(t3, e3) {
    const n4 = e3.get(t3);
    if (n4)
      return n4;
    let i4 = D2(t3).filter((t4) => x2(t4) && "body" !== r2(t4)), c4 = null;
    const l4 = "fixed" === o2(t3).position;
    let f4 = l4 ? F(t3) : t3;
    for (; x2(f4) && !d2(f4); ) {
      const e4 = o2(f4), n5 = u2(f4);
      n5 || "fixed" !== e4.position || (c4 = null), (l4 ? !n5 && !c4 : !n5 && "static" === e4.position && c4 && ["absolute", "fixed"].includes(c4.position) || s2(f4) && !n5 && W(t3, f4)) ? i4 = i4.filter((t4) => t4 !== f4) : c4 = e4, f4 = F(f4);
    }
    return e3.set(t3, i4), i4;
  }(e2, this._c) : [].concat(n3), i3], f3 = l3[0], a3 = l3.reduce((t3, n4) => {
    const o3 = H(e2, n4, c3);
    return t3.top = p2(o3.top, t3.top), t3.right = h2(o3.right, t3.right), t3.bottom = h2(o3.bottom, t3.bottom), t3.left = p2(o3.left, t3.left), t3;
  }, H(e2, f3, c3));
  return { width: a3.right - a3.left, height: a3.bottom - a3.top, x: a3.left, y: a3.top };
}, getOffsetParent: P2, getElementRects: async function(t2) {
  let { reference: e2, floating: n3, strategy: o3 } = t2;
  const i3 = this.getOffsetParent || P2, r3 = this.getDimensions;
  return { reference: M(e2, await i3(n3), o3), floating: { x: 0, y: 0, ...await r3(n3) } };
}, getClientRects: function(t2) {
  return Array.from(t2.getClientRects());
}, getDimensions: function(t2) {
  return w2(t2);
}, getScale: b2, isElement: x2, isRTL: function(t2) {
  return "rtl" === getComputedStyle(t2).direction;
} };
function A2(t2, e2, n3, o3) {
  void 0 === o3 && (o3 = {});
  const { ancestorScroll: i3 = true, ancestorResize: r3 = true, elementResize: c3 = "function" == typeof ResizeObserver, layoutShift: l3 = "function" == typeof IntersectionObserver, animationFrame: s3 = false } = o3, f3 = v2(t2), u3 = i3 || r3 ? [...f3 ? D2(f3) : [], ...D2(e2)] : [];
  u3.forEach((t3) => {
    i3 && t3.addEventListener("scroll", n3, { passive: true }), r3 && t3.addEventListener("resize", n3);
  });
  const a3 = f3 && l3 ? function(t3, e3) {
    let n4, o4 = null;
    const i4 = S(t3);
    function r4() {
      clearTimeout(n4), o4 && o4.disconnect(), o4 = null;
    }
    return function c4(l4, s4) {
      void 0 === l4 && (l4 = false), void 0 === s4 && (s4 = 1), r4();
      const { left: f4, top: u4, width: a4, height: d4 } = t3.getBoundingClientRect();
      if (l4 || e3(), !a4 || !d4)
        return;
      const m4 = { rootMargin: -g2(u4) + "px " + -g2(i4.clientWidth - (f4 + a4)) + "px " + -g2(i4.clientHeight - (u4 + d4)) + "px " + -g2(f4) + "px", threshold: p2(0, h2(1, s4)) || 1 };
      let y4 = true;
      function w4(t4) {
        const e4 = t4[0].intersectionRatio;
        if (e4 !== s4) {
          if (!y4)
            return c4();
          e4 ? c4(false, e4) : n4 = setTimeout(() => {
            c4(false, 1e-7);
          }, 100);
        }
        y4 = false;
      }
      try {
        o4 = new IntersectionObserver(w4, { ...m4, root: i4.ownerDocument });
      } catch (t4) {
        o4 = new IntersectionObserver(w4, m4);
      }
      o4.observe(t3);
    }(true), r4;
  }(f3, n3) : null;
  let d3, m3 = -1, y3 = null;
  c3 && (y3 = new ResizeObserver((t3) => {
    let [o4] = t3;
    o4 && o4.target === f3 && y3 && (y3.unobserve(e2), cancelAnimationFrame(m3), m3 = requestAnimationFrame(() => {
      y3 && y3.observe(e2);
    })), n3();
  }), f3 && !s3 && y3.observe(f3), y3.observe(e2));
  let w3 = s3 ? R2(t2) : null;
  return s3 && function e3() {
    const o4 = R2(t2);
    !w3 || o4.x === w3.x && o4.y === w3.y && o4.width === w3.width && o4.height === w3.height || n3();
    w3 = o4, d3 = requestAnimationFrame(e3);
  }(), n3(), () => {
    u3.forEach((t3) => {
      i3 && t3.removeEventListener("scroll", n3), r3 && t3.removeEventListener("resize", n3);
    }), a3 && a3(), y3 && y3.disconnect(), y3 = null, s3 && cancelAnimationFrame(d3);
  };
}
var B2 = (t2, n3, o3) => {
  const i3 = /* @__PURE__ */ new Map(), r3 = { platform: V, ...o3 }, c3 = { ...r3.platform, _c: i3 };
  return r(t2, n3, { ...r3, platform: c3 });
};

// node_modules/.pnpm/@floating-ui+react-dom@2.0.1_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var React = __toESM(require_react());
var import_react3 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var arrow = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return g({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      } else if (element) {
        return g({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? import_react3.useLayoutEffect : import_react3.useEffect;
function deepEqual(a3, b3) {
  if (a3 === b3) {
    return true;
  }
  if (typeof a3 !== typeof b3) {
    return false;
  }
  if (typeof a3 === "function" && a3.toString() === b3.toString()) {
    return true;
  }
  let length, i3, keys;
  if (a3 && b3 && typeof a3 == "object") {
    if (Array.isArray(a3)) {
      length = a3.length;
      if (length != b3.length)
        return false;
      for (i3 = length; i3-- !== 0; ) {
        if (!deepEqual(a3[i3], b3[i3])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a3);
    length = keys.length;
    if (length !== Object.keys(b3).length) {
      return false;
    }
    for (i3 = length; i3-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b3, keys[i3])) {
        return false;
      }
    }
    for (i3 = length; i3-- !== 0; ) {
      const key = keys[i3];
      if (key === "_owner" && a3.$$typeof) {
        continue;
      }
      if (!deepEqual(a3[key], b3[key])) {
        return false;
      }
    }
    return true;
  }
  return a3 !== a3 && b3 !== b3;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback((node) => {
    if (node != referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, [_setReference]);
  const setFloating = React.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, [_setFloating]);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    B2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      } else {
        update();
      }
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x3 = roundByDPR(elements.floating, data.x);
    const y3 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x3 + "px, " + y3 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x3,
      top: y3
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

// node_modules/.pnpm/@radix-ui+react-arrow@1.0.3_@types+react-dom@18.2.7_@types+react@18.2.15_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-arrow/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
var $7e8f5cd07187803e$export$21b07c8f274aebd5 = /* @__PURE__ */ (0, import_react4.forwardRef)((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ (0, import_react4.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends({}, arrowProps, {
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), props.asChild ? children : /* @__PURE__ */ (0, import_react4.createElement)("polygon", {
    points: "0,0 30,0 15,10"
  }));
});
var $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;

// node_modules/.pnpm/@radix-ui+react-popper@1.1.2_@types+react-dom@18.2.7_@types+react@18.2.15_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-popper/dist/index.mjs
var $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
var [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
var [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
var $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = (0, import_react5.useState)(null);
  return /* @__PURE__ */ (0, import_react5.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
var $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
var $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = (0, import_react5.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react5.useEffect)(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ (0, import_react5.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
var $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
var [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
var $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, avoidCollisions = true, onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = (0, import_react5.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow2, setArrow] = (0, import_react5.useState)(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow2);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: A2,
    elements: {
      reference: context.anchor
    },
    middleware: [
      L({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions && O({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? B() : void 0,
        ...detectOverflowOptions
      }),
      avoidCollisions && A({
        ...detectOverflowOptions
      }),
      C({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow2 && arrow({
        element: arrow2,
        padding: arrowPadding
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached && E({
        strategy: "referenceHidden"
      })
    ]
  });
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPositioned)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPositioned,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = (0, import_react5.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  return /* @__PURE__ */ (0, import_react5.createElement)("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, /* @__PURE__ */ (0, import_react5.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, /* @__PURE__ */ (0, import_react5.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-side": placedSide,
    "data-align": placedAlign
  }, contentProps, {
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPositioned ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  }))));
});
var $cf1ac5d9fe0e8206$var$ARROW_NAME = "PopperArrow";
var $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = /* @__PURE__ */ (0, import_react5.forwardRef)(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd02(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
  const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ (0, import_react5.createElement)("span", {
      ref: contentContext.onArrowChange,
      style: {
        position: "absolute",
        left: contentContext.arrowX,
        top: contentContext.arrowY,
        [baseSide]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[contentContext.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: `rotate(180deg)`,
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[contentContext.placedSide],
        visibility: contentContext.shouldHideArrow ? "hidden" : void 0
      }
    }, /* @__PURE__ */ (0, import_react5.createElement)($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends({}, arrowProps, {
      ref: forwardedRef,
      style: {
        ...arrowProps.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x3 = "";
    let y3 = "";
    if (placedSide === "bottom") {
      x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y3 = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y3 = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x3 = `${-arrowHeight}px`;
      y3 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x3 = `${rects.floating.width + arrowHeight}px`;
      y3 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x: x3,
        y: y3
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
var $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
var $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
var $cf1ac5d9fe0e8206$export$21b07c8f274aebd5 = $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0;

export {
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $f631663db3294ace$export$b39126d51d94e6f3,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
  $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
  $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
  $cf1ac5d9fe0e8206$export$21b07c8f274aebd5
};
//# sourceMappingURL=/build/_shared/chunk-TTKFU63G.js.map
