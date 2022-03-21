import { User } from "../user";
import { Comment } from "../comment";
import { Priority } from "../priority";

export type IssueId = number;
export interface IssueData {
  id: IssueId;
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
  // addAsignee: (asignee: User) => void;
  // removeAsignee: (asigneeId: UserId) => void;
  // setPriority: (priority: Priority) => void;
  // addComment: (comment: Comment) => void;
  // removeComment: (commentId: CommentId) => void;
}

export const createIssue = (data: IssueData): Issue => ({
  ...data,

  setName: function(name: string) {
    this.name = name;
  },

  setDescription: function(description: string) {
    this.description = description;
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