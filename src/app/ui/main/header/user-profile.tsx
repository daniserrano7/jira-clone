import { Form } from "@remix-run/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaPowerOff } from "react-icons/fa";
import cx from "classix";
import { useUserStore } from "@app/store/user.store";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";

export const UserProfile = (): JSX.Element => {
  const { user } = useUserStore();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="ml-1 rounded-full outline outline-2 outline-border-disabled hover:outline-border-brand">
        <UserAvatar {...user} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className={cx(
            "z-50 rounded bg-elevation-surface-overlay shadow-md",
            "radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
          )}
        >
          <DropdownMenu.Item className="flex flex-col items-center p-3 !outline-none">
            <UserAvatar {...user} size={80} />
            <span className="mt-2 text-lg text-font">{user.name}</span>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-px bg-border" />
          <DropdownMenu.Item className="select-none p-1 !outline-none">
            <Form action="action/logout" method="post">
              <Button
                color="danger"
                variant="subtlest"
                type="submit"
                onClick={(e) => e.stopPropagation()} // To prevent dropdown menu from closing
                className="w-full"
                // className="flex w-full items-center gap-2 rounded bg-transparent p-2 text-sm text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed"
                aria-label="Log out"
              >
                <FaPowerOff />
                <span>Log out</span>
              </Button>
            </Form>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
