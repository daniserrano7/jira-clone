import { Project } from "@domain/project";

export const Projects = ({ projects }: Props): JSX.Element => {
  return (
    <div className="p-6">
      <h1 className="text-lg">PROJECTS</h1>
      <ul className="mt-4">
        {projects.map((project) => (
          <li key={project.id} className="text-primary-main hover:underline">
            <a href={`/projects/${project.id}`}>{project.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Props {
  projects: Project[];
}
