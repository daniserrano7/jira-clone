import { v4 as uuidv4 } from "uuid";
import { User, UserData } from "../user";

export type CommentId = string;
export interface CommentData {
  id: CommentId;
  user: UserData;
  message: string;
  createdAt?: Date;
}

export class Comment implements CommentData {
  readonly id: CommentId;
  user: User;
  message: string;
  createdAt: Date;

  constructor(data: CommentData) {
    this.id = data.id || uuidv4();
    this.user = new User(data.user);
    this.message = data.message;
    this.createdAt = data.createdAt || new Date();
  }

  setMessage(message: string) {
    this.message = message;
  }
}
