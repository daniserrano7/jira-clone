import { UserData, UserId } from "../user";
import { CategoryType } from "@domain/category";
import { Comment } from "../comment";
import { Priority } from "../priority";

export type IssueId = string;
export interface Issue {
  id: UserId;
  name: string;
  description?: string;
  categoryType?: CategoryType;
  reporter: UserData;
  asignee: UserData;
  comments: Comment[];
  priority: Priority;
  createdAt?: number;
  updatedAt?: number;
}

export interface IssueSummary {
  id: IssueId;
  name: string;
  priority: Priority;
}
