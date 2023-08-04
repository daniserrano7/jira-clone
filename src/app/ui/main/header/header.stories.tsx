import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { UserContextProvider } from "@app/store/user.store";
import { ThemeProvider, Theme, Preference } from "@app/store/theme.store";
import { userMock1 } from "@domain/user";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Pages/Main/Header",
  component: Header,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: (
            <UserContextProvider user={userMock1}>
              <ThemeProvider
                specifiedTheme={Theme.LIGHT}
                specifiedPreference={Preference.SELECTED}
              >
                <div className="w-full">
                  <Story />
                </div>
              </ThemeProvider>
            </UserContextProvider>
          ),
          action: async () => {
            return {
              status: 200,
            };
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
