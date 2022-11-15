import { v4 as uuidv4 } from "uuid";
import { User, UserData, UserId } from "../user";
import { CategoryId } from "@domain/category";
import { Comment, CommentData, CommentId } from "../comment";
import { Priority } from "../priority";

export type IssueId = string;
export interface IssueData {
  id: UserId;
  name: string;
  description?: string;
  categoryId?: CategoryId;
  reporter: UserData;
  asignee: UserData;
  comments: CommentData[];
  priority: Priority;
  createdAt?: Date;
  //TODO: epic: Epic
  //TODO: updatedAt: timestamp
}

export class Issue implements IssueData {
  readonly id: IssueId;
  name: string;
  description: string;
  categoryId: CategoryId;
  reporter: User;
  asignee: User;
  comments: Comment[];
  priority: Priority;
  createdAt: Date;

  constructor(data: IssueData) {
    this.id = data.id || uuidv4();
    this.name = data.name;
    this.description = data.description || "";
    this.categoryId = data.categoryId || "TODO";
    this.reporter = new User(data.reporter);
    this.asignee = new User(data.asignee);
    this.comments = data.comments.map((comment) => new Comment(comment));
    this.priority = data.priority;
    this.createdAt = data.createdAt || new Date();
  }

  setName(name: string) {
    this.name = name;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setCategoryId(categoryId: CategoryId) {
    this.categoryId = categoryId;
  }

  setPriority(priority: Priority) {
    this.priority = priority;
  }

  setAsignee(asignee: User) {
    this.asignee = asignee;
  }

  getComment(commentId: CommentId) {
    return this.comments.find((comment) => comment.id === commentId);
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  removeComment(commentId: CommentId) {
    this.comments = this.comments.filter((comment) => comment.id !== commentId);
    const removedComment = this.getComment(commentId);
    return removedComment;
  }

  setComments(comments: Comment[]) {
    this.comments = comments;
  }
}
