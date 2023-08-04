import {
  require_react
} from "/build/_shared/chunk-3EDKF3MS.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/.pnpm/react-toastify@9.1.3_react-dom@18.2.0_react@18.2.0/node_modules/react-toastify/dist/react-toastify.esm.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2))
      for (t2 = 0; t2 < e2.length; t2++)
        e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    else
      for (t2 in e2)
        e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
    (e2 = arguments[f2++]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var clsx_m_default = clsx;

// node_modules/.pnpm/react-toastify@9.1.3_react-dom@18.2.0_react@18.2.0/node_modules/react-toastify/dist/react-toastify.esm.mjs
"use client";
var u = (t2) => "number" == typeof t2 && !isNaN(t2);
var d = (t2) => "string" == typeof t2;
var p = (t2) => "function" == typeof t2;
var m = (t2) => d(t2) || p(t2) ? t2 : null;
var f = (t2) => (0, import_react.isValidElement)(t2) || d(t2) || p(t2) || u(t2);
function g(t2, e2, n2) {
  void 0 === n2 && (n2 = 300);
  const { scrollHeight: o2, style: s2 } = t2;
  requestAnimationFrame(() => {
    s2.minHeight = "initial", s2.height = o2 + "px", s2.transition = `all ${n2}ms`, requestAnimationFrame(() => {
      s2.height = "0", s2.padding = "0", s2.margin = "0", setTimeout(e2, n2);
    });
  });
}
function h(e2) {
  let { enter: a2, exit: r3, appendPosition: i2 = false, collapse: l2 = true, collapseDuration: c = 300 } = e2;
  return function(e3) {
    let { children: u2, position: d2, preventExitTransition: p2, done: m2, nodeRef: f2, isIn: h2 } = e3;
    const y2 = i2 ? `${a2}--${d2}` : a2, v2 = i2 ? `${r3}--${d2}` : r3, T2 = (0, import_react.useRef)(0);
    return (0, import_react.useLayoutEffect)(() => {
      const t2 = f2.current, e4 = y2.split(" "), n2 = (o2) => {
        o2.target === f2.current && (t2.dispatchEvent(new Event("d")), t2.removeEventListener("animationend", n2), t2.removeEventListener("animationcancel", n2), 0 === T2.current && "animationcancel" !== o2.type && t2.classList.remove(...e4));
      };
      t2.classList.add(...e4), t2.addEventListener("animationend", n2), t2.addEventListener("animationcancel", n2);
    }, []), (0, import_react.useEffect)(() => {
      const t2 = f2.current, e4 = () => {
        t2.removeEventListener("animationend", e4), l2 ? g(t2, m2, c) : m2();
      };
      h2 || (p2 ? e4() : (T2.current = 1, t2.className += ` ${v2}`, t2.addEventListener("animationend", e4)));
    }, [h2]), import_react.default.createElement(import_react.default.Fragment, null, u2);
  };
}
function y(t2, e2) {
  return null != t2 ? { content: t2.content, containerId: t2.props.containerId, id: t2.props.toastId, theme: t2.props.theme, type: t2.props.type, data: t2.props.data || {}, isLoading: t2.props.isLoading, icon: t2.props.icon, status: e2 } : {};
}
var v = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(t2, e2) {
  return this.list.has(t2) || this.list.set(t2, []), this.list.get(t2).push(e2), this;
}, off(t2, e2) {
  if (e2) {
    const n2 = this.list.get(t2).filter((t3) => t3 !== e2);
    return this.list.set(t2, n2), this;
  }
  return this.list.delete(t2), this;
}, cancelEmit(t2) {
  const e2 = this.emitQueue.get(t2);
  return e2 && (e2.forEach(clearTimeout), this.emitQueue.delete(t2)), this;
}, emit(t2) {
  this.list.has(t2) && this.list.get(t2).forEach((e2) => {
    const n2 = setTimeout(() => {
      e2(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(t2) || this.emitQueue.set(t2, []), this.emitQueue.get(t2).push(n2);
  });
} };
var T = (e2) => {
  let { theme: n2, type: o2, ...s2 } = e2;
  return import_react.default.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: "colored" === n2 ? "currentColor" : `var(--toastify-icon-color-${o2})`, ...s2 });
};
var E = { info: function(e2) {
  return import_react.default.createElement(T, { ...e2 }, import_react.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e2) {
  return import_react.default.createElement(T, { ...e2 }, import_react.default.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e2) {
  return import_react.default.createElement(T, { ...e2 }, import_react.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e2) {
  return import_react.default.createElement(T, { ...e2 }, import_react.default.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return import_react.default.createElement("div", { className: "Toastify__spinner" });
} };
function C(t2) {
  const [, o2] = (0, import_react.useReducer)((t3) => t3 + 1, 0), [l2, c] = (0, import_react.useState)([]), g2 = (0, import_react.useRef)(null), h2 = (0, import_react.useRef)(/* @__PURE__ */ new Map()).current, T2 = (t3) => -1 !== l2.indexOf(t3), C2 = (0, import_react.useRef)({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: t2, containerId: null, isToastActive: T2, getToast: (t3) => h2.get(t3) }).current;
  function b2(t3) {
    let { containerId: e2 } = t3;
    const { limit: n2 } = C2.props;
    !n2 || e2 && C2.containerId !== e2 || (C2.count -= C2.queue.length, C2.queue = []);
  }
  function I2(t3) {
    c((e2) => null == t3 ? [] : e2.filter((e3) => e3 !== t3));
  }
  function _2() {
    const { toastContent: t3, toastProps: e2, staleId: n2 } = C2.queue.shift();
    O2(t3, e2, n2);
  }
  function L2(t3, n2) {
    let { delay: s2, staleId: r3, ...i2 } = n2;
    if (!f(t3) || function(t4) {
      return !g2.current || C2.props.enableMultiContainer && t4.containerId !== C2.props.containerId || h2.has(t4.toastId) && null == t4.updateId;
    }(i2))
      return;
    const { toastId: l3, updateId: c2, data: T3 } = i2, { props: b3 } = C2, L3 = () => I2(l3), N2 = null == c2;
    N2 && C2.count++;
    const M2 = { ...b3, style: b3.toastStyle, key: C2.toastKey++, ...Object.fromEntries(Object.entries(i2).filter((t4) => {
      let [e2, n3] = t4;
      return null != n3;
    })), toastId: l3, updateId: c2, data: T3, closeToast: L3, isIn: false, className: m(i2.className || b3.toastClassName), bodyClassName: m(i2.bodyClassName || b3.bodyClassName), progressClassName: m(i2.progressClassName || b3.progressClassName), autoClose: !i2.isLoading && (R2 = i2.autoClose, w2 = b3.autoClose, false === R2 || u(R2) && R2 > 0 ? R2 : w2), deleteToast() {
      const t4 = y(h2.get(l3), "removed");
      h2.delete(l3), v.emit(4, t4);
      const e2 = C2.queue.length;
      if (C2.count = null == l3 ? C2.count - C2.displayedToast : C2.count - 1, C2.count < 0 && (C2.count = 0), e2 > 0) {
        const t5 = null == l3 ? C2.props.limit : 1;
        if (1 === e2 || 1 === t5)
          C2.displayedToast++, _2();
        else {
          const n3 = t5 > e2 ? e2 : t5;
          C2.displayedToast = n3;
          for (let t6 = 0; t6 < n3; t6++)
            _2();
        }
      } else
        o2();
    } };
    var R2, w2;
    M2.iconOut = function(t4) {
      let { theme: n3, type: o3, isLoading: s3, icon: r4 } = t4, i3 = null;
      const l4 = { theme: n3, type: o3 };
      return false === r4 || (p(r4) ? i3 = r4(l4) : (0, import_react.isValidElement)(r4) ? i3 = (0, import_react.cloneElement)(r4, l4) : d(r4) || u(r4) ? i3 = r4 : s3 ? i3 = E.spinner() : ((t5) => t5 in E)(o3) && (i3 = E[o3](l4))), i3;
    }(M2), p(i2.onOpen) && (M2.onOpen = i2.onOpen), p(i2.onClose) && (M2.onClose = i2.onClose), M2.closeButton = b3.closeButton, false === i2.closeButton || f(i2.closeButton) ? M2.closeButton = i2.closeButton : true === i2.closeButton && (M2.closeButton = !f(b3.closeButton) || b3.closeButton);
    let x2 = t3;
    (0, import_react.isValidElement)(t3) && !d(t3.type) ? x2 = (0, import_react.cloneElement)(t3, { closeToast: L3, toastProps: M2, data: T3 }) : p(t3) && (x2 = t3({ closeToast: L3, toastProps: M2, data: T3 })), b3.limit && b3.limit > 0 && C2.count > b3.limit && N2 ? C2.queue.push({ toastContent: x2, toastProps: M2, staleId: r3 }) : u(s2) ? setTimeout(() => {
      O2(x2, M2, r3);
    }, s2) : O2(x2, M2, r3);
  }
  function O2(t3, e2, n2) {
    const { toastId: o3 } = e2;
    n2 && h2.delete(n2);
    const s2 = { content: t3, props: e2 };
    h2.set(o3, s2), c((t4) => [...t4, o3].filter((t5) => t5 !== n2)), v.emit(4, y(s2, null == s2.props.updateId ? "added" : "updated"));
  }
  return (0, import_react.useEffect)(() => (C2.containerId = t2.containerId, v.cancelEmit(3).on(0, L2).on(1, (t3) => g2.current && I2(t3)).on(5, b2).emit(2, C2), () => {
    h2.clear(), v.emit(3, C2);
  }), []), (0, import_react.useEffect)(() => {
    C2.props = t2, C2.isToastActive = T2, C2.displayedToast = l2.length;
  }), { getToastToRender: function(e2) {
    const n2 = /* @__PURE__ */ new Map(), o3 = Array.from(h2.values());
    return t2.newestOnTop && o3.reverse(), o3.forEach((t3) => {
      const { position: e3 } = t3.props;
      n2.has(e3) || n2.set(e3, []), n2.get(e3).push(t3);
    }), Array.from(n2, (t3) => e2(t3[0], t3[1]));
  }, containerRef: g2, isToastActive: T2 };
}
function b(t2) {
  return t2.targetTouches && t2.targetTouches.length >= 1 ? t2.targetTouches[0].clientX : t2.clientX;
}
function I(t2) {
  return t2.targetTouches && t2.targetTouches.length >= 1 ? t2.targetTouches[0].clientY : t2.clientY;
}
function _(t2) {
  const [o2, a2] = (0, import_react.useState)(false), [r3, l2] = (0, import_react.useState)(false), c = (0, import_react.useRef)(null), u2 = (0, import_react.useRef)({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, boundingRect: null, didMove: false }).current, d2 = (0, import_react.useRef)(t2), { autoClose: m2, pauseOnHover: f2, closeToast: g2, onClick: h2, closeOnClick: y2 } = t2;
  function v2(e2) {
    if (t2.draggable) {
      "touchstart" === e2.nativeEvent.type && e2.nativeEvent.preventDefault(), u2.didMove = false, document.addEventListener("mousemove", _2), document.addEventListener("mouseup", L2), document.addEventListener("touchmove", _2), document.addEventListener("touchend", L2);
      const n2 = c.current;
      u2.canCloseOnClick = true, u2.canDrag = true, u2.boundingRect = n2.getBoundingClientRect(), n2.style.transition = "", u2.x = b(e2.nativeEvent), u2.y = I(e2.nativeEvent), "x" === t2.draggableDirection ? (u2.start = u2.x, u2.removalDistance = n2.offsetWidth * (t2.draggablePercent / 100)) : (u2.start = u2.y, u2.removalDistance = n2.offsetHeight * (80 === t2.draggablePercent ? 1.5 * t2.draggablePercent : t2.draggablePercent / 100));
    }
  }
  function T2(e2) {
    if (u2.boundingRect) {
      const { top: n2, bottom: o3, left: s2, right: a3 } = u2.boundingRect;
      "touchend" !== e2.nativeEvent.type && t2.pauseOnHover && u2.x >= s2 && u2.x <= a3 && u2.y >= n2 && u2.y <= o3 ? C2() : E2();
    }
  }
  function E2() {
    a2(true);
  }
  function C2() {
    a2(false);
  }
  function _2(e2) {
    const n2 = c.current;
    u2.canDrag && n2 && (u2.didMove = true, o2 && C2(), u2.x = b(e2), u2.y = I(e2), u2.delta = "x" === t2.draggableDirection ? u2.x - u2.start : u2.y - u2.start, u2.start !== u2.x && (u2.canCloseOnClick = false), n2.style.transform = `translate${t2.draggableDirection}(${u2.delta}px)`, n2.style.opacity = "" + (1 - Math.abs(u2.delta / u2.removalDistance)));
  }
  function L2() {
    document.removeEventListener("mousemove", _2), document.removeEventListener("mouseup", L2), document.removeEventListener("touchmove", _2), document.removeEventListener("touchend", L2);
    const e2 = c.current;
    if (u2.canDrag && u2.didMove && e2) {
      if (u2.canDrag = false, Math.abs(u2.delta) > u2.removalDistance)
        return l2(true), void t2.closeToast();
      e2.style.transition = "transform 0.2s, opacity 0.2s", e2.style.transform = `translate${t2.draggableDirection}(0)`, e2.style.opacity = "1";
    }
  }
  (0, import_react.useEffect)(() => {
    d2.current = t2;
  }), (0, import_react.useEffect)(() => (c.current && c.current.addEventListener("d", E2, { once: true }), p(t2.onOpen) && t2.onOpen((0, import_react.isValidElement)(t2.children) && t2.children.props), () => {
    const t3 = d2.current;
    p(t3.onClose) && t3.onClose((0, import_react.isValidElement)(t3.children) && t3.children.props);
  }), []), (0, import_react.useEffect)(() => (t2.pauseOnFocusLoss && (document.hasFocus() || C2(), window.addEventListener("focus", E2), window.addEventListener("blur", C2)), () => {
    t2.pauseOnFocusLoss && (window.removeEventListener("focus", E2), window.removeEventListener("blur", C2));
  }), [t2.pauseOnFocusLoss]);
  const O2 = { onMouseDown: v2, onTouchStart: v2, onMouseUp: T2, onTouchEnd: T2 };
  return m2 && f2 && (O2.onMouseEnter = C2, O2.onMouseLeave = E2), y2 && (O2.onClick = (t3) => {
    h2 && h2(t3), u2.canCloseOnClick && g2();
  }), { playToast: E2, pauseToast: C2, isRunning: o2, preventExitTransition: r3, toastRef: c, eventHandlers: O2 };
}
function L(e2) {
  let { closeToast: n2, theme: o2, ariaLabel: s2 = "close" } = e2;
  return import_react.default.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o2}`, type: "button", onClick: (t2) => {
    t2.stopPropagation(), n2(t2);
  }, "aria-label": s2 }, import_react.default.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, import_react.default.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function O(e2) {
  let { delay: n2, isRunning: o2, closeToast: s2, type: a2 = "default", hide: r3, className: i2, style: l2, controlledProgress: u2, progress: d2, rtl: m2, isIn: f2, theme: g2 } = e2;
  const h2 = r3 || u2 && 0 === d2, y2 = { ...l2, animationDuration: `${n2}ms`, animationPlayState: o2 ? "running" : "paused", opacity: h2 ? 0 : 1 };
  u2 && (y2.transform = `scaleX(${d2})`);
  const v2 = clsx_m_default("Toastify__progress-bar", u2 ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g2}`, `Toastify__progress-bar--${a2}`, { "Toastify__progress-bar--rtl": m2 }), T2 = p(i2) ? i2({ rtl: m2, type: a2, defaultClassName: v2 }) : clsx_m_default(v2, i2);
  return import_react.default.createElement("div", { role: "progressbar", "aria-hidden": h2 ? "true" : "false", "aria-label": "notification timer", className: T2, style: y2, [u2 && d2 >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u2 && d2 < 1 ? null : () => {
    f2 && s2();
  } });
}
var N = (n2) => {
  const { isRunning: o2, preventExitTransition: s2, toastRef: r3, eventHandlers: i2 } = _(n2), { closeButton: l2, children: u2, autoClose: d2, onClick: m2, type: f2, hideProgressBar: g2, closeToast: h2, transition: y2, position: v2, className: T2, style: E2, bodyClassName: C2, bodyStyle: b2, progressClassName: I2, progressStyle: N2, updateId: M2, role: R2, progress: w2, rtl: x2, toastId: $2, deleteToast: k2, isIn: P2, isLoading: B2, iconOut: D2, closeOnClick: A2, theme: z2 } = n2, F2 = clsx_m_default("Toastify__toast", `Toastify__toast-theme--${z2}`, `Toastify__toast--${f2}`, { "Toastify__toast--rtl": x2 }, { "Toastify__toast--close-on-click": A2 }), H2 = p(T2) ? T2({ rtl: x2, position: v2, type: f2, defaultClassName: F2 }) : clsx_m_default(F2, T2), S2 = !!w2 || !d2, q2 = { closeToast: h2, type: f2, theme: z2 };
  let Q2 = null;
  return false === l2 || (Q2 = p(l2) ? l2(q2) : (0, import_react.isValidElement)(l2) ? (0, import_react.cloneElement)(l2, q2) : L(q2)), import_react.default.createElement(y2, { isIn: P2, done: k2, position: v2, preventExitTransition: s2, nodeRef: r3 }, import_react.default.createElement("div", { id: $2, onClick: m2, className: H2, ...i2, style: E2, ref: r3 }, import_react.default.createElement("div", { ...P2 && { role: R2 }, className: p(C2) ? C2({ type: f2 }) : clsx_m_default("Toastify__toast-body", C2), style: b2 }, null != D2 && import_react.default.createElement("div", { className: clsx_m_default("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !B2 }) }, D2), import_react.default.createElement("div", null, u2)), Q2, import_react.default.createElement(O, { ...M2 && !S2 ? { key: `pb-${M2}` } : {}, rtl: x2, theme: z2, delay: d2, isRunning: o2, isIn: P2, closeToast: h2, hide: g2, type: f2, style: N2, className: I2, controlledProgress: S2, progress: w2 || 0 })));
};
var M = function(t2, e2) {
  return void 0 === e2 && (e2 = false), { enter: `Toastify--animate Toastify__${t2}-enter`, exit: `Toastify--animate Toastify__${t2}-exit`, appendPosition: e2 };
};
var R = h(M("bounce", true));
var w = h(M("slide", true));
var x = h(M("zoom"));
var $ = h(M("flip"));
var k = (0, import_react.forwardRef)((e2, n2) => {
  const { getToastToRender: o2, containerRef: a2, isToastActive: r3 } = C(e2), { className: i2, style: l2, rtl: u2, containerId: d2 } = e2;
  function f2(t2) {
    const e3 = clsx_m_default("Toastify__toast-container", `Toastify__toast-container--${t2}`, { "Toastify__toast-container--rtl": u2 });
    return p(i2) ? i2({ position: t2, rtl: u2, defaultClassName: e3 }) : clsx_m_default(e3, m(i2));
  }
  return (0, import_react.useEffect)(() => {
    n2 && (n2.current = a2.current);
  }, []), import_react.default.createElement("div", { ref: a2, className: "Toastify", id: d2 }, o2((e3, n3) => {
    const o3 = n3.length ? { ...l2 } : { ...l2, pointerEvents: "none" };
    return import_react.default.createElement("div", { className: f2(e3), style: o3, key: `container-${e3}` }, n3.map((e4, o4) => {
      let { content: s2, props: a3 } = e4;
      return import_react.default.createElement(N, { ...a3, isIn: r3(a3.toastId), style: { ...a3.style, "--nth": o4 + 1, "--len": n3.length }, key: `toast-${a3.key}` }, s2);
    }));
  }));
});
k.displayName = "ToastContainer", k.defaultProps = { position: "top-right", transition: R, autoClose: 5e3, closeButton: L, pauseOnHover: true, pauseOnFocusLoss: true, closeOnClick: true, draggable: true, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
var P;
var B = /* @__PURE__ */ new Map();
var D = [];
var A = 1;
function z() {
  return "" + A++;
}
function F(t2) {
  return t2 && (d(t2.toastId) || u(t2.toastId)) ? t2.toastId : z();
}
function H(t2, e2) {
  return B.size > 0 ? v.emit(0, t2, e2) : D.push({ content: t2, options: e2 }), e2.toastId;
}
function S(t2, e2) {
  return { ...e2, type: e2 && e2.type || t2, toastId: F(e2) };
}
function q(t2) {
  return (e2, n2) => H(e2, S(t2, n2));
}
function Q(t2, e2) {
  return H(t2, S("default", e2));
}
Q.loading = (t2, e2) => H(t2, S("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...e2 })), Q.promise = function(t2, e2, n2) {
  let o2, { pending: s2, error: a2, success: r3 } = e2;
  s2 && (o2 = d(s2) ? Q.loading(s2, n2) : Q.loading(s2.render, { ...n2, ...s2 }));
  const i2 = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l2 = (t3, e3, s3) => {
    if (null == e3)
      return void Q.dismiss(o2);
    const a3 = { type: t3, ...i2, ...n2, data: s3 }, r4 = d(e3) ? { render: e3 } : e3;
    return o2 ? Q.update(o2, { ...a3, ...r4 }) : Q(r4.render, { ...a3, ...r4 }), s3;
  }, c = p(t2) ? t2() : t2;
  return c.then((t3) => l2("success", r3, t3)).catch((t3) => l2("error", a2, t3)), c;
}, Q.success = q("success"), Q.info = q("info"), Q.error = q("error"), Q.warning = q("warning"), Q.warn = Q.warning, Q.dark = (t2, e2) => H(t2, S("default", { theme: "dark", ...e2 })), Q.dismiss = (t2) => {
  B.size > 0 ? v.emit(1, t2) : D = D.filter((e2) => null != t2 && e2.options.toastId !== t2);
}, Q.clearWaitingQueue = function(t2) {
  return void 0 === t2 && (t2 = {}), v.emit(5, t2);
}, Q.isActive = (t2) => {
  let e2 = false;
  return B.forEach((n2) => {
    n2.isToastActive && n2.isToastActive(t2) && (e2 = true);
  }), e2;
}, Q.update = function(t2, e2) {
  void 0 === e2 && (e2 = {}), setTimeout(() => {
    const n2 = function(t3, e3) {
      let { containerId: n3 } = e3;
      const o2 = B.get(n3 || P);
      return o2 && o2.getToast(t3);
    }(t2, e2);
    if (n2) {
      const { props: o2, content: s2 } = n2, a2 = { delay: 100, ...o2, ...e2, toastId: e2.toastId || t2, updateId: z() };
      a2.toastId !== t2 && (a2.staleId = t2);
      const r3 = a2.render || s2;
      delete a2.render, H(r3, a2);
    }
  }, 0);
}, Q.done = (t2) => {
  Q.update(t2, { progress: 1 });
}, Q.onChange = (t2) => (v.on(4, t2), () => {
  v.off(4, t2);
}), Q.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, Q.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, v.on(2, (t2) => {
  P = t2.containerId || t2, B.set(P, t2), D.forEach((t3) => {
    v.emit(0, t3.content, t3.options);
  }), D = [];
}).on(3, (t2) => {
  B.delete(t2.containerId || t2), 0 === B.size && v.off(0).off(1).off(5);
});

export {
  k,
  Q
};
//# sourceMappingURL=/build/_shared/chunk-PL7FAYB3.js.map
