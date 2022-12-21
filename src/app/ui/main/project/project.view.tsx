import { Outlet, Link, useLocation } from "@remix-run/react";
import { Sidebar } from "@app/ui/main/project/sidebar";

const sectionTitles: Record<string, string> = {
  board: "Board",
  analytics: "Analytics",
  backlog: "Backlog",
};
const defaultSection = "board";

export const ProjectView = ({
  name,
  description,
  image,
}: Props): JSX.Element => {
  const location = useLocation();
  const section = location.pathname.split("/").slice(-1)[0];

  const sectionTitle = sectionTitles[section] || sectionTitles[defaultSection];

  return (
    <div className="relative flex h-full flex-grow">
      <Sidebar
        projectName={name}
        projectDescription={description || "Description undefined"}
        projectImage={image || "/images/default-project.png"}
      />
      <div className="z-10 flex h-full w-full flex-grow flex-col py-6 px-5">
        <section>
          <Link to="/projects" className="underline underline-offset-[3px]">
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span>{name}</span>
          <h1 className="mt-4 mb-5 font-primary-black text-2xl">
            {sectionTitle}
          </h1>
        </section>
        <Outlet />
      </div>
    </div>
  );
};

interface Props {
  name: string;
  description?: string;
  image: string;
}
