import { userMock1 } from "domain/user";
import { categoryMock1 } from "domain/category";
import { toPlainObject } from "domain/utils";
import { createProject } from "./project";

describe("Project entity module", () => {
  it("Set project name", () => {
    const name = "Project name test";
    const reference = createProject({
      id: 1,
      name: "Original name",
      users: [userMock1],
      categories: [categoryMock1],
    });
    const expected = createProject({
      id: 1,
      name,
      users: [userMock1],
      categories: [categoryMock1],
    });
    reference.setName(name);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Add user to project", () => {
    const reference = createProject({
      id: 1,
      name: "Original name",
      users: [],
      categories: [categoryMock1],
    });
    const expected = createProject({
      id: 1,
      name: "Original name",
      users: [userMock1],
      categories: [categoryMock1],
    });
    reference.addUser(userMock1);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
  });

  it("Remove user from project", () => {
    const user = userMock1;
    const reference = createProject({
      id: 1,
      name: "Original name",
      users: [user],
      categories: [categoryMock1],
    });
    const expected = createProject({
      id: 1,
      name: "Original name",
      users: [],
      categories: [categoryMock1],
    });
    const removedUser = reference.removeUser(user.id);

    expect(toPlainObject(reference)).toEqual(toPlainObject(expected));
    expect(removedUser).toEqual(user);
  });

  it("Remove undefined user from project", () => {
    const reference = createProject({
      id: 1,
      name: "Original name",
      users: [userMock1],
      categories: [categoryMock1],
    });
    const removedUser = reference.removeUser("abcxyz");

    expect(toPlainObject(reference)).toEqual(toPlainObject(reference));
    expect(removedUser).toEqual(undefined);
  });
})