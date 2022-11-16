import { useState } from "react";
import { observer } from "mobx-react-lite";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useProjectStore } from "@app/views/app/project";
import { Search } from "@app/views/app/project/board/search";
import { UserAvatarList } from "./avatar-list";
import { SelectSort } from "./select-sort";
import { CategoryColumn } from "./category-column";
import { IssueEditPanel } from "./issue-panel";

export const Board = observer((): JSX.Element => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const projectStore = useProjectStore();

  return (
    <div className="box-border flex h-full flex-col bg-white">
      <section>
        <span>Projects</span>
        <span className="mx-2">/</span>
        <span>{projectStore.project.name}</span>
        <h1 className="mt-4 mb-5 font-primary-black text-2xl">Sprint board</h1>
      </section>
      <section className="flex items-center">
        <Search />
        <div className="my-0 mx-4 inline">
          <UserAvatarList />
        </div>
        <div className="inline">
          <SelectSort />
        </div>
      </section>
      <section className="mt-12 flex h-full gap-3">
        <DndProvider backend={HTML5Backend}>
          {projectStore.project.categories.map((category) => (
            <CategoryColumn
              key={category.id}
              category={category}
              isDragging={isDragging}
              handleDragging={setIsDragging}
            />
          ))}
        </DndProvider>
      </section>
      <IssueEditPanel isOpen={Boolean(projectStore.editingIssue)} />
    </div>
  );
});
