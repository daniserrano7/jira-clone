import { createIssue, todoIssues } from "domain/issue";
import { toPlainObject } from "domain/utils";
import { Category, CategoryId, createCategory, categoryIdDict } from "./category";

describe("Category entity module", () => {
  it("Add issue to category", () => {
    const id: CategoryId = "TODO";
    const issue = createIssue({
      ...todoIssues[0],
      categoryId: id,
    });
    const reference: Category = createCategory({
      id,
      name: categoryIdDict[id],
      issues: [],
    });
    const expected: Category = createCategory({
      id,
      name: categoryIdDict[id],
      issues: [issue],
    });
    reference.addIssue(issue);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Remove issue from category", () => {
    const id: CategoryId = "TODO";
    const issue = createIssue({
      ...todoIssues[0],
      categoryId: id,
    });
    const reference: Category = createCategory({
      id,
      name: categoryIdDict[id],
      issues: [issue],
    });
    const expected: Category = createCategory({
      id,
      name: categoryIdDict[id],
      issues: [],
    });
    reference.removeIssue(issue.id);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });
});