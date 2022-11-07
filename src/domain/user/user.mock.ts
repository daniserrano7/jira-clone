import { User, UserData } from './user'

const usersData: UserData[] = [
    {
        name: 'Daniel Serrano',
    },
    {
        name: 'Woody',
        image: 'woody.png',
    },
    {
        name: 'Buzz Lightyear',
        image: 'buzz-lightyear.png',
    },
    {
        name: 'Jessie',
        image: 'jessie.png',
    },
    {
        name: 'Emperor Zurg',
        image: 'emperor-zurg.png',
    },
    {
        name: 'Mr Potato',
        image: 'mr-potato.png',
    },
    {
        name: 'Ms Potato',
        image: 'ms-potato.png',
    },
    {
        name: 'Little Green Men',
        image: 'little-green-men.png',
    },
    {
        name: 'T-Rex',
    },
    {
        name: 'Andy Davis',
        image: 'andy-davis.png',
    },
]

export const usersMock: User[] = usersData.map((userData) => new User(userData))

export const userMock1 = usersMock[0]
export const userMock2 = usersMock[1]
export const userMock3 = usersMock[2]
