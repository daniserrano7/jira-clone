import { Project, createProject } from './project'
import { usersMock } from 'domain/user'
import { categoriesMock } from 'domain/category'

export const projectMock: Project = createProject({
    name: 'JIRA Clone',
    description: 'Software project',
    users: usersMock,
    categories: categoriesMock,
})

export const projectsMock: Project[] = [projectMock]
