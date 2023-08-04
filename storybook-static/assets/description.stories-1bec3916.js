import{j as x}from"./jsx-runtime-29545a09.js";import{r as O}from"./index-76fb7be0.js";import{D as S}from"./description-29042694.js";import"./_commonjsHelpers-de833af9.js";import"./textarea-autosize-79e9b05e.js";import"./classix-ee785c7e.js";const N={title:"Components/Description",parameters:{layout:"centered"},argTypes:{initDescription:{defaultValue:"Description",control:{type:"text"}},readOnly:{defaultValue:!1,control:{type:"boolean"}}}},s={render:R=>x("div",{className:"grid grid-cols-1 gap-6",children:[e,r,t].map((y,f)=>O.createElement(S,{...y.args,key:f}))})},e={},r={args:{initDescription:"Default description"}},t={args:{initDescription:"Read only description",readOnly:!0}};var a,o,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: _ => <div className="grid grid-cols-1 gap-6">
      {[DefaultDescription, InitDescription, ReadOnly].map((DescriptionStory, index) => <Description {...DescriptionStory.args} key={index} />)}
    </div>
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    initDescription: "Default description"
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,D,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    initDescription: "Read only description",
    readOnly: true
  }
}`,...(g=(D=t.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};const V=["Default","DefaultDescription","InitDescription","ReadOnly"];export{s as Default,e as DefaultDescription,r as InitDescription,t as ReadOnly,V as __namedExportsOrder,N as default};
//# sourceMappingURL=description.stories-1bec3916.js.map
