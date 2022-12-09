import { Link, Form } from "@remix-run/react";
import * as Popover from "@radix-ui/react-popover";
import cx from "classix";
import { useUserStore } from "../../store/user.store";
import { Icon } from "@app/components/icon";
import { UserAvatar } from "@app/components/user-avatar";

export const Header = (): JSX.Element => {
  const { user } = useUserStore();

  const iconBaseClass =
    "w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer fill-white hover:bg-primary-light hover:text-primary-main dark:text-white dark:fill-dark-300 dark:hover:bg-dark-100 dark:hover:text-primary-main-dark";

  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-white py-2 px-5 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] dark:bg-dark-200">
      <section>
        <Link
          to="/"
          className="flex cursor-pointer items-center rounded py-2 px-3 hover:bg-primary-light dark:hover:bg-dark-100"
        >
          <img src="/images/logo.png" width={24} height={24} alt="Logo" />
          <span className="ml-2">Jira Clone</span>
        </Link>
      </section>
      <section className="flex gap-3">
        <button className={cx(iconBaseClass, "fill- cursor-not-allowed")}>
          <Icon name="question" />
        </button>
        <a
          href="https://github.com/daniserrano7/jira-clone"
          className={iconBaseClass}
        >
          <Icon name="github" />
        </a>
        <Popover.Root>
          <Popover.Trigger className="rounded-full outline outline-2 outline-grey-300 hover:outline-primary-main dark:outline-grey-600 dark:hover:outline-white">
            <UserAvatar {...user} tooltip={false} />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="group z-50 rounded bg-white px-3 py-1 shadow-md-dark hover:bg-grey-300 dark:bg-dark-400 dark:hover:bg-dark-200"
              sideOffset={3}
            >
              <Form method="post" action="/logout">
                <button type="submit" name="_action" value="logout">
                  Logout
                </button>
              </Form>
              <Popover.Arrow className="fill-white group-hover:fill-grey-300 dark:fill-dark-500 dark:group-hover:fill-dark-100" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </section>
    </header>
  );
};
