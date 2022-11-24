import { describe, it, expect } from "vitest";
import { v4 as uuid } from "uuid";
import { Issue, todoIssuesMock1 } from "@domain/issue";
import { Category, CategoryType, categoryTypeDict } from "./category";

describe("Category entity module", () => {
  it("Add issue to category", () => {
    const id = uuid();
    const type: CategoryType = "TODO";
    const issue = new Issue({
      ...todoIssuesMock1[0],
      categoryType: type,
    });
    const reference = new Category({
      id,
      type,
      name: categoryTypeDict[type],
      issues: [],
      order: 1,
    });
    const expected = new Category({
      id,
      type,
      name: categoryTypeDict[type],
      issues: [issue],
      order: 1,
    });
    reference.addIssue(issue);

    expect(reference).toEqual(expected);
  });

  it("Remove issue from category", () => {
    const id = uuid();
    const type: CategoryType = "TODO";
    const issue = new Issue({
      ...todoIssuesMock1[0],
      categoryType: type,
    });
    const reference = new Category({
      id,
      type,
      name: categoryTypeDict[type],
      issues: [issue],
      order: 1,
    });
    const expected = new Category({
      id,
      type,
      name: categoryTypeDict[type],
      issues: [],
      order: 1,
    });
    reference.removeIssue(issue.id);

    expect(reference).toEqual(expected);
  });
});
