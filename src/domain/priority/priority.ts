export type PriorityId = "low" | "medium" | "high";
export type Priority = {
  id: PriorityId;
  name: string;
  order: number;
};
