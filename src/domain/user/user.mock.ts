import { v4 as uuidv4 } from "uuid";
import { User } from "./user";

export const usersMock: User[] = [
  {
    id: uuidv4(),
    name: "Daniel Serrano",
  }, {
    id: uuidv4(),
    name: "Woody",
    image: "woody.png",
  }, {
    id: uuidv4(),
    name: "Buzz Lightyear",
    image: "buzz-lightyear.png",
  }, {
    id: uuidv4(),
    name: "Jessie",
    image: "jessie.png",
  }, {
    id: uuidv4(),
    name: "Emperor Zurg",
    image: "emperor-zurg.png",
  }, {
    id: uuidv4(),
    name: "Mr Potato",
    image: "mr-potato.png",
  }, {
    id: uuidv4(),
    name: "Ms Potato",
    image: "ms-potato.png",
  }, {
    id: uuidv4(),
    name: "Little Green Men",
    image: "little-green-men.png",
  }, {
    id: uuidv4(),
    name: "T-Rex",
  }, {
    id: uuidv4(),
    name: "Andy Davis",
  }
]

export const userMock1 = usersMock[0];
export const userMock2 = usersMock[1];
export const userMock3 = usersMock[2];