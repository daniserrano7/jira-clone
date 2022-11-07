export const priorities = ['low', 'medium', 'high'] as const;

export type Priority = typeof priorities[number];
export type PriorityDict = Record<Priority, string>;
type PriorityList = {
  id: Priority;
  label: string;
}[];

export const priorityDict: PriorityDict = {
  low: 'Bajo',
  medium: 'Medio',
  high: 'Alto',
};

export const priorityList: PriorityList = (
  Object.entries(priorityDict) as [Priority, string][]
).map(([key, value]) => ({
  id: key,
  label: value,
}));
