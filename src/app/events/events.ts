import { EventEmitter } from "events";

export const EVENTS = {
  ISSUE_CHANGED: "issue-changed",
  ISSUE_CREATED: "issue-created",
  ISSUE_DELETED: "issue-deleted",
};

export const emitter = new EventEmitter();
