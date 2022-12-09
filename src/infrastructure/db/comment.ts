import { CommentId } from "@domain/comment";
import { db } from "./db.server";

export const deleteComment = async (commentId: CommentId): Promise<void> => {
  await db.comment.delete({
    where: {
      id: commentId,
    },
  });
};
