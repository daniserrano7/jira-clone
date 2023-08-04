import{a,j as e}from"./jsx-runtime-29545a09.js";import{R as n,T as s,P as c,O as d,C as g,a as m,D as p,b as D}from"./dialog-fe472930.js";import{B as o}from"./button-e6a2bc29.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-022f8340.js";import"./index-d3606c93.js";import"./index-add592e3.js";import"./index-1b3f171e.js";import"./Combination-9efd6927.js";import"./index-e62f264b.js";import"./classix-ee785c7e.js";import"./index-2c0e38a7.js";const P={title:"Components/Dialog",parameters:{layout:"centered"},argTypes:{}},t={render:()=>a(n,{children:[e(s,{asChild:!0,children:e(o,{children:"Trigger"})}),e(c,{children:e(d,{children:a(g,{className:"relative",children:[e(m,{children:"Alert title"}),e(p,{className:"mb-4",children:"Here you can add the content of the dialog"}),a("div",{className:"flex gap-2",children:[e(o,{children:"Accept"}),e(D,{asChild:!0,children:e(o,{color:"neutral",variant:"subtlest",children:"Close"})})]})]})})})]})};var r,l,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Trigger</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content className="relative">
            <Dialog.Title>Alert title</Dialog.Title>
            <Dialog.Description className="mb-4">
              Here you can add the content of the dialog
            </Dialog.Description>
            <div className="flex gap-2">
              <Button>Accept</Button>
              <Dialog.Close asChild>
                <Button color="neutral" variant="subtlest">
                  Close
                </Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
//# sourceMappingURL=dialog.stories-45b6de4c.js.map
