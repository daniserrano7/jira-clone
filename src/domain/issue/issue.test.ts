import { describe, it, expect } from "vitest";
import { User, userMock1, userMock2 } from "@domain/user";
import { Comment, commentMock1 } from "@domain/comment";
import { Issue } from "./issue";

describe("Issue entity module", () => {
  const issueId = "1";
  const createdAt = new Date();
  const user1 = new User(userMock1);
  const user2 = new User(userMock2);
  const commentMock = new Comment(commentMock1);

  it("Change issue name", () => {
    const name = "Issue name test";
    const reference = new Issue({
      id: issueId,
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryType: "TODO",
      reporter: user1,
      asignee: user2,
      comments: [],
      priority: "high",
      createdAt,
    });
    const expected = new Issue({
      id: issueId,
      name,
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryType: "TODO",
      reporter: user1,
      asignee: user2,
      comments: [],
      priority: "high",
      createdAt,
    });
    reference.setName(name);

    expect(reference).toEqual(expected);
  });

  it("Change issue description", () => {
    const description = "Issue description test";
    const reference = new Issue({
      id: issueId,
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryType: "TODO",
      reporter: user1,
      asignee: user2,
      comments: [],
      priority: "high",
      createdAt,
    });
    const expected = new Issue({
      id: issueId,
      name: "Refactor entities id to UUID",
      description,
      categoryType: "TODO",
      reporter: user1,
      asignee: user2,
      comments: [],
      priority: "high",
      createdAt,
    });
    reference.setDescription(description);

    expect(reference).toEqual(expected);
  });

  it("Set issue asignee", () => {
    const asignee = user2;
    const reference = new Issue({
      id: issueId,
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryType: "TODO",
      reporter: user1,
      asignee: user1,
      comments: [],
      priority: "high",
      createdAt,
    });
    const expected = new Issue({
      id: issueId,
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryType: "TODO",
      reporter: user1,
      asignee: user2,
      comments: [],
      priority: "high",
      createdAt,
    });
    reference.setAsignee(asignee);

    expect(reference).toEqual(expected);
  });

  it("Add comment to issue", () => {
    const reference = new Issue({
      id: issueId,
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryType: "TODO",
      reporter: user1,
      asignee: user2,
      comments: [],
      priority: "high",
      createdAt,
    });
    const expected = new Issue({
      id: issueId,
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryType: "TODO",
      reporter: user1,
      asignee: user2,
      comments: [commentMock],
      priority: "high",
      createdAt,
    });
    reference.addComment(commentMock);
    expect(reference).toEqual(expected);
  });

  it("Remove comment from issue", () => {
    const reference = new Issue({
      id: issueId,
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryType: "TODO",
      reporter: user1,
      asignee: user2,
      comments: [commentMock],
      priority: "high",
      createdAt,
    });
    const expected = new Issue({
      id: issueId,
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      categoryType: "TODO",
      reporter: user1,
      asignee: user2,
      comments: [],
      priority: "high",
      createdAt,
    });
    const removedComment = reference.removeComment(commentMock.id);
    expect(reference).toEqual(expected);

    if (removedComment) {
      expect(removedComment).toEqual(commentMock);
    }
  });
});
