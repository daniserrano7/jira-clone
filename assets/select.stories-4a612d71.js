import{j as e,a as t}from"./jsx-runtime-29545a09.js";import{r as y}from"./index-76fb7be0.js";import{u as m}from"./user.mock-b5d38c63.js";import{R as T,T as f,V as x,a as V,C,S as l,b as U,I as w,c as v,d as b,e as O}from"./select-69d70883.js";import{U as p}from"./user-avatar-99f980e6.js";import"./_commonjsHelpers-de833af9.js";import"./index-f4c58a73.js";import"./index-d3606c93.js";import"./index-add592e3.js";import"./index-6a2b73ba.js";import"./index-1b3f171e.js";import"./index-e5b7d252.js";import"./index-bf70942a.js";import"./index-c6b1b4f9.js";import"./Combination-9efd6927.js";import"./index-11a3acc1.js";import"./index-2c0e38a7.js";import"./classix-ee785c7e.js";import"./iconBase-1d38e9b4.js";import"./tooltip-a7368362.js";const Z={title:"Components/Select",parameters:{layout:"centered"},argTypes:{}},s={render:()=>e(B,{})},B=()=>{const r=m[0],[a,i]=y.useState(r),R=n=>{const o=m.find(j=>j.id===n);o&&i(o)};return t(T,{name:"user",defaultValue:r.id,onValueChange:R,children:[t(f,{"aria-label":"Open user select",children:[e("div",{className:"mr-2",children:e(p,{...a,size:32})}),e(x,{}),e(V,{})]}),t(C,{children:[e(l,{}),t(U,{children:[m.map((n,o)=>t(w,{value:n.id,children:[e(v,{}),e(p,{...n}),e(b,{children:n.name})]},o)),e(O,{})]}),e(l,{})]})]})},c={render:()=>{const r=["Item 1","Item 2","Item 3"];return t(T,{name:"user",defaultValue:r[0],children:[t(f,{"aria-label":"Open asignee select",children:["Trigger",e(x,{}),e(V,{})]}),t(C,{children:[e(l,{}),t(U,{children:[r.map((a,i)=>t(w,{value:a,children:[e(v,{}),e(b,{children:a})]},i)),e(O,{})]}),e(l,{})]})]})}};var d,S,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <SelectUserComponent />
}`,...(u=(S=s.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var g,I,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    return <Select.Root name="user" defaultValue={items[0]}>
        <Select.Trigger aria-label="Open asignee select">
          Trigger
          <Select.Value />
          <Select.TriggerIcon />
        </Select.Trigger>
        <Select.Content>
          <Select.ScrollDownButton />
          <Select.Viewport>
            {items.map((item, index) => <Select.Item key={index} value={item}>
                <Select.ItemIndicator />
                <Select.ItemText>{item}</Select.ItemText>
              </Select.Item>)}
            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Root>;
  }
}`,...(h=(I=c.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const $=["SelectUser","SelectText"];export{c as SelectText,s as SelectUser,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=select.stories-4a612d71.js.map
