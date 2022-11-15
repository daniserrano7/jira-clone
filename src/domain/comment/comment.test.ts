import { describe, it, expect } from "vitest";
import { User, userMock1 } from "@domain/user";
import { Comment } from "./comment";

const user = new User(userMock1);

describe("Comment entity module", () => {
  it("Change comment message", () => {
    const message = "Test new comment message";
    const reference = new Comment({
      id: "1",
      user: user,
      message: "Original message",
    });
    const expected = new Comment({
      id: "1",
      user: user,
      message,
    });
    reference.setMessage(message);

    expect(reference).toEqual(expected);
  });
});
