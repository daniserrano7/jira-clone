import{a as p,j as c,F as N}from"./jsx-runtime-29545a09.js";import{P as b}from"./priority-icon-c8374029.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./classix-ee785c7e.js";import"./index.esm-baa42f24.js";import"./iconBase-1d38e9b4.js";const G={title:"Components/PriorityIcon",parameters:{layout:"centered"},argTypes:{priority:{defaultValue:"low",control:{type:"select",options:["low","medium","high"]}},size:{control:{type:"number"}}}},k=["low","medium","high"],d=[18,24,32,48],e={render:C=>p("div",{className:"grid grid-cols-5 items-center justify-center gap-4 p-4 text-font",children:[c("span",{}),d.map(r=>p("span",{children:[r,"px"]})),k.map(r=>p(N,{children:[c("span",{children:r}),d.map(m=>c(b,{priority:r,size:m},`${r}-${m}`))]}))]})},s={args:{priority:"low"}},o={args:{priority:"medium"}},i={args:{priority:"high"}},a={args:{priority:"low",size:24}},t={args:{priority:"low",size:32}},n={args:{priority:"low",size:48}};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: _ => <div className="grid grid-cols-5 items-center justify-center gap-4 p-4 text-font">
      <span></span>
      {sizes.map(size => <span>{size}px</span>)}
      {priorities.map(priority => <>
          <span>{priority}</span>
          {sizes.map(size => <PriorityIcon key={\`\${priority}-\${size}\`} priority={priority} size={size} />)}
        </>)}
    </div>
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,z,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    priority: "low"
  }
}`,...(h=(z=s.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var w,S,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    priority: "medium"
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,j,P;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    priority: "high"
  }
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var _,$,v;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    priority: "low",
    size: 24
  }
}`,...(v=($=a.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var I,D,F;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    priority: "low",
    size: 32
  }
}`,...(F=(D=t.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,L,M;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    priority: "low",
    size: 48
  }
}`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const J=["Default","Low","Medium","High","Size24","Size32","Size48"];export{e as Default,i as High,s as Low,o as Medium,a as Size24,t as Size32,n as Size48,J as __namedExportsOrder,G as default};
//# sourceMappingURL=priority-icon.stories-8838d6e8.js.map
