export const priorities = ["low", "medium", "high"] as const;

export type Priority = typeof priorities[number];