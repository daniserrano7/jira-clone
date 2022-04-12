import { User } from "../user";


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

export const createComment = (data: CommentData): Comment => ({
  ...data,

  setMessage: function(message: string) {
    this.message = message;
  },
})