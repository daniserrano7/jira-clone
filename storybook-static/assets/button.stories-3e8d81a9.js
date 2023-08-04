import{a as Gr,F as Hr,j as D}from"./jsx-runtime-29545a09.js";import{r as I}from"./index-76fb7be0.js";import{B}from"./button-e6a2bc29.js";import"./_commonjsHelpers-de833af9.js";import"./classix-ee785c7e.js";const Rr={title:"Components/Button",component:B,parameters:{layout:"centered"},argTypes:{children:{control:{type:"text"}},color:{control:{type:"select",options:["primary","neutral","danger"]}},variant:{description:"The variant of the button",control:{type:"select",options:["contained","text"]}},size:{control:{type:"select",options:["md","lg"]}}}},N={render:()=>Gr(Hr,{children:[D("div",{className:"grid grid-cols-6 gap-4 p-4",children:[a,s,n,t,o,c,i,l,u,d,m,g,p,S,h,x,y,b].map((r,T)=>{var e;return I.createElement(B,{...r.args,className:"w-fit",key:T},(e=r.args)==null?void 0:e.children)})}),D("div",{className:"grid grid-cols-3 gap-4",children:[v,f,P].map((r,T)=>{var e;return I.createElement(B,{...r.args,className:"w-fit",key:T},(e=r.args)==null?void 0:e.children)})})]})},a={args:{children:"Primary"}},s={args:{color:"neutral",children:"Neutral"}},n={args:{color:"success",children:"Success"}},t={args:{color:"danger",children:"Danger"}},o={args:{color:"warning",children:"Warning"}},c={args:{color:"info",children:"Info"}},i={args:{variant:"subtlest",children:"Primary"}},l={args:{variant:"subtlest",color:"neutral",children:"Neutral"}},u={args:{variant:"subtlest",color:"success",children:"Success"}},d={args:{variant:"subtlest",color:"danger",children:"Danger"}},m={args:{variant:"subtlest",color:"warning",children:"Warning"}},g={args:{variant:"subtlest",color:"info",children:"Info"}},p={args:{variant:"text",children:"Primary"}},S={args:{variant:"text",color:"neutral",children:"Neutral"}},h={args:{variant:"text",color:"success",children:"Success"}},x={args:{variant:"text",color:"danger",children:"Danger"}},y={args:{variant:"text",color:"warning",children:"Warning"}},b={args:{variant:"text",color:"info",children:"Info"}},v={args:{size:"lg",children:"Primary"}},f={args:{variant:"subtlest",size:"lg",children:"Primary"}},P={args:{variant:"text",size:"lg",children:"Primary"}};var W,w,z;N.parameters={...N.parameters,docs:{...(W=N.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <>
      <div className="grid grid-cols-6 gap-4 p-4">
        {[Primary, Neutral, Success, Danger, Warning, Info, PrimarySubtle, NeutralSubtle, SuccessSubtle, DangerSubtle, WarningSubtle, InfoSubtle, PrimaryText, NeutralText, SuccessText, DangerText, WarningText, InfoText].map((ButtonStory, index) => <Button {...ButtonStory.args} className="w-fit" key={index}>
            {ButtonStory.args?.children}
          </Button>)}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[PrimaryContainedBig, PrimarySubtleBig, PrimaryTextBig].map((ButtonStory, index) => <Button {...ButtonStory.args} className="w-fit" key={index}>
              {ButtonStory.args?.children}
            </Button>)}
      </div>
    </>
}`,...(z=(w=N.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var k,C,E;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Primary"
  }
}`,...(E=(C=a.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var j,F,_;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "neutral",
    children: "Neutral"
  }
}`,...(_=(F=s.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var O,q,A;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    color: "success",
    children: "Success"
  }
}`,...(A=(q=n.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,H,J;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    color: "danger",
    children: "Danger"
  }
}`,...(J=(H=t.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,M;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    color: "warning",
    children: "Warning"
  }
}`,...(M=(L=o.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var Q,R,U;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    color: "info",
    children: "Info"
  }
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,X,Y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "subtlest",
    children: "Primary"
  }
}`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "subtlest",
    color: "neutral",
    children: "Neutral"
  }
}`,...(rr=($=l.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,ar,sr;u.parameters={...u.parameters,docs:{...(er=u.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    variant: "subtlest",
    color: "success",
    children: "Success"
  }
}`,...(sr=(ar=u.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};var nr,tr,or;d.parameters={...d.parameters,docs:{...(nr=d.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    variant: "subtlest",
    color: "danger",
    children: "Danger"
  }
}`,...(or=(tr=d.parameters)==null?void 0:tr.docs)==null?void 0:or.source}}};var cr,ir,lr;m.parameters={...m.parameters,docs:{...(cr=m.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    variant: "subtlest",
    color: "warning",
    children: "Warning"
  }
}`,...(lr=(ir=m.parameters)==null?void 0:ir.docs)==null?void 0:lr.source}}};var ur,dr,mr;g.parameters={...g.parameters,docs:{...(ur=g.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    variant: "subtlest",
    color: "info",
    children: "Info"
  }
}`,...(mr=(dr=g.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,pr,Sr;p.parameters={...p.parameters,docs:{...(gr=p.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    variant: "text",
    children: "Primary"
  }
}`,...(Sr=(pr=p.parameters)==null?void 0:pr.docs)==null?void 0:Sr.source}}};var hr,xr,yr;S.parameters={...S.parameters,docs:{...(hr=S.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    variant: "text",
    color: "neutral",
    children: "Neutral"
  }
}`,...(yr=(xr=S.parameters)==null?void 0:xr.docs)==null?void 0:yr.source}}};var br,vr,fr;h.parameters={...h.parameters,docs:{...(br=h.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    variant: "text",
    color: "success",
    children: "Success"
  }
}`,...(fr=(vr=h.parameters)==null?void 0:vr.docs)==null?void 0:fr.source}}};var Pr,Nr,Tr;x.parameters={...x.parameters,docs:{...(Pr=x.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  args: {
    variant: "text",
    color: "danger",
    children: "Danger"
  }
}`,...(Tr=(Nr=x.parameters)==null?void 0:Nr.docs)==null?void 0:Tr.source}}};var Br,Dr,Ir;y.parameters={...y.parameters,docs:{...(Br=y.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  args: {
    variant: "text",
    color: "warning",
    children: "Warning"
  }
}`,...(Ir=(Dr=y.parameters)==null?void 0:Dr.docs)==null?void 0:Ir.source}}};var Wr,wr,zr;b.parameters={...b.parameters,docs:{...(Wr=b.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  args: {
    variant: "text",
    color: "info",
    children: "Info"
  }
}`,...(zr=(wr=b.parameters)==null?void 0:wr.docs)==null?void 0:zr.source}}};var kr,Cr,Er;v.parameters={...v.parameters,docs:{...(kr=v.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Primary"
  }
}`,...(Er=(Cr=v.parameters)==null?void 0:Cr.docs)==null?void 0:Er.source}}};var jr,Fr,_r;f.parameters={...f.parameters,docs:{...(jr=f.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  args: {
    variant: "subtlest",
    size: "lg",
    children: "Primary"
  }
}`,...(_r=(Fr=f.parameters)==null?void 0:Fr.docs)==null?void 0:_r.source}}};var Or,qr,Ar;P.parameters={...P.parameters,docs:{...(Or=P.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "lg",
    children: "Primary"
  }
}`,...(Ar=(qr=P.parameters)==null?void 0:qr.docs)==null?void 0:Ar.source}}};const Ur=["Default","Primary","Neutral","Success","Danger","Warning","Info","PrimarySubtle","NeutralSubtle","SuccessSubtle","DangerSubtle","WarningSubtle","InfoSubtle","PrimaryText","NeutralText","SuccessText","DangerText","WarningText","InfoText","PrimaryContainedBig","PrimarySubtleBig","PrimaryTextBig"];export{t as Danger,d as DangerSubtle,x as DangerText,N as Default,c as Info,g as InfoSubtle,b as InfoText,s as Neutral,l as NeutralSubtle,S as NeutralText,a as Primary,v as PrimaryContainedBig,i as PrimarySubtle,f as PrimarySubtleBig,p as PrimaryText,P as PrimaryTextBig,n as Success,u as SuccessSubtle,h as SuccessText,o as Warning,m as WarningSubtle,y as WarningText,Ur as __namedExportsOrder,Rr as default};
//# sourceMappingURL=button.stories-3e8d81a9.js.map
