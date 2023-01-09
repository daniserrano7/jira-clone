import { Link } from "@remix-run/react";
import cx from "classix";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { Tooltip } from "@app/components/tooltip";
import { SelctTheme } from "./select-theme";
import { UserProfile } from "./user-profile";

export const Header = (): JSX.Element => {
  const iconBaseClass =
    "w-[24px] h-[24px] rounded-full flex items-center justify-center cursor-pointer fill-white hover:bg-primary-light hover:text-primary-main dark:text-white dark:fill-dark-300 dark:hover:bg-dark-100 dark:hover:text-primary-main-dark";

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
      <section className="flex items-center gap-4">
        <Tooltip title="About">
          <button
            aria-label="About this website"
            disabled
            className={cx(iconBaseClass, "cursor-not-allowed")}
          >
            <HiQuestionMarkCircle size={24} />
          </button>
        </Tooltip>
        <Tooltip title="Github">
          <a
            href="https://github.com/daniserrano7/jira-clone"
            className={iconBaseClass}
            aria-label="Go to my Github"
          >
            <AiFillGithub size={24} />
          </a>
        </Tooltip>
        <SelctTheme />
        <UserProfile />
      </section>
    </header>
  );
};
