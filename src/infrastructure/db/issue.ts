import { CategoryType } from "@domain/category";
import { Priority } from "@domain/priority";
import { IssueId, IssueData } from "@domain/issue";
import { db } from "./db.server";
import { dnull } from "@infrastructure/utils/dnull";

export const getIssue = async (issueId: IssueId): Promise<IssueData | null> => {
  const issueDb = await db.issue.findUnique({
    where: {
      id: issueId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      categoryType: true,
      priority: true,
      asignee: true,
      reporter: true,
      createdAt: true,
      updatedAt: true,
      comments: {
        select: {
          id: true,
          message: true,
          user: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  if (!issueDb) {
    return null;
  }

  const categoryType = issueDb.categoryType as CategoryType;
  const priority = issueDb.priority as Priority;

  // TODO: fix this
  // Dificult to type cast all nested objects
  // The error comes from user image and date functions
  return dnull({
    ...issueDb,
    categoryType,
    priority,
  }) as unknown as IssueData;
};

export const createIssue = async () => {
  const issueNumber = Math.floor(Math.random() * 1000);
  await db.issue.create({
    data: {
      name: `Issue ${issueNumber}`,
      description: "Issue 1 description",
      categoryId: "1e8877a7-91dc-46de-bce0-f077ad922fc8",
      categoryType: "TODO",
      priority: "low",
      asigneeId: "1c6855bf-9a0f-4a45-9641-7b7c7855c570",
      reporterId: "1c6855bf-9a0f-4a45-9641-7b7c7855c570",
    },
  });
};
