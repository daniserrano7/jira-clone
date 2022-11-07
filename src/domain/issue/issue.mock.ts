import { IssueData } from './issue';
import { Comment } from 'domain/comment';
import { userMock1, userMock2 } from 'domain/user';

export const todoIssues: IssueData[] = [
  {
    name: 'Add and display issue timestamps',
    description:
      'Is should be create automatically on new Issue(). It must be displayed on issue panel, as well as an updatedAt parameter',
    reporter: userMock1,
    asignee: userMock2,
    comments: [
      new Comment({
        user: userMock2,
        message:
          'Adipisicing irure non voluptate id magna enim minim labore. Lorem deserunt velit sit ea ullamco laborum laboris culpa laborum. Minim cillum et dolore ipsum occaecat commodo. Sint esse sit consequat aute velit duis. Id et proident aute velit consectetur Lorem velit aliqua id. Duis sit proident veniam qui aliquip aute aliquip ad do. Duis deserunt veniam ipsum quis cupidatat voluptate dolor ullamco nisi duis occaecat ex non ad.',
      }),
    ],
    priority: 'medium',
  },
  {
    name: 'Add projects section and the ability to create multiple projects',
    description:
      'Router would be needed. Can create and edit project, as well as add users to that particular project',
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: 'low',
  },
  {
    name: 'Add more filters',
    description: "E.g. 'My issues' or by priority",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: 'low',
  },
  {
    name: 'Create quick guide about the app',
    description:
      'A dropdown panel with few steps about funcionalities. The first time it should be open by default. Control this through localStorage',
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: 'medium',
  },
];

export const inProgressIssues: IssueData[] = [
  {
    name: 'Update and improve Github repo README',
    description: '',
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: 'high',
  },
];

export const doneIssues: IssueData[] = [
  {
    name: 'Implement IndexedDB local database',
    description:
      'All the data must be store in the IndexedDB so it is persistent in the same device. All actions that currently modifies the store must be reflected on the local DB too. Thinking about implement an interface that handle both cases or just call two methods on the same user action.',
    reporter: userMock1,
    asignee: userMock1,
    comments: [
      new Comment({
        user: userMock2,
        message: 'This should be implemented ASAP',
      }),
      new Comment({
        user: userMock1,
        message: "Ok, I'm on it",
      }),
    ],
    priority: 'high',
  },
  {
    name: 'Add avatar images',
    description: 'Thinking about using local images or import remotely',
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: 'low',
  },
  {
    name: 'Sort issues',
    description: "By date or by priority. Don't know if it is good UX",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: 'low',
  },
];
