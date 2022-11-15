import { IssueData } from "./issue";
import { User, userMock1, userMock2 } from "@domain/user";
import { commentMock1, commentMock2 } from "@domain/comment";

const user1 = new User(userMock1);
const user2 = new User(userMock2);

export const todoIssuesMock: IssueData[] = [
  {
    id: "1",
    name: "Add and display issue timestamps",
    description:
      "Id should be create automatically on new Issue(). It must be displayed on issue panel, as well as an updatedAt parameter",
    reporter: user1,
    asignee: user2,
    comments: [commentMock1],
    priority: "medium",
    createdAt: new Date("2020-10-11"),
  },
  {
    id: "2",
    name: "Add projects section and the ability to create multiple projects",
    description:
      "Router would be needed. Can create and edit project, as well as add users to that particular project",
    reporter: user1,
    asignee: user1,
    comments: [],
    priority: "low",
  },
  {
    id: "3",
    name: "Add more filters",
    description: "E.g. 'My issues' or by priority",
    reporter: user1,
    asignee: user1,
    comments: [],
    priority: "low",
  },
  {
    id: "4",
    name: "Create quick guide about the app",
    description:
      "A dropdown panel with few steps about funcionalities. The first time it should be open by default. Control this through localStorage",
    reporter: user1,
    asignee: user1,
    comments: [],
    priority: "medium",
  },
];

export const inProgressIssuesMock: IssueData[] = [
  {
    id: "5",
    name: "Update and improve Github repo README",
    description: "",
    reporter: user1,
    asignee: user1,
    comments: [],
    priority: "high",
  },
];

export const doneIssuesMock: IssueData[] = [
  {
    id: "6",
    name: "Implement IndexedDB local database",
    description:
      "All the data must be store in the IndexedDB so it is persistent in the same device. All actions that currently modifies the store must be reflected on the local DB too. Thinking about implement an interface that handle both cases or just call two methods on the same user action.",
    reporter: user1,
    asignee: user1,
    comments: [commentMock1, commentMock2],
    priority: "high",
  },
  {
    id: "7",
    name: "Add avatar images",
    description: "Thinking about using local images or import remotely",
    reporter: user1,
    asignee: user1,
    comments: [],
    priority: "low",
  },
  {
    id: "8",
    name: "Sort issues",
    description: "By date or by priority. Don't know if it is good UX",
    reporter: user1,
    asignee: user1,
    comments: [],
    priority: "low",
  },
];
