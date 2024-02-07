import type { Meta, StoryObj } from "@storybook/react";
import {
  ProjectSummary,
  projectToProjectSummary,
  projectMock1,
} from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { ProjectCard } from "./project-card";

const meta: Meta<typeof ProjectCard> = {
  title: "Pages/Projects/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    project: {
      control: {
        type: "object",
      },
    },
  },
  decorators: [(Story) => withRemixStub(Story())],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

const mockProjectSummary: ProjectSummary = {
  id: "1",
  name: "Project 1",
  description: "Project 1 description",
  image:
    "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10400?size=xxlarge",
};

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {[Standard, WithLongDescription, NonDeletable].map(({ args }, index) => (
        <ProjectCard key={index} project={args?.project || projectMock1} />
      ))}
    </div>
  ),
};

export const Standard: Story = {
  args: {
    project: mockProjectSummary,
  },
};

export const WithLongDescription: Story = {
  args: {
    project: {
      ...mockProjectSummary,
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliqu",
    },
  },
};

export const NonDeletable: Story = {
  args: {
    project: projectToProjectSummary(projectMock1),
  },
};
