import { UserId } from 'domain/user';
import { Issue, IssueId } from 'domain/issue';
import { Comment, CommentId } from 'domain/comment';
import db from './db';
import { PromiseExtended, IndexableType } from 'dexie';

export interface CommentDB {
  issueId: IssueId;
  id: CommentId;
  message: string;
  userId: UserId;
  createdAt: Date;
}

const commentDbPipe = (comment: Comment, issueId: IssueId): CommentDB => ({
  issueId,
  id: comment.id,
  message: comment.message,
  userId: comment.user.id,
  createdAt: comment.createdAt,
});

export const populateComments = (issue: Issue): void => {
  issue.comments.forEach((comment) => {
    const commentDbData = commentDbPipe(comment, issue.id);
    db.comments.add(commentDbData);
  });
};

export const addCommentDb = (
  comment: Comment,
  issueId: IssueId
): PromiseExtended<IndexableType> => {
  const commentDb = commentDbPipe(comment, issueId);
  return db.comments.put(commentDb);
};

export const removeCommentDb = (commentId: CommentId): void => {
  db.comments.delete(commentId);
};

export const updateCommentDb = (commentId: CommentId, message: string): void => {
  db.comments.update(commentId, { message });
};
