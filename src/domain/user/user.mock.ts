import { v4 as uuidv4 } from "uuid";
import { User } from "./user";


export const userMock1: User = {
  id: uuidv4(),
  name: "Daniel Serrano",
}

export const userMock2: User = {
  id: uuidv4(),
  name: "Rick Sánchez",
}

export const userMock3: User = {
  id: uuidv4(),
  name: "Morty",
}

export const usersMock = [
  userMock1,
  userMock2,
  userMock3
];