import { v4 as uuidv4 } from 'uuid';
import { User, UserId } from '../user';
import { CategoryId } from 'domain/category';
import { Comment, CommentId } from '../comment';
import { Priority } from '../priority';

export type IssueId = string;
export interface IssueData {
  id?: UserId;
  name: string;
  description?: string;
  categoryId?: CategoryId;
  reporter: User;
  asignee: User;
  comments: Comment[];
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
    this.description = data.description || '';
    this.categoryId = data.categoryId || 'TODO';
    this.reporter = data.reporter;
    this.asignee = data.asignee;
    this.comments = data.comments || [];
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
}
