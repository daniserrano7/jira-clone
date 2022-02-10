import { User, UserId } from "../user/user";
import { Priority } from "../priority/priority";

export type IssueId = number;
export type Issue = {
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

type CommentId = number;
export type Comment = {
  id: CommentId,
  user: User;
  message: string;
  //TODO: createdAt: timestamp
}

//TODO: ¿¿ createIssue ??

export const setName = (issue: Issue, name: string): Issue => {
  return {
    ...issue,
    name,
  }
}

export const setDescription = (issue: Issue, description: string): Issue => {
  return {
    ...issue,
    description,
  }
}

export const addAsignee = (issue: Issue, asignee: User): Issue => {
  const updatedAsignees = [...issue.asignees, asignee];
  return {
    ...issue,
    asignees: updatedAsignees,
  }
}

export const removeAsignee = (issue: Issue, asigneeId: UserId): Issue => {
  const updatedAsignees = issue.asignees.filter(asignee => asignee.id !== asigneeId);
  return {
    ...issue,
    asignees: updatedAsignees,
  }
}

export const setPriority = (issue: Issue, priority: Priority): Issue => {
  return {
    ...issue,
    priority,
  }
}

export const addComment = (issue: Issue, comment: Comment): Issue => {
  const updatedComments = [...issue.comments, comment];
  return {
    ...issue,
    comments: updatedComments,
  }
}

export const removeComment = (issue: Issue, commentId: CommentId): Issue => {
  const updatedComments = issue.comments.filter(comment => comment.id !== commentId);
  return {
    ...issue,
    comments: updatedComments,
  }
}