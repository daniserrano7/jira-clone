import { createIssue, issueMock1 } from "domain/issue";
import { toPlainObject } from "domain/utils";
import { Category, createCategory } from "./category";

describe("Category entity module", () => {
  it("Add issue to category", () => {
    const issue = createIssue(issueMock1);
    const reference: Category = createCategory({
      id: "TODO",
      name: "To Do",
      issues: [],
    });
    const expected: Category = createCategory({
      id: "TODO",
      name: "To Do",
      issues: [issue],
    });
    reference.addIssue(issue);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Remove issue from category", () => {
    const issue = createIssue(issueMock1);
    const reference: Category = createCategory({
      id: "TODO",
      name: "To Do",
      issues: [issue],
    });
    const expected: Category = createCategory({
      id: "TODO",
      name: "To Do",
      issues: [],
    });
    reference.removeIssue(issue.id);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });
});