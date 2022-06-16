export const priorities = ["low", "medium", "high"] as const;

export type Priority = typeof priorities[number];
export type PriorityDict = Record<Priority, string>;

export const priorityDict: PriorityDict = {
    low: "Bajo",
    medium: "Medio",
    high: "Alto",
}