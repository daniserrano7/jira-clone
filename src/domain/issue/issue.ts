import { v4 as uuidv4 } from "uuid";
import { User, UserData, UserId } from "../user";
import { CategoryId, CategoryType } from "@domain/category";
import { Comment, CommentData, CommentId } from "../comment";
import { Priority } from "../priority";

export type IssueId = string;
export interface IssueData {
  id: UserId;
  name: string;
  description?: string;
  categoryId: CategoryId;
  categoryType?: CategoryType;
  reporter: UserData;
  asignee: UserData;
  comments: CommentData[];
  priority: Priority;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Issue implements IssueData {
  readonly id: IssueId;
  name: string;
  description: string;
  categoryId: CategoryId;
  categoryType: CategoryType;
  reporter: User;
  asignee: User;
  comments: Comment[];
  priority: Priority;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: IssueData) {
    this.id = data.id || uuidv4();
    this.name = data.name;
    this.description = data.description || "";
    this.categoryId = data.categoryId;
    this.categoryType = data.categoryType || "TODO";
    this.reporter = new User(data.reporter);
    this.asignee = new User(data.asignee);
    this.comments = [];
    this.priority = data.priority;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();

    data.comments.forEach((comment) => {
      try {
        this.comments.push(new Comment(comment));
      } catch (error) {
        console.error(`Error in issue ${data.id} creating comment: ${comment.id}`, comment, error);
      }
    });
  }

  setName(name: string) {
    this.name = name;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setCategoryId(categoryId: CategoryType) {
    this.categoryType = categoryId;
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
