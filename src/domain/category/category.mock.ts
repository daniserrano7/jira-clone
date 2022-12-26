import { Category, categoryTypes, categoryTypeDict } from "@domain/category";
import {
  todoIssuesMock1,
  inProgressIssuesMock1,
  doneIssuesMock1,
  todoIssuesMock2,
  inProgressIssuesMock2,
  doneIssuesMock2,
} from "@domain/issue";

const createdAt = new Date("2022-01-01").valueOf();
const updatedAt = new Date("2022-01-01").valueOf();

const ids1 = [
  "1e8877a7-91dc-46de-bce0-f077ad922fc8",
  "46964edd-62e0-4c2f-90bf-e275ee087433",
  "c1278ad3-29b3-422c-8219-54bb66b26ff4",
];
const issuesMock1 = [todoIssuesMock1, inProgressIssuesMock1, doneIssuesMock1];

const ids2 = [
  "bbb348d5-ef02-447c-94f5-5fbf1ceeac07",
  "14055a19-1a79-4b16-90fb-811652e33128",
  "aa102bcb-335c-4d82-8392-058f6172ebe8",
];
const issuesMock2 = [todoIssuesMock2, inProgressIssuesMock2, doneIssuesMock2];

export const categoriesMock1: Category[] = categoryTypes.map((categoryType, index) => {
  const id = ids1[index];
  const name = categoryTypeDict[categoryType];
  const type = categoryType;
  const order = index;
  const issues = issuesMock1[index];

  return {
    id,
    name,
    issues,
    type,
    order,
    createdAt,
    updatedAt,
  };
});

export const categoriesMock2: Category[] = categoryTypes.map((categoryType, index) => {
  const id = ids2[index];
  const name = categoryTypeDict[categoryType];
  const type = categoryType;
  const order = index;
  const issues = issuesMock2[index];

  return {
    id,
    name,
    type,
    issues,
    order,
    createdAt,
    updatedAt,
  };
});
