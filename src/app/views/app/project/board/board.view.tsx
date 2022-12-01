import { useState } from "react";
import { Outlet } from "@remix-run/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Project, ProjectData } from "@domain/project";
import { Search } from "@app/views/app/project/board/search";
import { UserAvatarList } from "./avatar-list";
import { SelectSort } from "./select-sort";
import { CategoryColumn } from "./category-column";
import { ProjectContext, ProjectStore } from "../project.store";

export const BoardView = ({ projectData }: Props): JSX.Element => {
  const project = new Project(projectData);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  return (
    <ProjectContext.Provider value={new ProjectStore(project)}>
      <div className="box-border flex h-full flex-col bg-white">
        <section className="flex items-center">
          <Search />
          <div className="my-0 mx-4 inline">
            <UserAvatarList users={project.users} />
          </div>
          <div className="inline">
            <SelectSort />
          </div>
        </section>
        <section className="mt-12 flex h-full gap-3">
          <DndProvider backend={HTML5Backend}>
            {project.categories.map((category) => (
              <CategoryColumn
                key={category.id}
                category={category}
                isDragging={isDragging}
                handleDragging={setIsDragging}
              />
            ))}
          </DndProvider>
        </section>
        <Outlet />
      </div>
    </ProjectContext.Provider>
  );
};

interface Props {
  projectData: ProjectData;
}
