import { v4 as uuidv4 } from "uuid";
import { User } from "../user";

// jest.mock("uuid", () => ({
//   v4: () => "some-uuid",
// }));

// console.log(uuidv4.v4())
// console.log(uuidv4.v4())

export type CommentId = string;

export interface CommentData {
  id: CommentId,
  user: User;
  message: string;
  //TODO: createdAt: timestamp
}

export interface Comment extends CommentData {
  setMessage: (message: string) => void;
}

export const createComment = (data: Omit<CommentData, "id">): Comment => ({
  id: uuidv4(),
  ...data,

  setMessage: function(message: string) {
    this.message = message;
  },
});