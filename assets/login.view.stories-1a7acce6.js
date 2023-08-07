import{a as t,j as e}from"./jsx-runtime-29545a09.js";import{c as x}from"./create-remix-stub-d064beaa.js";import{a as m,u as d}from"./user.mock-b5d38c63.js";import{r as y}from"./index-76fb7be0.js";import{U as c}from"./user-avatar-ac317afa.js";import{R as w,T as b,V,a as _,C as S,f as v,b as N,I,c as T,d as U,e as j,S as L}from"./select-8cb1715f.js";import{F as k}from"./index-9d890d39.js";import{B}from"./button-e6a2bc29.js";import"./iframe-a8938a8d.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3606c93.js";import"./index-add592e3.js";import"./tooltip-747c2033.js";import"./classix-ee785c7e.js";import"./index-f4c58a73.js";import"./index-6a2b73ba.js";import"./index-1b3f171e.js";import"./index-e5b7d252.js";import"./index-bf70942a.js";import"./index-c6b1b4f9.js";import"./Combination-9efd6927.js";import"./index-11a3acc1.js";import"./index-2c0e38a7.js";import"./index.esm-1bd79aba.js";import"./iconBase-1d38e9b4.js";const n=({users:r})=>{const[i,f]=y.useState(m),h=a=>{const o=r.find(g=>g.id===a);o&&f(o)};return t("div",{className:"mx-auto max-w-[400px] pt-[10vh]",children:[e("h1",{className:"font-primary-black text-5xl text-font",children:"Select login user"}),e("h2",{className:"mb-8 mt-3 font-primary-light text-lg text-font-subtle",children:"There is no authentication involved. You can login with any user you want! Keep in mind you can only access the projects the user is member of. Try to create issues and comments with different users to see how it reflects in the UI and database. You can logout on the user avatar."}),t(k,{method:"post",className:"mx-auto w-[300px]",children:[t(w,{name:"user",defaultValue:m.id,onValueChange:h,children:[t(b,{className:"flex w-full justify-between","aria-label":"Open user select",children:[t("div",{className:"flex items-center gap-2",children:[e(c,{...i}),e(V,{})]}),e(_,{})]}),t(S,{children:[e(v,{}),t(N,{children:[r.map((a,o)=>t(I,{value:a.id,children:[e(T,{}),e(c,{...a}),e(U,{children:a.name})]},o)),e(j,{})]}),e(L,{})]})]}),e(B,{type:"submit",name:"_action",value:"setUser","aria-label":"Login",className:"mt-2 w-full",children:"Login"})]})]})};try{n.displayName="LoginView",n.__docgenInfo={description:"",displayName:"LoginView",props:{users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"User[]"}}}}}catch{}const se={title:"Pages/Login",component:n,parameters:{layout:"centered"},argTypes:{users:{defaultValue:d,control:{type:"object"}}},decorators:[r=>{const i=x([{path:"/",element:e(r,{}),action:async()=>({status:200})}]);return e(i,{})}]},s={args:{users:d}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    users: usersMock
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const ie=["Default"];export{s as Default,ie as __namedExportsOrder,se as default};
//# sourceMappingURL=login.view.stories-1a7acce6.js.map
