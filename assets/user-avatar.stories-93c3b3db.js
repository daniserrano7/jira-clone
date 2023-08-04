import{j as T}from"./jsx-runtime-29545a09.js";import{r as _}from"./index-76fb7be0.js";import{u as A}from"./user.mock-b5d38c63.js";import{U as D}from"./user-avatar-99f980e6.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3606c93.js";import"./index-add592e3.js";import"./tooltip-a7368362.js";import"./classix-ee785c7e.js";const B={title:"Components/UserAvatar",parameters:{layout:"centered"},argTypes:{name:{defaultValue:"John Doe",control:{type:"text"}},image:{control:{type:"text"}},color:{control:{type:"color"}},size:{control:{type:"number"}},tooltip:{control:{type:"boolean"}}}},m=A[1].image,E=A[1].name,t={render:F=>T("div",{className:"grid grid-cols-6 gap-4 p-4",children:[e,r,a,s,o].map((M,N)=>_.createElement(D,{name:E,...M.args,key:N}))})},e={args:{image:m}},r={args:{image:void 0,color:"#dae3f9"}},a={args:{image:m,tooltip:!0}},s={args:{image:m,size:48}},o={args:{image:m,size:82}};var n,c,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: _ => <div className="grid grid-cols-6 gap-4 p-4">
      {[Image, Fallback, Tooltip, MediumSize, LargeSize].map((UserAvatarStory, index) => <UserAvatar name={userName} {...UserAvatarStory.args} key={index} />)}
    </div>
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,g,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    image: userImage
  }
}`,...(d=(g=e.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var l,u,S;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    image: undefined,
    color: "#dae3f9"
  }
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var f,y,z;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    image: userImage,
    tooltip: true
  }
}`,...(z=(y=a.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var v,x,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    image: userImage,
    size: 48
  }
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var k,U,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    image: userImage,
    size: 82
  }
}`,...(b=(U=o.parameters)==null?void 0:U.docs)==null?void 0:b.source}}};const G=["Default","Image","Fallback","Tooltip","MediumSize","LargeSize"];export{t as Default,r as Fallback,e as Image,o as LargeSize,s as MediumSize,a as Tooltip,G as __namedExportsOrder,B as default};
//# sourceMappingURL=user-avatar.stories-93c3b3db.js.map
