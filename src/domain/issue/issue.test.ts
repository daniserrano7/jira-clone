import { userMock1, userMock2 } from "domain/user";
import { commentMock1 } from "domain/comment";
import { toPlainObject } from "domain/utils";
import { createIssue } from "./issue";


jest.mock("uuid", () => ({
  v4: () => "mock-uuid",
}));
describe("Issue entity module", () => {
  it("Change issue name", () => {
    const name = "Issue name test";
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
    });
    const expected = createIssue({
      name,
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
    });
    reference.setName(name);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Change issue description", () => {
    const description = "Issue description test";
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
    });
    const expected = createIssue({
      name: "Refactor entities id to UUID",
      description,
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
    });
    reference.setDescription(description);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Set issue asignee", () => {
    const asignee = userMock2;
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignee: userMock1,
      comments: [],
      priority: "high",
    });
    const expected = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
    });
    reference.setAsignee(asignee);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Add comment to issue", () => {
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
    });
    const expected = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignee: userMock2,
      comments: [commentMock1],
      priority: "high",
    });
    reference.addComment(commentMock1);
    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Remove comment from issue", () => {
    const reference = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignee: userMock2,
      comments: [commentMock1],
      priority: "high",
    });
    const expected = createIssue({
      name: "Refactor entities id to UUID",
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: "high",
    });
    const removedComment = reference.removeComment(commentMock1.id);
    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
    
    if (removedComment) {
      expect(toPlainObject(removedComment)).toEqual(toPlainObject(commentMock1));
    }
  });
});