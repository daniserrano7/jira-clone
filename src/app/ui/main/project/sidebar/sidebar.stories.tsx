import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1 } from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { Sidebar } from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Pages/Project/Sidebar",
  parameters: {
    layout: "left",
  },
  argTypes: {
    projectName: {
      defaultValue: "Project name",
      control: {
        type: "text",
      },
    },
    projectDescription: {
      defaultValue: "Project description",
      control: {
        type: "text",
      },
    },
    projectImage: {
      defaultValue: "https://picsum.photos/seed/picsum/200/300",
      control: {
        type: "text",
      },
    },
  },
  decorators: [(Story) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: (_) => (
    <div>
      <Sidebar
        projectName={projectMock1.name}
        projectDescription={projectMock1.description || "Project description"}
        projectImage={projectMock1.image}
      />
    </div>
  ),
};
