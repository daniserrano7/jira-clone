import { describe, it, expect, vi } from "vitest";
import { userMock1 } from "domain/user";
import { categoriesMock } from "domain/category";
import { toPlainObject } from "domain/utils";
import { createProject } from "./project";


vi.mock("uuid", () => ({
  v4: () => "mock-uuid",
}));

const mockCategory = categoriesMock[0];
describe("Project entity module", () => {
  it("Set project name", () => {
    const name = "Project name test";
    const reference = createProject({
      name: "Original name",
      users: [userMock1],
      categories: [mockCategory],
    });
    const expected = createProject({
      name,
      users: [userMock1],
      categories: [mockCategory],
    });
    reference.setName(name);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Add user to project", () => {
    const reference = createProject({
      name: "Original name",
      users: [],
      categories: [mockCategory],
    });
    const expected = createProject({
      name: "Original name",
      users: [userMock1],
      categories: [mockCategory],
    });
    reference.addUser(userMock1);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Remove user from project", () => {
    const user = userMock1;
    const reference = createProject({
      name: "Original name",
      users: [user],
      categories: [mockCategory],
    });
    const expected = createProject({
      name: "Original name",
      users: [],
      categories: [mockCategory],
    });
    const removedUser = reference.removeUser(user.id);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
    expect(removedUser).toEqual(user);
  });

  it("Remove undefined user from project", () => {
    const reference = createProject({
      name: "Original name",
      users: [userMock1],
      categories: [mockCategory],
    });
    const removedUser = reference.removeUser("abcxyz");

    expect(toPlainObject(reference)).toEqual(toPlainObject(reference));
    expect(removedUser).toEqual(undefined);
  });
})