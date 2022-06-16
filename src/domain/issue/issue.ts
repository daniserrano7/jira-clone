import { v4 as uuidv4 } from "uuid";
import { User, userMock1 } from "../user";
import { Comment, CommentId } from "../comment";
import { Priority } from "../priority";

export type IssueId = string; 
export interface IssueData {
  id: Readonly<IssueId>;
  name: string;
  description?: string;
  reporter: User;
  asignee: User;
  comments: Comment[];
  priority: Priority;
  //TODO: epic: Epic
  //TODO: createdAt: timestamp
  //TODO: updatedAt: timestamp
}

export interface Issue extends IssueData {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setPriority: (priority: Priority) => void;
  setAsignee: (asignee: User) => void;
  getComment: (commentId: CommentId) => Comment | undefined;
  addComment: (comment: Comment) => void;
  removeComment: (commentId: CommentId) => Comment | undefined;
}

export const createIssue = (data: Partial<Omit<IssueData, "id">>): Issue => ({
  id: uuidv4(),
  name: "",
  description: "",
  reporter: userMock1,
  asignee: userMock1,
  comments: [],
  priority: "low",
  ...data,

  setName: function(name: string) {
    this.name = name;
  },

  setDescription: function(description: string) {
    this.description = description;
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
    this.comments.push(comment);
  },

  removeComment: function(commentId: CommentId) {
    this.comments = this.comments.filter(comment => comment.id !== commentId);
    const removedComment = this.getComment(commentId);
    return removedComment;
  },
});