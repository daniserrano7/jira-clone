import { Issue as IssueDB } from "@prisma/client";
import { CategoryType } from "@domain/category";
import { Priority } from "@domain/priority";
import { IssueId, IssueData, Issue } from "@domain/issue";
import { db } from "./db.server";
import { dnull } from "@infrastructure/utils/dnull";

export const getIssue = async (issueId: IssueId): Promise<IssueData | null> => {
  const issue = await db.issue.findUnique({
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

  if (!issue) {
    return null;
  }

  const categoryType = issue.categoryType as CategoryType;
  const priority = issue.priority as Priority;

  // const newIssue = dnull({
  //   ...issue,
  //   categoryType,
  // });

  const newIssue: IssueData = {
    ...issue,
    categoryType,
    priority,
    description: issue.description || undefined,
    asignee: {
      ...issue.asignee,
      image: issue.asignee.image || undefined,
    },
    reporter: {
      ...issue.reporter,
      image: issue.reporter.image || undefined,
    },
    comments: issue.comments.map((comment) => ({
      ...comment,
      user: {
        ...comment.user,
        image: comment.user.image || undefined,
      },
    })),
  };
  console.log("newIssue", newIssue);

  return newIssue;
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
