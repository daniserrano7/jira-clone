import jiraLogo from "public/images/logo.png";
import { Icon } from "@app/components/icon";

export const Header = (): JSX.Element => {
  const iconBaseClass =
    "w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer fill-white hover:bg-primary-light hover:text-primary-main";

  return (
    <header className="relative z-10 flex h-[56px] w-full items-center justify-between bg-white px-5 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]">
      <section>
        <div className="flex cursor-pointer items-center rounded py-2 px-3 hover:bg-primary-light">
          <img src={jiraLogo} width={24} height={24} />
          <span className="ml-2">Jira Clone</span>
        </div>
      </section>
      <section className="flex gap-3">
        <button className={`${iconBaseClass} fill- cursor-not-allowed`}>
          <Icon name="question" />
        </button>
        <a
          href="https://github.com/daniserrano7/jira-clone"
          className={iconBaseClass}
        >
          <Icon name="github" />
        </a>
      </section>
    </header>
  );
};
