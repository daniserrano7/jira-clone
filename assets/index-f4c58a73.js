import{b as N,_ as E,$ as De,a as V,e as U,g as Me,c as ke}from"./index-d3606c93.js";import{r as e}from"./index-76fb7be0.js";import{r as Ee}from"./index-add592e3.js";import{$ as ge}from"./index-6a2b73ba.js";import{$ as T}from"./index-1b3f171e.js";import{$ as Ae,a as ye,b as Le,c as Ve,d as He}from"./index-e5b7d252.js";import{$ as Be}from"./index-c6b1b4f9.js";import{$ as xe,a as _e,h as We,d as Fe,c as Ke,e as Ue,f as qe,b as ze}from"./Combination-9efd6927.js";import{$ as Ge}from"./index-11a3acc1.js";const Ye=e.forwardRef((n,l)=>e.createElement(N.span,E({},n,{ref:l,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...n.style}}))),je=[" ","Enter","ArrowUp","ArrowDown"],Xe=[" ","Enter"],ae="Select",[se,le,Ze]=Ae(ae),[Q,kt]=De(ae,[Ze,ye]),ve=ye(),[Je,G]=Q(ae),[Qe,et]=Q(ae),tt=n=>{const{__scopeSelect:l,children:t,open:a,defaultOpen:s,onOpenChange:f,value:c,defaultValue:o,onValueChange:r,dir:i,name:$,autoComplete:C,disabled:_,required:y}=n,p=ve(l),[v,S]=e.useState(null),[m,d]=e.useState(null),[h,ee]=e.useState(!1),D=Be(i),[te=!1,I]=xe({prop:a,defaultProp:s,onChange:f}),[O,q]=xe({prop:c,defaultProp:o,onChange:r}),j=e.useRef(null),z=v?!!v.closest("form"):!0,[A,W]=e.useState(new Set),F=Array.from(A).map(P=>P.props.value).join(";");return e.createElement(Le,p,e.createElement(Je,{required:y,scope:l,trigger:v,onTriggerChange:S,valueNode:m,onValueNodeChange:d,valueNodeHasChildren:h,onValueNodeHasChildrenChange:ee,contentId:_e(),value:O,onValueChange:q,open:te,onOpenChange:I,dir:D,triggerPointerDownPosRef:j,disabled:_},e.createElement(se.Provider,{scope:l},e.createElement(Qe,{scope:n.__scopeSelect,onNativeOptionAdd:e.useCallback(P=>{W(L=>new Set(L).add(P))},[]),onNativeOptionRemove:e.useCallback(P=>{W(L=>{const H=new Set(L);return H.delete(P),H})},[])},t)),z?e.createElement(Re,{key:F,"aria-hidden":!0,required:y,tabIndex:-1,name:$,autoComplete:C,value:O,onChange:P=>q(P.target.value),disabled:_},O===void 0?e.createElement("option",{value:""}):null,Array.from(A)):null))},ot="SelectTrigger",nt=e.forwardRef((n,l)=>{const{__scopeSelect:t,disabled:a=!1,...s}=n,f=ve(t),c=G(ot,t),o=c.disabled||a,r=V(l,c.onTriggerChange),i=le(t),[$,C,_]=Oe(p=>{const v=i().filter(d=>!d.disabled),S=v.find(d=>d.value===c.value),m=Ne(v,p,S);m!==void 0&&c.onValueChange(m.value)}),y=()=>{o||(c.onOpenChange(!0),_())};return e.createElement(Ve,E({asChild:!0},f),e.createElement(N.button,E({type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:o,"data-disabled":o?"":void 0,"data-placeholder":c.value===void 0?"":void 0},s,{ref:r,onClick:T(s.onClick,p=>{p.currentTarget.focus()}),onPointerDown:T(s.onPointerDown,p=>{const v=p.target;v.hasPointerCapture(p.pointerId)&&v.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&(y(),c.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)},p.preventDefault())}),onKeyDown:T(s.onKeyDown,p=>{const v=$.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&C(p.key),!(v&&p.key===" ")&&je.includes(p.key)&&(y(),p.preventDefault())})})))}),ct="SelectValue",rt=e.forwardRef((n,l)=>{const{__scopeSelect:t,className:a,style:s,children:f,placeholder:c,...o}=n,r=G(ct,t),{onValueNodeHasChildrenChange:i}=r,$=f!==void 0,C=V(l,r.onValueNodeChange);return U(()=>{i($)},[i,$]),e.createElement(N.span,E({},o,{ref:C,style:{pointerEvents:"none"}}),r.value===void 0&&c!==void 0?c:f)}),at=e.forwardRef((n,l)=>{const{__scopeSelect:t,children:a,...s}=n;return e.createElement(N.span,E({"aria-hidden":!0},s,{ref:l}),a||"▼")}),st=n=>e.createElement(ze,E({asChild:!0},n)),J="SelectContent",lt=e.forwardRef((n,l)=>{const t=G(J,n.__scopeSelect),[a,s]=e.useState();if(U(()=>{s(new DocumentFragment)},[]),!t.open){const f=a;return f?Ee.createPortal(e.createElement(Pe,{scope:n.__scopeSelect},e.createElement(se.Slot,{scope:n.__scopeSelect},e.createElement("div",null,n.children))),f):null}return e.createElement(it,E({},n,{ref:l}))}),B=10,[Pe,Y]=Q(J),it=e.forwardRef((n,l)=>{const{__scopeSelect:t,position:a="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:f,onPointerDownOutside:c,side:o,sideOffset:r,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:_,collisionPadding:y,sticky:p,hideWhenDetached:v,avoidCollisions:S,...m}=n,d=G(J,t),[h,ee]=e.useState(null),[D,te]=e.useState(null),I=V(l,u=>ee(u)),[O,q]=e.useState(null),[j,z]=e.useState(null),A=le(t),[W,F]=e.useState(!1),P=e.useRef(!1);e.useEffect(()=>{if(h)return We(h)},[h]),Fe();const L=e.useCallback(u=>{const[w,...R]=A().map(x=>x.ref.current),[b]=R.slice(-1),g=document.activeElement;for(const x of u)if(x===g||(x==null||x.scrollIntoView({block:"nearest"}),x===w&&D&&(D.scrollTop=0),x===b&&D&&(D.scrollTop=D.scrollHeight),x==null||x.focus(),document.activeElement!==g))return},[A,D]),H=e.useCallback(()=>L([O,h]),[L,O,h]);e.useEffect(()=>{W&&H()},[W,H]);const{onOpenChange:X,triggerPointerDownPosRef:K}=d;e.useEffect(()=>{if(h){let u={x:0,y:0};const w=b=>{var g,x,M,k;u={x:Math.abs(Math.round(b.pageX)-((g=(x=K.current)===null||x===void 0?void 0:x.x)!==null&&g!==void 0?g:0)),y:Math.abs(Math.round(b.pageY)-((M=(k=K.current)===null||k===void 0?void 0:k.y)!==null&&M!==void 0?M:0))}},R=b=>{u.x<=10&&u.y<=10?b.preventDefault():h.contains(b.target)||X(!1),document.removeEventListener("pointermove",w),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",w),document.addEventListener("pointerup",R,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",R,{capture:!0})}}},[h,X,K]),e.useEffect(()=>{const u=()=>X(!1);return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[X]);const[ie,ne]=Oe(u=>{const w=A().filter(g=>!g.disabled),R=w.find(g=>g.ref.current===document.activeElement),b=Ne(w,u,R);b&&setTimeout(()=>b.ref.current.focus())}),de=e.useCallback((u,w,R)=>{const b=!P.current&&!R;(d.value!==void 0&&d.value===w||b)&&(q(u),b&&(P.current=!0))},[d.value]),fe=e.useCallback(()=>h==null?void 0:h.focus(),[h]),Z=e.useCallback((u,w,R)=>{const b=!P.current&&!R;(d.value!==void 0&&d.value===w||b)&&z(u)},[d.value]),ce=a==="popper"?Se:dt,oe=ce===Se?{side:o,sideOffset:r,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:_,collisionPadding:y,sticky:p,hideWhenDetached:v,avoidCollisions:S}:{};return e.createElement(Pe,{scope:t,content:h,viewport:D,onViewportChange:te,itemRefCallback:de,selectedItem:O,onItemLeave:fe,itemTextRefCallback:Z,focusSelectedItem:H,selectedItemText:j,position:a,isPositioned:W,searchRef:ie},e.createElement(Ke,{as:ke,allowPinchZoom:!0},e.createElement(Ue,{asChild:!0,trapped:d.open,onMountAutoFocus:u=>{u.preventDefault()},onUnmountAutoFocus:T(s,u=>{var w;(w=d.trigger)===null||w===void 0||w.focus({preventScroll:!0}),u.preventDefault()})},e.createElement(qe,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:c,onFocusOutside:u=>u.preventDefault(),onDismiss:()=>d.onOpenChange(!1)},e.createElement(ce,E({role:"listbox",id:d.contentId,"data-state":d.open?"open":"closed",dir:d.dir,onContextMenu:u=>u.preventDefault()},m,oe,{onPlaced:()=>F(!0),ref:I,style:{display:"flex",flexDirection:"column",outline:"none",...m.style},onKeyDown:T(m.onKeyDown,u=>{const w=u.ctrlKey||u.altKey||u.metaKey;if(u.key==="Tab"&&u.preventDefault(),!w&&u.key.length===1&&ne(u.key),["ArrowUp","ArrowDown","Home","End"].includes(u.key)){let b=A().filter(g=>!g.disabled).map(g=>g.ref.current);if(["ArrowUp","End"].includes(u.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes(u.key)){const g=u.target,x=b.indexOf(g);b=b.slice(x+1)}setTimeout(()=>L(b)),u.preventDefault()}})}))))))}),dt=e.forwardRef((n,l)=>{const{__scopeSelect:t,onPlaced:a,...s}=n,f=G(J,t),c=Y(J,t),[o,r]=e.useState(null),[i,$]=e.useState(null),C=V(l,I=>$(I)),_=le(t),y=e.useRef(!1),p=e.useRef(!0),{viewport:v,selectedItem:S,selectedItemText:m,focusSelectedItem:d}=c,h=e.useCallback(()=>{if(f.trigger&&f.valueNode&&o&&i&&v&&S&&m){const I=f.trigger.getBoundingClientRect(),O=i.getBoundingClientRect(),q=f.valueNode.getBoundingClientRect(),j=m.getBoundingClientRect();if(f.dir!=="rtl"){const g=j.left-O.left,x=q.left-g,M=I.left-x,k=I.width+M,ue=Math.max(k,O.width),pe=window.innerWidth-B,me=ge(x,[B,pe-ue]);o.style.minWidth=k+"px",o.style.left=me+"px"}else{const g=O.right-j.right,x=window.innerWidth-q.right-g,M=window.innerWidth-I.right-x,k=I.width+M,ue=Math.max(k,O.width),pe=window.innerWidth-B,me=ge(x,[B,pe-ue]);o.style.minWidth=k+"px",o.style.right=me+"px"}const z=_(),A=window.innerHeight-B*2,W=v.scrollHeight,F=window.getComputedStyle(i),P=parseInt(F.borderTopWidth,10),L=parseInt(F.paddingTop,10),H=parseInt(F.borderBottomWidth,10),X=parseInt(F.paddingBottom,10),K=P+L+W+X+H,ie=Math.min(S.offsetHeight*5,K),ne=window.getComputedStyle(v),de=parseInt(ne.paddingTop,10),fe=parseInt(ne.paddingBottom,10),Z=I.top+I.height/2-B,ce=A-Z,oe=S.offsetHeight/2,u=S.offsetTop+oe,w=P+L+u,R=K-w;if(w<=Z){const g=S===z[z.length-1].ref.current;o.style.bottom="0px";const x=i.clientHeight-v.offsetTop-v.offsetHeight,M=Math.max(ce,oe+(g?fe:0)+x+H),k=w+M;o.style.height=k+"px"}else{const g=S===z[0].ref.current;o.style.top="0px";const M=Math.max(Z,P+v.offsetTop+(g?de:0)+oe)+R;o.style.height=M+"px",v.scrollTop=w-Z+v.offsetTop}o.style.margin=`${B}px 0`,o.style.minHeight=ie+"px",o.style.maxHeight=A+"px",a==null||a(),requestAnimationFrame(()=>y.current=!0)}},[_,f.trigger,f.valueNode,o,i,v,S,m,f.dir,a]);U(()=>h(),[h]);const[ee,D]=e.useState();U(()=>{i&&D(window.getComputedStyle(i).zIndex)},[i]);const te=e.useCallback(I=>{I&&p.current===!0&&(h(),d==null||d(),p.current=!1)},[h,d]);return e.createElement(ft,{scope:t,contentWrapper:o,shouldExpandOnScrollRef:y,onScrollButtonChange:te},e.createElement("div",{ref:r,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:ee}},e.createElement(N.div,E({},s,{ref:C,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}}))))}),Se=e.forwardRef((n,l)=>{const{__scopeSelect:t,align:a="start",collisionPadding:s=B,...f}=n,c=ve(t);return e.createElement(He,E({},c,f,{ref:l,align:a,collisionPadding:s,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[ft,he]=Q(J,{}),we="SelectViewport",ut=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n,s=Y(we,t),f=he(we,t),c=V(l,s.onViewportChange),o=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(se.Slot,{scope:t},e.createElement(N.div,E({"data-radix-select-viewport":"",role:"presentation"},a,{ref:c,style:{position:"relative",flex:1,overflow:"auto",...a.style},onScroll:T(a.onScroll,r=>{const i=r.currentTarget,{contentWrapper:$,shouldExpandOnScrollRef:C}=f;if(C!=null&&C.current&&$){const _=Math.abs(o.current-i.scrollTop);if(_>0){const y=window.innerHeight-B*2,p=parseFloat($.style.minHeight),v=parseFloat($.style.height),S=Math.max(p,v);if(S<y){const m=S+_,d=Math.min(y,m),h=m-d;$.style.height=d+"px",$.style.bottom==="0px"&&(i.scrollTop=h>0?h:0,$.style.justifyContent="flex-end")}}}o.current=i.scrollTop})}))))}),pt="SelectGroup",[At,mt]=Q(pt),$t="SelectLabel",vt=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n,s=mt($t,t);return e.createElement(N.div,E({id:s.id},a,{ref:l}))}),$e="SelectItem",[ht,Te]=Q($e),gt=e.forwardRef((n,l)=>{const{__scopeSelect:t,value:a,disabled:s=!1,textValue:f,...c}=n,o=G($e,t),r=Y($e,t),i=o.value===a,[$,C]=e.useState(f??""),[_,y]=e.useState(!1),p=V(l,m=>{var d;return(d=r.itemRefCallback)===null||d===void 0?void 0:d.call(r,m,a,s)}),v=_e(),S=()=>{s||(o.onValueChange(a),o.onOpenChange(!1))};return e.createElement(ht,{scope:t,value:a,disabled:s,textId:v,isSelected:i,onItemTextChange:e.useCallback(m=>{C(d=>{var h;return d||((h=m==null?void 0:m.textContent)!==null&&h!==void 0?h:"").trim()})},[])},e.createElement(se.ItemSlot,{scope:t,value:a,disabled:s,textValue:$},e.createElement(N.div,E({role:"option","aria-labelledby":v,"data-highlighted":_?"":void 0,"aria-selected":i&&_,"data-state":i?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1},c,{ref:p,onFocus:T(c.onFocus,()=>y(!0)),onBlur:T(c.onBlur,()=>y(!1)),onPointerUp:T(c.onPointerUp,S),onPointerMove:T(c.onPointerMove,m=>{if(s){var d;(d=r.onItemLeave)===null||d===void 0||d.call(r)}else m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:T(c.onPointerLeave,m=>{if(m.currentTarget===document.activeElement){var d;(d=r.onItemLeave)===null||d===void 0||d.call(r)}}),onKeyDown:T(c.onKeyDown,m=>{var d;((d=r.searchRef)===null||d===void 0?void 0:d.current)!==""&&m.key===" "||(Xe.includes(m.key)&&S(),m.key===" "&&m.preventDefault())})}))))}),re="SelectItemText",xt=e.forwardRef((n,l)=>{const{__scopeSelect:t,className:a,style:s,...f}=n,c=G(re,t),o=Y(re,t),r=Te(re,t),i=et(re,t),[$,C]=e.useState(null),_=V(l,m=>C(m),r.onItemTextChange,m=>{var d;return(d=o.itemTextRefCallback)===null||d===void 0?void 0:d.call(o,m,r.value,r.disabled)}),y=$==null?void 0:$.textContent,p=e.useMemo(()=>e.createElement("option",{key:r.value,value:r.value,disabled:r.disabled},y),[r.disabled,r.value,y]),{onNativeOptionAdd:v,onNativeOptionRemove:S}=i;return U(()=>(v(p),()=>S(p)),[v,S,p]),e.createElement(e.Fragment,null,e.createElement(N.span,E({id:r.textId},f,{ref:_})),r.isSelected&&c.valueNode&&!c.valueNodeHasChildren?Ee.createPortal(f.children,c.valueNode):null)}),St="SelectItemIndicator",wt=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n;return Te(St,t).isSelected?e.createElement(N.span,E({"aria-hidden":!0},a,{ref:l})):null}),be="SelectScrollUpButton",bt=e.forwardRef((n,l)=>{const t=Y(be,n.__scopeSelect),a=he(be,n.__scopeSelect),[s,f]=e.useState(!1),c=V(l,a.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let r=function(){const i=o.scrollTop>0;f(i)};const o=t.viewport;return r(),o.addEventListener("scroll",r),()=>o.removeEventListener("scroll",r)}},[t.viewport,t.isPositioned]),s?e.createElement(Ie,E({},n,{ref:c,onAutoScroll:()=>{const{viewport:o,selectedItem:r}=t;o&&r&&(o.scrollTop=o.scrollTop-r.offsetHeight)}})):null}),Ce="SelectScrollDownButton",Ct=e.forwardRef((n,l)=>{const t=Y(Ce,n.__scopeSelect),a=he(Ce,n.__scopeSelect),[s,f]=e.useState(!1),c=V(l,a.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let r=function(){const i=o.scrollHeight-o.clientHeight,$=Math.ceil(o.scrollTop)<i;f($)};const o=t.viewport;return r(),o.addEventListener("scroll",r),()=>o.removeEventListener("scroll",r)}},[t.viewport,t.isPositioned]),s?e.createElement(Ie,E({},n,{ref:c,onAutoScroll:()=>{const{viewport:o,selectedItem:r}=t;o&&r&&(o.scrollTop=o.scrollTop+r.offsetHeight)}})):null}),Ie=e.forwardRef((n,l)=>{const{__scopeSelect:t,onAutoScroll:a,...s}=n,f=Y("SelectScrollButton",t),c=e.useRef(null),o=le(t),r=e.useCallback(()=>{c.current!==null&&(window.clearInterval(c.current),c.current=null)},[]);return e.useEffect(()=>()=>r(),[r]),U(()=>{var i;const $=o().find(C=>C.ref.current===document.activeElement);$==null||(i=$.ref.current)===null||i===void 0||i.scrollIntoView({block:"nearest"})},[o]),e.createElement(N.div,E({"aria-hidden":!0},s,{ref:l,style:{flexShrink:0,...s.style},onPointerDown:T(s.onPointerDown,()=>{c.current===null&&(c.current=window.setInterval(a,50))}),onPointerMove:T(s.onPointerMove,()=>{var i;(i=f.onItemLeave)===null||i===void 0||i.call(f),c.current===null&&(c.current=window.setInterval(a,50))}),onPointerLeave:T(s.onPointerLeave,()=>{r()})}))}),Et=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n;return e.createElement(N.div,E({"aria-hidden":!0},a,{ref:l}))}),Re=e.forwardRef((n,l)=>{const{value:t,...a}=n,s=e.useRef(null),f=V(l,s),c=Ge(t);return e.useEffect(()=>{const o=s.current,r=window.HTMLSelectElement.prototype,$=Object.getOwnPropertyDescriptor(r,"value").set;if(c!==t&&$){const C=new Event("change",{bubbles:!0});$.call(o,t),o.dispatchEvent(C)}},[c,t]),e.createElement(Ye,{asChild:!0},e.createElement("select",E({},a,{ref:f,defaultValue:t})))});Re.displayName="BubbleSelect";function Oe(n){const l=Me(n),t=e.useRef(""),a=e.useRef(0),s=e.useCallback(c=>{const o=t.current+c;l(o),function r(i){t.current=i,window.clearTimeout(a.current),i!==""&&(a.current=window.setTimeout(()=>r(""),1e3))}(o)},[l]),f=e.useCallback(()=>{t.current="",window.clearTimeout(a.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(a.current),[]),[t,s,f]}function Ne(n,l,t){const s=l.length>1&&Array.from(l).every(i=>i===l[0])?l[0]:l,f=t?n.indexOf(t):-1;let c=yt(n,Math.max(f,0));s.length===1&&(c=c.filter(i=>i!==t));const r=c.find(i=>i.textValue.toLowerCase().startsWith(s.toLowerCase()));return r!==t?r:void 0}function yt(n,l){return n.map((t,a)=>n[(l+a)%n.length])}const Lt=tt,Vt=nt,Ht=rt,Bt=at,Wt=st,Ft=lt,Kt=ut,Ut=vt,qt=gt,zt=xt,Gt=wt,Yt=bt,jt=Ct,Xt=Et;export{Lt as $,Ht as a,zt as b,Yt as c,Kt as d,Xt as e,Vt as f,Bt as g,qt as h,Ft as i,Gt as j,Wt as k,Ut as l,jt as m};
//# sourceMappingURL=index-f4c58a73.js.map
