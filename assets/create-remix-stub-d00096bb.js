import{r as s}from"./index-76fb7be0.js";import{p as N,a as w,N as T,L as O,m as U,b as A,D as I,c as z,d as $,R as Y}from"./index-9d890d39.js";import{_ as W}from"./iframe-574401ae.js";/**
 * @remix-run/react v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},m.apply(this,arguments)}/**
 * @remix-run/react v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}async function G(e,r){if(e.id in r)return r[e.id];try{let t=await W(()=>import(e.module),[]);return r[e.id]=t,t}catch{return window.location.reload(),new Promise(()=>{})}}/**
 * @remix-run/react v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function V(e){return e==null?!1:e.href==null?e.rel==="preload"&&(typeof e.imageSrcSet=="string"||typeof e.imagesrcset=="string")&&(typeof e.imageSizes=="string"||typeof e.imagesizes=="string"):typeof e.rel=="string"&&typeof e.href=="string"}async function X(e,r,t){return(await Promise.all(e.map(async n=>{let i=await G(r.routes[n.route.id],t);return i.links?i.links():[]}))).flat(1).filter(V).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="preload"?{...n,rel:"prefetch"}:{...n,rel:"prefetch",as:"style"})}function P(e,r,t,a,n,i){let f=S(e),u=(o,l)=>t[l]?o.route.id!==t[l].route.id:!0,d=(o,l)=>{var c;return t[l].pathname!==o.pathname||((c=t[l].route.path)===null||c===void 0?void 0:c.endsWith("*"))&&t[l].params["*"]!==o.params["*"]};return i==="data"&&n.search!==f.search?r.filter((o,l)=>{if(!a.routes[o.route.id].hasLoader)return!1;if(u(o,l)||d(o,l))return!0;if(o.route.shouldRevalidate){var p;let R=o.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((p=t[0])===null||p===void 0?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):r.filter((o,l)=>{let c=a.routes[o.route.id];return(i==="assets"||c.hasLoader)&&(u(o,l)||d(o,l))})}function q(e,r,t){let a=S(e);return g(r.filter(n=>t.routes[n.route.id].hasLoader).map(n=>{let{pathname:i,search:f}=a,u=new URLSearchParams(f);return u.set("_data",n.route.id),`${i}?${u}`}))}function J(e,r){return g(e.map(t=>{let a=r.routes[t.route.id],n=[a.module];return a.imports&&(n=n.concat(a.imports)),n}).flat(1))}function g(e){return[...new Set(e)]}function S(e){let r=N(e);return r.search===void 0&&(r.search=""),r}/**
 * @remix-run/react v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function K(){let e=s.useContext(I);return y(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Q(){let e=s.useContext(z);return y(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}const E=s.createContext(void 0);E.displayName="Remix";function k(){let e=s.useContext(E);return y(e,"You must render this element inside a <Remix> element"),e}function x(e,r){let[t,a]=s.useState(!1),[n,i]=s.useState(!1),{onFocus:f,onBlur:u,onMouseEnter:d,onMouseLeave:h,onTouchStart:o}=r,l=s.useRef(null);s.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let R=F=>{F.forEach(H=>{i(H.isIntersecting)})},L=new IntersectionObserver(R,{threshold:.5});return l.current&&L.observe(l.current),()=>{L.disconnect()}}},[e]);let c=()=>{e==="intent"&&a(!0)},p=()=>{e==="intent"&&(a(!1),i(!1))};return s.useEffect(()=>{if(t){let R=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(R)}}},[t]),[n,l,{onFocus:v(f,c),onBlur:v(u,p),onMouseEnter:v(d,c),onMouseLeave:v(h,p),onTouchStart:v(o,c)}]}const _=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;let Z=s.forwardRef(({to:e,prefetch:r="none",...t},a)=>{let n=typeof e=="string"&&_.test(e),i=w(e),[f,u,d]=x(r,t);return s.createElement(s.Fragment,null,s.createElement(T,m({},t,d,{ref:M(a,u),to:e})),f&&!n?s.createElement(C,{page:i}):null)});Z.displayName="NavLink";let j=s.forwardRef(({to:e,prefetch:r="none",...t},a)=>{let n=typeof e=="string"&&_.test(e),i=w(e),[f,u,d]=x(r,t);return s.createElement(s.Fragment,null,s.createElement(O,m({},t,d,{ref:M(a,u),to:e})),f&&!n?s.createElement(C,{page:i}):null)});j.displayName="Link";function v(e,r){return t=>{e&&e(t),t.defaultPrevented||r(t)}}function C({page:e,...r}){let{router:t}=K(),a=s.useMemo(()=>U(t.routes,e),[t.routes,e]);return a?s.createElement(te,m({page:e,matches:a},r)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function ee(e){let{manifest:r,routeModules:t}=k(),[a,n]=s.useState([]);return s.useEffect(()=>{let i=!1;return X(e,r,t).then(f=>{i||n(f)}),()=>{i=!0}},[e,r,t]),a}function te({page:e,matches:r,...t}){let a=A(),{manifest:n}=k(),{matches:i}=Q(),f=s.useMemo(()=>P(e,r,i,n,a,"data"),[e,r,i,n,a]),u=s.useMemo(()=>P(e,r,i,n,a,"assets"),[e,r,i,n,a]),d=s.useMemo(()=>q(e,f,n),[f,e,n]),h=s.useMemo(()=>J(u,n),[u,n]),o=ee(u);return s.createElement(s.Fragment,null,d.map(l=>s.createElement("link",m({key:l,rel:"prefetch",as:"fetch",href:l},t))),h.map(l=>s.createElement("link",m({key:l,rel:"modulepreload",href:l},t))),o.map(l=>s.createElement("link",m({key:l.href},l))))}function M(...e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}/**
 * @remix-run/testing v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(e,r){return e.map(t=>{if(t.loader){let a=t.loader;t.loader=n=>a({...n,context:r})}if(t.action){let a=t.action;t.action=n=>a({...n,context:r})}return t.children?{...t,children:b(t.children,r)}:t})}function le(e,r={}){return function({initialEntries:a,initialIndex:n,hydrationData:i,remixConfigFuture:f}){let u=s.useRef(),d=s.useRef();if(u.current==null){let h=b(e,r);u.current=$(h,{initialEntries:a,initialIndex:n,hydrationData:i})}return d.current==null&&(d.current={future:{v2_dev:!1,unstable_postcss:!1,unstable_tailwind:!1,v2_errorBoundary:!1,v2_headers:!1,v2_meta:!1,v2_normalizeFormMethod:!1,v2_routeConvention:!1,...f},manifest:re(u.current.routes),routeModules:B(u.current.routes)}),s.createElement(E.Provider,{value:d.current},s.createElement(Y,{router:u.current}))}}function re(e){return{routes:D(e),entry:{imports:[],module:""},url:"",version:""}}function D(e,r,t){return e.reduce((a,n)=>(n.children&&D(n.children,a,n.id),a[n.id]=ne(n,t),a),r||{})}function B(e,r){return e.reduce((t,a)=>(a.children&&B(a.children,t),t[a.id]={CatchBoundary:void 0,ErrorBoundary:void 0,default:()=>a.element,handle:a.handle,links:void 0,meta:void 0,shouldRevalidate:void 0},t),r||{})}function ne(e,r){return{id:e.id,index:e.index,caseSensitive:e.caseSensitive,path:e.path,parentId:r,hasAction:!!e.action,hasLoader:!!e.loader,module:"",hasCatchBoundary:!1,hasErrorBoundary:!1}}export{le as c};
//# sourceMappingURL=create-remix-stub-d00096bb.js.map
