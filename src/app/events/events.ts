import { EventEmitter } from "events";

export const EVENTS = {
  ISSUE_CHANGED: "issue-changed",
};

export const emitter = new EventEmitter();
