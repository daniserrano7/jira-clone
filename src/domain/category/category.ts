import { Issue, IssueId } from 'domain/issue'

export const categoryIds = ['TODO', 'IN_PROGRESS', 'DONE'] as const
export type CategoryId = typeof categoryIds[number]

export const categoryIdDict: Record<CategoryId, string> = {
    TODO: 'To do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
}

export interface CategoryData {
    id: CategoryId
    name: string
    issues: Issue[]
    order: number
}

export class Category implements CategoryData {
    readonly id: CategoryId
    name: string
    issues: Issue[]
    order: number

    constructor(data: CategoryData) {
        this.id = data.id
        this.name = data.name
        this.issues = data.issues
        this.order = data.order
    }

    getIssue(issueId: IssueId) {
        return this.issues.find((issue) => issue.id === issueId)
    }

    addIssue(issue: Issue) {
        this.issues.push(issue)
    }

    removeIssue(issueId: IssueId) {
        this.issues = this.issues.filter((issue) => issue.id !== issueId)
    }
}
