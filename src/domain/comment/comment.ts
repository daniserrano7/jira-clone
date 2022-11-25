import { v4 as uuidv4 } from "uuid";
import { User, UserData } from "../user";

export type CommentId = string;
export interface CommentData {
  id: CommentId;
  user: UserData;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Comment implements CommentData {
  readonly id: CommentId;
  user: User;
  message: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: CommentData) {
    this.id = data.id || uuidv4();
    this.message = data.message;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();

    try {
      this.user = new User(data.user);
    } catch (error) {
      console.error(`Error in comment ${data.id} creating user: ${data.user.id}`, data.user, error);
      this.user = new User({ id: "error", name: "error" });
    }
  }

  setMessage(message: string) {
    this.message = message;
  }
}
