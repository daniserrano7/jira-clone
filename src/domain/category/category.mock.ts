import { CategoryId, Category, categoryIdDict } from 'domain/category'
import { Issue, todoIssues, inProgressIssues, doneIssues } from 'domain/issue'
import { IssueData } from 'domain/issue'

const categoriesDict: Record<CategoryId, IssueData[]> = {
    TODO: todoIssues,
    IN_PROGRESS: inProgressIssues,
    DONE: doneIssues,
}

export const categoriesMock = Object.entries(categoriesDict).map(
    (pair, idx) => {
        const categoryId = pair[0] as CategoryId
        const issueDataList = pair[1] as IssueData[]
        return new Category({
            id: categoryId,
            name: categoryIdDict[categoryId],
            issues: issueDataList.map(
                (issueData) =>
                    new Issue({
                        ...issueData,
                        categoryId: categoryId,
                    })
            ),
            order: idx,
        })
    }
)
