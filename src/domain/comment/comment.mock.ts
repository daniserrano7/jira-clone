import { userMock1, userMock2 } from "domain/user";
import { createComment } from "./comment";


export const commentMock1 = createComment({
  user: userMock1,
  message: "Comment 1",
});

export const commentMock2 = createComment({
  user: userMock2,
  message: `
    Adipisicing irure non voluptate id magna enim minim labore. Lorem deserunt velit sit ea ullamco laborum laboris culpa laborum. Minim cillum et dolore ipsum occaecat commodo. Sint esse sit consequat aute velit duis. Id et proident aute velit consectetur Lorem velit aliqua id. Duis sit proident veniam qui aliquip aute aliquip ad do. Duis deserunt veniam ipsum quis cupidatat voluptate dolor ullamco nisi duis occaecat ex non ad.
  `,
});