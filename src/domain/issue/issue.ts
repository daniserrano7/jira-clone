import { v4 as uuidv4 } from "uuid";
import { User, UserId } from "../user";
import { CategoryId } from "domain/category";
import { Comment, CommentId } from "../comment";
import { Priority } from "../priority";

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
  //TODO: createdAt: timestamp
  //TODO: updatedAt: timestamp
}

export interface Issue extends IssueData {
  id: Readonly<IssueId>;
  categoryId: CategoryId;
  createdAt: Readonly<Date>;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setCategoryId: (categoryId: CategoryId) => void;
  setPriority: (priority: Priority) => void;
  setAsignee: (asignee: User) => void;
  getComment: (commentId: CommentId) => Comment | undefined;
  addComment: (comment: Comment) => void;
  removeComment: (commentId: CommentId) => Comment | undefined;
}

export const createIssue = (data: CreateIssue): Issue => ({
  id: uuidv4(),
  description: "",
  createdAt: new Date(),
  ...data,

  setName: function(name: string) {
    this.name = name;
  },

  setDescription: function(description: string) {
    this.description = description;
  },

  setCategoryId: function(categoryId: CategoryId) {
    this.categoryId = categoryId;
  },

  setPriority: function(priority: Priority) {
    this.priority = priority;
  },

  setAsignee: function(asignee: User) {
    this.asignee = asignee;
  },
  
  getComment: function(commentId: CommentId) {
    return this.comments.find(comment => comment.id === commentId);
  },

  addComment: function(comment: Comment) {
    this.comments.unshift(comment);
  },

  removeComment: function(commentId: CommentId) {
    this.comments = this.comments.filter(comment => comment.id !== commentId);
    const removedComment = this.getComment(commentId);
    return removedComment;
  },
});

interface CreateIssue extends IssueData {
  categoryId: CategoryId;
}