import { userMock1, userMock2 } from "@domain/user";
import { CommentData } from "./comment";

export const commentMock1: CommentData = {
  id: "1",
  user: userMock1,
  message: "Ok, I'm on it",
  createdAt: new Date("2020-10-10"),
};

export const commentMock2: CommentData = {
  id: "2",
  user: userMock2,
  message: "This should be implemented ASAP",
};

export const commentMock3: CommentData = {
  id: "3",
  user: userMock2,
  message:
    "Adipisicing irure non voluptate id magna enim minim labore. Lorem deserunt velit sit ea ullamco laborum laboris culpa laborum. Minim cillum et dolore ipsum occaecat commodo. Sint esse sit consequat aute velit duis. Id et proident aute velit consectetur Lorem velit aliqua id. Duis sit proident veniam qui aliquip aute aliquip ad do. Duis deserunt veniam ipsum quis cupidatat voluptate dolor ullamco nisi duis occaecat ex non ad.",
};
