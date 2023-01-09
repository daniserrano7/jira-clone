import { Form } from "@remix-run/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaPowerOff } from "react-icons/fa";
import cx from "classix";
import { useUserStore } from "@app/store/user.store";
import { UserAvatar } from "@app/components/user-avatar";

export const UserProfile = (): JSX.Element => {
  const { user } = useUserStore();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="ml-1 rounded-full outline outline-2 outline-grey-300 hover:outline-primary-main dark:outline-grey-600 dark:hover:outline-white">
        <UserAvatar {...user} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className={cx(
            "z-50 rounded bg-white shadow-md-dark dark:bg-dark-400",
            "radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
          )}
        >
          <DropdownMenu.Item className="flex flex-col items-center p-3 !outline-none">
            <UserAvatar {...user} size={80} />
            <span className="mt-2 text-lg">{user.name}</span>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-px bg-grey-500 dark:bg-dark-100" />
          <DropdownMenu.Item className="select-none p-1 !outline-none">
            <Form action="action/logout" method="post">
              <button
                type="submit"
                onClick={(e) => e.stopPropagation()} // To prevent dropdown menu from closing
                className="flex w-full items-center gap-2 rounded p-2 text-sm text-error-main hover:bg-error-light dark:text-error-main-dark dark:hover:bg-dark-100"
                aria-label="Log out"
              >
                <FaPowerOff />
                <span>Log out</span>
              </button>
            </Form>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
