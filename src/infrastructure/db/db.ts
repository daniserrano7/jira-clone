import Dexie, { Table } from 'dexie'
import { projectsMock } from 'domain/project'
import { ProjectDB, populateProjects } from './project'
import { UserDB } from './user'
import { CategoryDB } from './category'
import { IssueDB } from './issue'
import { CommentDB } from './comment'

class DB extends Dexie {
    projects!: Table<ProjectDB>
    categories!: Table<CategoryDB>
    issues!: Table<IssueDB>
    users!: Table<UserDB>
    comments!: Table<CommentDB>

    constructor() {
        super('jira-clone-db')
        this.version(1).stores({
            projects: 'id',
            categories: 'id, projectId',
            issues: 'id, categoryId',
            users: 'id, name',
            comments: 'id, issueId',
        })
    }
}

const db = new DB()

db.on('populate', () => {
    populateProjects(projectsMock)
})

export default db
