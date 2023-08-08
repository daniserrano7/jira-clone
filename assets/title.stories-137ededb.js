import{j as R}from"./jsx-runtime-29545a09.js";import{r as V}from"./index-76fb7be0.js";import{T as _}from"./title-dbdcf368.js";import"./_commonjsHelpers-de833af9.js";import"./classix-ee785c7e.js";import"./textarea-autosize-79e9b05e.js";const N={title:"Components/Title",parameters:{layout:"centered"},argTypes:{initTitle:{defaultValue:"Title",control:{type:"text"}},readOnly:{defaultValue:!1,control:{type:"boolean"}},maxLength:{defaultValue:80,control:{type:"number"}},error:{defaultValue:"",control:{type:"text"}}}},o={render:v=>R("div",{className:"grid grid-cols-1 gap-6",children:[e,r,t,a].map((C,L)=>V.createElement(_,{...C.args,key:L}))})},e={},s={args:{initTitle:"Default title"}},r={args:{initTitle:"Read only title",readOnly:!0}},t={args:{placeholder:"Error title",error:"Title is required"}},a={args:{placeholder:"Custom max length",maxLength:10}};var l,n,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: _ => <div className="grid grid-cols-1 gap-6">
      {[DefaultTitle, ReadOnly, Error, CustomMaxLength].map((TitleStory, index) => <Title {...TitleStory.args} key={index} />)}
    </div>
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initTitle: "Default title"
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var T,y,f;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    initTitle: "Read only title",
    readOnly: true
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,h,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Error title",
    error: "Title is required"
  }
}`,...(E=(h=t.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var S,D,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Custom max length",
    maxLength: 10
  }
}`,...(O=(D=a.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const w=["Default","DefaultTitle","InitTitle","ReadOnly","Error","CustomMaxLength"];export{a as CustomMaxLength,o as Default,e as DefaultTitle,t as Error,s as InitTitle,r as ReadOnly,w as __namedExportsOrder,N as default};
//# sourceMappingURL=title.stories-137ededb.js.map
