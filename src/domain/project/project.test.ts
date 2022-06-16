import { userMock1 } from "domain/user";
import { categoryMock1 } from "domain/category";
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

    expect(reference).toEqual(expected);
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

    expect(reference).toEqual(expected);
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

    expect(reference).toEqual(expected);
    expect(removedUser).toEqual(user);
  });

  it("Remove undefined user from project", () => {
    const reference = createProject({
      id: 1,
      name: "Original name",
      users: [userMock1],
      categories: [categoryMock1],
    });
    const removedUser = reference.removeUser(999);

    expect(reference).toEqual(reference);
    expect(removedUser).toEqual(undefined);
  });
})