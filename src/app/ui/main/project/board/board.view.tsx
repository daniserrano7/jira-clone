import { useState } from "react";
import { Outlet } from "@remix-run/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Project } from "@domain/project";
import { Category } from "@domain/category";
import { IssueId } from "@domain/issue";
import { Search } from "@app/ui/main/project/board/search";
import { UserAvatarList } from "./avatar-list";
import { SelectSort } from "./select-sort";
import { CategoryColumn } from "./category-column";
import { ProjectContext, ProjectStore } from "../project.store";

export const BoardView = ({ project }: Props): JSX.Element => {
  return (
    <ProjectContext.Provider value={new ProjectStore(project)}>
      <div className="box-border flex h-full flex-col">
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
          <Categories categories={project.categories} />
        </section>
        <Outlet />
      </div>
    </ProjectContext.Provider>
  );
};

interface Props {
  project: Project;
}

const Categories = ({ categories }: CategoriesProps): JSX.Element => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [submittingIssues, setSubmittingIssues] = useState<IssueId[]>([]);

  return (
    <DndProvider backend={HTML5Backend}>
      {categories.map((category) => (
        <CategoryColumn
          key={category.id}
          category={category}
          isDragging={isDragging}
          submittingIssues={submittingIssues}
          setSubmittingIssues={setSubmittingIssues}
          handleDragging={setIsDragging}
        />
      ))}
    </DndProvider>
  );
};

interface CategoriesProps {
  categories: Category[];
}
