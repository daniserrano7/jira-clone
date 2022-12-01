import { Prisma } from "@prisma/client";
import { User, UserId } from "@domain/user";
import { CategoryType, CategoryId } from "@domain/category";
import { IssueId } from "@domain/issue";
import { Priority } from "@domain/priority";
import { CommentData, CommentId } from "@domain/comment";
import { dnull } from "@infrastructure/utils/dnull";
import { db } from "./db.server";

type GetIssue = {
  id: IssueId;
  name: string;
  description?: string;
  categoryId: CategoryId;
  categoryType: CategoryType;
  priority: Priority;
  asignee: User;
  reporter: User;
  createdAt: Date;
  updatedAt: Date;
  comments: {
    id: CommentId;
    message: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

export const getIssue = async (issueId: IssueId): Promise<GetIssue | null> => {
  const issueDb = await db.issue.findUnique({
    where: {
      id: issueId,
    },
    include: {
      asignee: true,
      reporter: true,
      category: true,
      comments: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!issueDb) {
    return null;
  }

  const issue: GetIssue = {
    id: issueDb.id,
    name: issueDb.name,
    description: issueDb.description || undefined,
    categoryId: issueDb.category.type,
    categoryType: issueDb.category.type as CategoryType,
    priority: issueDb.priority as Priority,
    asignee: dnull(issueDb.asignee),
    reporter: dnull(issueDb.reporter),
    comments: issueDb.comments.map((comment) => ({
      ...comment,
      user: dnull(comment.user),
    })),
    createdAt: issueDb.createdAt,
    updatedAt: issueDb.updatedAt,
  };

  return issue;
};

export type CreateIssueInputData = {
  name: string;
  description: string;
  categoryId: CategoryId;
  priority: Priority;
  asigneeId: UserId;
  reporterId: UserId;
  comments: CommentData[];
};

export type UpdateIssueInputData = CreateIssueInputData & { id: IssueId };

export const updateIssue = async (issue: UpdateIssueInputData) => {
  await db.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      ...issue,
      comments: {
        upsert: issue.comments.map((comment) => {
          const commentInput: Omit<Prisma.CommentCreateInput, "issue"> = {
            id: comment.id,
            message: comment.message,
            user: { connect: { id: comment.user.id } },
          };

          return {
            where: { id: comment.id },
            create: {
              ...commentInput,
              id: undefined,
            },
            update: commentInput,
          };
        }),
      },
    },
  });
};
