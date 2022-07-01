import { UserId } from "domain/user";
import { Issue, IssueId } from "domain/issue";
import { Comment, CommentId } from "domain/comment";
import db from "./db";


const commentDbPipe = (comment: Comment, issueId: IssueId): CommentDB => ({
  issueId,
  id: comment.id,
  message: comment.message,
  userId: comment.user.id,
  createdAt: comment.createdAt,
});

export const populateComments = (issue: Issue): void => {
  issue.comments.forEach(comment => {
    const commentDbData = commentDbPipe(comment, issue.id);
    db.comments.add(commentDbData);
  });
}

export interface CommentDB {
  issueId: IssueId;
  id: CommentId;
  message: string;
  userId: UserId;
  createdAt: Date;
}