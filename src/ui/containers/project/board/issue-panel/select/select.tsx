import * as SelectPrimitive from "@radix-ui/react-select";
import { Icon } from "ui/components/icon";

export const Select = ({
  triggerSymbol,
  onChange,
  defaultValue,
  items,
}: SelectProps): JSX.Element => {
  return (
    <SelectPrimitive.Root defaultValue={defaultValue} onValueChange={onChange}>
      <SelectPrimitive.Trigger className="flex cursor-pointer items-center rounded border-none bg-grey-300 py-1.5 px-2 font-primary-bold text-sm text-font-grey outline-none hover:bg-grey-500">
        {triggerSymbol}
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className="rotate-90">
          <Icon name="arrow" size={28} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content className="border-1 border-grey-400 bg-white py-1 shadow-md">
        <SelectPrimitive.ScrollUpButton />
        <SelectPrimitive.Viewport>
          {items.map((item, index) => (
            <SelectPrimitive.Item
              key={index}
              value={item.value}
              className="relative cursor-pointer select-none border-l-[3px] border-l-transparent p-2 pl-8 font-primary-bold text-sm text-font-grey outline-none hover:border-l-[3px] hover:border-l-primary-main hover:bg-grey-300"
            >
              <SelectPrimitive.ItemIndicator className="absolute left-3 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-primary-main" />
              {item.element}
            </SelectPrimitive.Item>
          ))}
          <SelectPrimitive.Separator />
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

interface SelectProps {
  triggerSymbol: JSX.Element;
  defaultValue: string;
  onChange: (value: string) => void;
  items: {
    value: string;
    element: JSX.Element;
  }[];
}
