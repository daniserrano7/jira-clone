import { v4 as uuidv4 } from "uuid";
import { User } from "../user";
import { Comment } from "../comment";
import { Priority } from "../priority";

export type IssueId = string;
export interface IssueData {
  id: Readonly<IssueId>;
  name: string;
  description?: string;
  reporter: User;
  asignees: User[];
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
  // addAsignee: (asignee: User) => void;
  // removeAsignee: (asigneeId: UserId) => void;
  // addComment: (comment: Comment) => void;
  // removeComment: (commentId: CommentId) => void;
}

export const createIssue = (data: Omit<IssueData, "id">): Issue => ({
  id: uuidv4(),
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
});

// export const addAsignee = (issue: Issue, asignee: User): Issue => {
//   const updatedAsignees = [...issue.asignees, asignee];
//   return {
//     ...issue,
//     asignees: updatedAsignees,
//   }
// }

// export const removeAsignee = (issue: Issue, asigneeId: UserId): Issue => {
//   const updatedAsignees = issue.asignees.filter(asignee => asignee.id !== asigneeId);
//   return {
//     ...issue,
//     asignees: updatedAsignees,
//   }
// }

// export const setPriority = (issue: Issue, priority: Priority): Issue => {
//   return {
//     ...issue,
//     priority,
//   }
// }

// export const addComment = (issue: Issue, comment: Comment): Issue => {
//   const updatedComments = [...issue.comments, comment];
//   return {
//     ...issue,
//     comments: updatedComments,
//   }
// }

// export const removeComment = (issue: Issue, commentId: CommentId): Issue => {
//   const updatedComments = issue.comments.filter(comment => comment.id !== commentId);
//   return {
//     ...issue,
//     comments: updatedComments,
//   }
// }