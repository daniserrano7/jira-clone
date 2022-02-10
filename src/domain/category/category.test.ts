import { Category, addIssue, removeIssue } from "./category";
import { issueMock1 } from "domain/issue";

describe("Category entity module", () => {
  it("Add issue to category", () => {
    const issue = issueMock1;
    const reference: Category = {
      id: "TODO",
      name: "To Do",
      issues: [],
    }
    const expected: Category = {
      id: "TODO",
      name: "To Do",
      issues: [issue],
    }
    const result = addIssue(reference, issue);

    expect(result).toEqual(expected);
  })

  it("Remove issue from category", () => {
    const issue = issueMock1;
    const reference: Category = {
      id: "TODO",
      name: "To Do",
      issues: [issue],
    }
    const expected: Category = {
      id: "TODO",
      name: "To Do",
      issues: [],
    }
    const result = removeIssue(reference, issue.id);

    expect(result).toEqual(expected);
  })
})