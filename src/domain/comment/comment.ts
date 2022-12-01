import { UserData } from "../user";

export type CommentId = string;
export interface Comment {
  id: CommentId;
  user: UserData;
  message: string;
  createdAt?: number;
  updatedAt?: number;
}
