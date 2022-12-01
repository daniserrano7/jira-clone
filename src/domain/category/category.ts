export type CategoryId = string;
export type CategoryType = typeof categoryTypes[number];
export const categoryTypes = ["TODO", "IN_PROGRESS", "DONE"] as const;

export const categoryTypeDict: Record<CategoryType, string> = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

export interface Category<IssueVariant> {
  id: CategoryId;
  type: CategoryType;
  name: string;
  issues: IssueVariant[];
  order: number;
  createdAt?: number;
  updatedAt?: number;
}
