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

export interface Category extends CategoryData {
    getIssue: (issueId: IssueId) => Issue | undefined
    addIssue: (issue: Issue) => void
    removeIssue: (issueId: IssueId) => void
}

export const createCategory = (data: CategoryData): Category => {
    return {
        ...data,

        getIssue: function (issueId): Issue | undefined {
            return this.issues.find((issue) => issue.id === issueId)
        },

        addIssue: function (issue: Issue) {
            this.issues.push(issue)
        },

        removeIssue: function (issueId: IssueId) {
            this.issues = this.issues.filter((issue) => issue.id !== issueId)
        },
    }
}
