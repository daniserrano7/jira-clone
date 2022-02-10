import { userMock1, userMock2, userMock3 } from "domain/user";
import { 
  Issue,
  Comment,
  setName, 
  setDescription,
  addAsignee,
  removeAsignee,
  addComment,
  removeComment
} from "./issue";

describe("Issue entity module", () => {
  it("Change issue name", () => {
    const name = "Issue name test";
    const reference: Issue = {
      id: 1,
      name: "",
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignees: [userMock2],
      comments: [],
      priority: "high",
    }
    const expected = {
      id: 1,
      name,
      description: "Should be better to use UUID so ID duplication is less likely",
      reporter: userMock1,
      asignees: [userMock2],
      comments: [],
      priority: "high",
    }
    const result = setName(reference, name);

    expect(result).toEqual(expected);
  })

  it("Change issue description", () => {
    const description = "Issue description test";
    const reference: Issue = {
      id: 1,
      name: "",
      description: "",
      reporter: userMock1,
      asignees: [userMock2],
      comments: [],
      priority: "high",
    }
    const expected = {
      id: 1,
      name: "",
      description,
      reporter: userMock1,
      asignees: [userMock2],
      comments: [],
      priority: "high",
    }
    const result = setDescription(reference, description);

    expect(result).toEqual(expected);
  })

  it("Add asignees to issue", () => {
    const asignee = userMock2;
    const reference: Issue = {
      id: 1,
      name: "",
      description: "",
      reporter: userMock1,
      asignees: [],
      comments: [],
      priority: "high",
    }
    const expected = {
      id: 1,
      name: "",
      description: "",
      reporter: userMock1,
      asignees: [asignee],
      comments: [],
      priority: "high",
    }
    const result = addAsignee(reference, asignee);

    expect(result).toEqual(expected);
  })

  it("Remove asignee from issue", () => {
    const asignee = userMock2;
    const reference: Issue = {
      id: 1,
      name: "",
      description: "",
      reporter: userMock1,
      asignees: [asignee, userMock3],
      comments: [],
      priority: "high",
    }
    const expected = {
      id: 1,
      name: "",
      description: "",
      reporter: userMock1,
      asignees: [userMock3],
      comments: [],
      priority: "high",
    }
    const result = removeAsignee(reference, asignee.id);

    expect(result).toEqual(expected);
  })

  it("Add comment to issue", () => {
    const comment: Comment = {
      id: 1,
      user: userMock1,
      message: "Comment message test",
    }
    const reference: Issue = {
      id: 1,
      name: "",
      description: "",
      reporter: userMock1,
      asignees: [userMock3],
      comments: [],
      priority: "high",
    }
    const expected = {
      id: 1,
      name: "",
      description: "",
      reporter: userMock1,
      asignees: [userMock3],
      comments: [comment],
      priority: "high",
    }
    const result = addComment(reference, comment);

    expect(result).toEqual(expected);
  })

  it("Remove comment from issue", () => {
    const comment: Comment = {
      id: 1,
      user: userMock1,
      message: "Comment message test",
    }
    const reference: Issue = {
      id: 1,
      name: "",
      description: "",
      reporter: userMock1,
      asignees: [userMock3],
      comments: [comment],
      priority: "high",
    }
    const expected = {
      id: 1,
      name: "",
      description: "",
      reporter: userMock1,
      asignees: [userMock3],
      comments: [],
      priority: "high",
    }
    const result = removeComment(reference, comment.id);

    expect(result).toEqual(expected);
  })
})