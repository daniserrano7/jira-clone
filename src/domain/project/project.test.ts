import { Project, setName, addUser, removeUser } from "./project";
import { userMock1 } from "domain/user/";
import { categoryMock1 } from "domain/category";

describe("Project entity module", () => {
  it("Set project name", () => {
    const name = "Project name test";
    const reference: Project = {
      id: 1,
      name: "",
      users: [userMock1],
      categories: [categoryMock1],
    }
    const expected: Project = {
      id: 1,
      name,
      users: [userMock1],
      categories: [categoryMock1],
    }
    const result = setName(reference, name);

    expect(result).toEqual(expected);
  })

  it("Add user to project", () => {
    const user = userMock1;
    const reference: Project = {
      id: 1,
      name: "",
      users: [],
      categories: [categoryMock1],
    }
    const expected: Project = {
      id: 1,
      name: "",
      users: [user],
      categories: [categoryMock1],
    }
    const result = addUser(reference, user);

    expect(result).toEqual(expected);
  })

  it("Remove user from project", () => {
    const user = userMock1;
    const reference: Project = {
      id: 1,
      name: "",
      users: [user],
      categories: [categoryMock1],
    }
    const expected: Project = {
      id: 1,
      name: "",
      users: [],
      categories: [categoryMock1],
    }
    const result = removeUser(reference, user.id);

    expect(result).toEqual(expected);
  })
})