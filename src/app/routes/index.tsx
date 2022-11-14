import { useLoaderData } from "@remix-run/react";
import { userMock1 } from "@domain/user";
import { projectMock } from "@domain/project";
import { Project } from "@app/views/project";

export const loader = async () => {
  return {
    user: userMock1,
    project: projectMock,
  };
};

export default function Index() {
  const { user, project } = useLoaderData();
  return <Project user={user} project={project} />;
}
