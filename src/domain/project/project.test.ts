import { describe, it, expect } from "vitest";
import { User, userMock1 } from "@domain/user";
import { categoriesMock } from "@domain/category";
import { Project } from "./project";

describe("Project entity module", () => {
  const mockCategory = categoriesMock[0];
  const projectId = "1";

  it("Set project name", () => {
    const name = "Project name test";
    const reference = new Project({
      id: projectId,
      name: "Original name",
      users: [userMock1],
      categories: [mockCategory],
    });
    const expected = new Project({
      id: projectId,
      name,
      users: [userMock1],
      categories: [mockCategory],
    });
    reference.setName(name);

    expect(reference).toEqual(expected);
  });

  it("Add user to project", () => {
    const reference = new Project({
      id: projectId,
      name: "Original name",
      users: [],
      categories: [mockCategory],
    });
    const expected = new Project({
      id: projectId,
      name: "Original name",
      users: [userMock1],
      categories: [mockCategory],
    });
    reference.addUser(new User(userMock1));

    expect(reference).toEqual(expected);
  });

  it("Remove user from project", () => {
    const user = userMock1;
    const reference = new Project({
      id: projectId,
      name: "Original name",
      users: [user],
      categories: [mockCategory],
    });
    const expected = new Project({
      id: projectId,
      name: "Original name",
      users: [],
      categories: [mockCategory],
    });
    const removedUser = reference.removeUser(user.id);

    expect(reference).toEqual(expected);
    expect(removedUser).toEqual(user);
  });

  it("Remove undefined user from project", () => {
    const reference = new Project({
      id: projectId,
      name: "Original name",
      users: [userMock1],
      categories: [mockCategory],
    });
    const removedUser = reference.removeUser("abcxyz");

    expect(reference).toEqual(reference);
    expect(removedUser).toEqual(undefined);
  });
});
