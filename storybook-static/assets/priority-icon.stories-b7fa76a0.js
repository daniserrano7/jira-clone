import{j as s,a as m,F as L}from"./jsx-runtime-29545a09.js";import{t as M}from"./classix-ee785c7e.js";import{H as k}from"./index.esm-0b283464.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const d=({priority:r,size:e=18})=>s("span",{className:M("flex",r==="low"&&"text-icon-accent-green",r==="medium"&&"text-icon-accent-yellow",r==="high"&&"text-icon-accent-red"),children:s(k,{size:e})});try{d.displayName="PriorityIcon",d.__docgenInfo={description:"",displayName:"PriorityIcon",props:{priority:{defaultValue:null,description:"",name:"priority",required:!0,type:{name:"enum",value:[{value:'"low"'},{value:'"medium"'},{value:'"high"'}]}},size:{defaultValue:{value:"18"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const J={title:"Components/PriorityIcon",parameters:{layout:"centered"},argTypes:{priority:{defaultValue:"low",control:{type:"select",options:["low","medium","high"]}},size:{control:{type:"number"}}}},C=["low","medium","high"],u=[18,24,32,48],a={render:r=>m("div",{className:"grid grid-cols-5 items-center justify-center gap-4 p-4 text-font",children:[s("span",{}),u.map(e=>m("span",{children:[e,"px"]})),C.map(e=>m(L,{children:[s("span",{children:e}),u.map(l=>s(d,{priority:e,size:l},`${e}-${l}`))]}))]})},o={args:{priority:"low"}},i={args:{priority:"medium"}},t={args:{priority:"high"}},n={args:{priority:"low",size:24}},c={args:{priority:"low",size:32}},p={args:{priority:"low",size:48}};var g,y,z;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: _ => <div className="grid grid-cols-5 items-center justify-center gap-4 p-4 text-font">
      <span></span>
      {sizes.map(size => <span>{size}px</span>)}
      {priorities.map(priority => <>
          <span>{priority}</span>
          {sizes.map(size => <PriorityIcon key={\`\${priority}-\${size}\`} priority={priority} size={size} />)}
        </>)}
    </div>
}`,...(z=(y=a.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var h,f,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    priority: "low"
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var S,x,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    priority: "medium"
  }
}`,...(_=(x=i.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var v,I,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    priority: "high"
  }
}`,...(j=(I=t.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var N,P,H;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    priority: "low",
    size: 24
  }
}`,...(H=(P=n.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var $,F,V;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    priority: "low",
    size: 32
  }
}`,...(V=(F=c.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var b,q,D;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    priority: "low",
    size: 48
  }
}`,...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const K=["Default","Low","Medium","High","Size24","Size32","Size48"];export{a as Default,t as High,o as Low,i as Medium,n as Size24,c as Size32,p as Size48,K as __namedExportsOrder,J as default};
//# sourceMappingURL=priority-icon.stories-b7fa76a0.js.map
