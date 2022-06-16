import { userMock1 } from "domain/user";
import { createComment } from "./comment";


export const commentMock1 = createComment({
  user: userMock1,
  message: "Comment 1",
});