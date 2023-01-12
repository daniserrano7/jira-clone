import { Priority } from "./priority";

export const prioritiesMock: Priority[] = [
  {
    id: "low",
    name: "Low",
    order: 0,
  },
  {
    id: "medium",
    name: "Medium",
    order: 1,
  },
  {
    id: "high",
    name: "High",
    order: 2,
  },
];

export const priorityLow = prioritiesMock[0];
export const priorityMedium = prioritiesMock[1];
export const priorityHigh = prioritiesMock[2];
