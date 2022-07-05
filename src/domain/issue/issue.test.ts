import { describe, it, expect, vi } from "vitest";
import { userMock1, userMock2 } from "domain/user";
import { createComment } from "domain/comment";
import { toPlainObject } from "domain/utils";
import { createIssue } from "./issue";


vi.mock("uuid", () => ({
  v4: () => "mock-uuid",
}));

const commentMock = createComment({
  user: userMock2,
  message: "This should be implemented ASAP",
});

describe("Issue entity module", () => {
  const createdAt = new Date();

  it("Change issue name", () => {
    const name = "Issue name test";
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
      createdAt,
    });
    const expected = createIssue({
      name,
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
      createdAt,
    });
    reference.setName(name);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Change issue description", () => {
    const description = "Issue description test";
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
      createdAt,
    });
    const expected = createIssue({
      name: "Refactor entities id to UUID",
      description,
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
      createdAt,
    });
    reference.setDescription(description);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Set issue asignee", () => {
    const asignee = userMock2;
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock1,
      comments: [],
      priority: "high",
      createdAt,
    });
    const expected = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
      createdAt,
    });
    reference.setAsignee(asignee);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Add comment to issue", () => {
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
      createdAt,
    });
    const expected = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock2,
      comments: [commentMock],
      priority: "high",
      createdAt,
    });
    reference.addComment(commentMock);
    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Remove comment from issue", () => {
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock2,
      comments: [commentMock],
      priority: "high",
      createdAt,
    });
    const expected = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryId: "TODO",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
      createdAt,
    });
    const removedComment = reference.removeComment(commentMock.id);
    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
    
    if (removedComment) {
      expect(toPlainObject(removedComment)).toEqual(toPlainObject(commentMock));
    }
  });
});