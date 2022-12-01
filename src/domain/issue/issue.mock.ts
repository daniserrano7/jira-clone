import { userMock1, userMock2 } from "@domain/user";
import { commentMock1, commentMock2, commentMock3 } from "@domain/comment";
import { Issue } from "./issue";

const createdAt = Date.now();
const updatedAt = Date.now();

// PROJECT 1
export const todoIssuesMock1: Issue[] = [
  {
    id: "ea07f7ca-13e9-4143-b623-f5713adef81a",
    name: "Add and display issue timestamps",
    description:
      "Id should be create automatically on new Issue(). It must be displayed on issue panel, as well as an updatedAt parameter",
    reporter: userMock1,
    asignee: userMock2,
    comments: [commentMock1],
    priority: "medium",
    categoryType: "TODO",
    createdAt,
    updatedAt,
  },
  {
    id: "23717058-379a-447a-a215-e425a124154f",
    name: "Add projects section and the ability to create multiple projects",
    description:
      "Router would be needed. Can create and edit project, as well as add users to that particular project",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: "low",
    categoryType: "TODO",
    createdAt,
    updatedAt,
  },
  {
    id: "cb3eb5e6-299d-4e1a-8521-a5541f8403e4",
    name: "Add more filters",
    description: "E.g. 'My issues' or by priority",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: "low",
    categoryType: "TODO",
    createdAt,
    updatedAt,
  },
  {
    id: "8264e3fc-dd97-4abe-9612-deee6472e5c4",
    name: "Create quick guide about the app",
    description:
      "A dropdown panel with few steps about funcionalities. The first time it should be open by default. Control this through localStorage",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: "medium",
    categoryType: "TODO",
    createdAt,
    updatedAt,
  },
];

export const inProgressIssuesMock1: Issue[] = [
  {
    id: "812664aa-82be-418b-9ba3-1d7acdcd6be2",
    name: "Update and improve Github repo README",
    description: "",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: "high",
    categoryType: "IN_PROGRESS",
    createdAt,
    updatedAt,
  },
];

export const doneIssuesMock1: Issue[] = [
  {
    id: "109c6972-962e-42e5-8832-f03a4d72748a",
    name: "Implement IndexedDB local database",
    description:
      "All the data must be store in the IndexedDB so it is persistent in the same device. All actions that currently modifies the store must be reflected on the local DB too. Thinking about implement an interface that handle both cases or just call two methods on the same user action.",
    reporter: userMock1,
    asignee: userMock1,
    comments: [commentMock2, commentMock3],
    priority: "high",
    categoryType: "DONE",
    createdAt,
    updatedAt,
  },
  {
    id: "e3839865-357d-4a6e-8865-8089040c4649",
    name: "Add avatar images",
    description: "Thinking about using local images or import remotely",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: "low",
    categoryType: "DONE",
    createdAt,
    updatedAt,
  },
  {
    id: "13f60b73-c38e-4921-886a-48c6a93ea2b7",
    name: "Sort issues",
    description: "By date or by priority. Don't know if it is good UX",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: "low",
    categoryType: "DONE",
    createdAt,
    updatedAt,
  },
];

// PROJECT 2
export const todoIssuesMock2: Issue[] = [
  {
    id: "f3efefcf-7859-4241-8b03-4ae815183355",
    name: "Add and display issue timestamps",
    description:
      "Id should be create automatically on new Issue(). It must be displayed on issue panel, as well as an updatedAt parameter",
    reporter: userMock1,
    asignee: userMock2,
    comments: [],
    priority: "medium",
    categoryType: "TODO",
    createdAt,
    updatedAt,
  },
  {
    id: "6bf6a1f4-20bb-492b-8ea4-4aa18efeb062",
    name: "Add projects section and the ability to create multiple projects",
    description:
      "Router would be needed. Can create and edit project, as well as add users to that particular project",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: "low",
    categoryType: "TODO",
    createdAt,
    updatedAt,
  },
];

export const inProgressIssuesMock2: Issue[] = [
  {
    id: "812664aa-82be-418b-9ba3-1d7acdcd6be2",
    name: "Add dark mode",
    description: "",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: "high",
    categoryType: "IN_PROGRESS",
    createdAt,
    updatedAt,
  },
];

export const doneIssuesMock2: Issue[] = [];
