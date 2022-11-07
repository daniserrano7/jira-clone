import { describe, it, expect } from 'vitest'
import { Issue, todoIssues } from 'domain/issue'
import { Category, CategoryId, categoryIdDict } from './category'

describe('Category entity module', () => {
    it('Add issue to category', () => {
        const id: CategoryId = 'TODO'
        const issue = new Issue({
            ...todoIssues[0],
            categoryId: id,
        })
        const reference = new Category({
            id,
            name: categoryIdDict[id],
            issues: [],
            order: 1,
        })
        const expected = new Category({
            id,
            name: categoryIdDict[id],
            issues: [issue],
            order: 1,
        })
        reference.addIssue(issue)

        expect(reference).toEqual(expected)
    })

    it('Remove issue from category', () => {
        const id: CategoryId = 'TODO'
        const issue = new Issue({
            ...todoIssues[0],
            categoryId: id,
        })
        const reference = new Category({
            id,
            name: categoryIdDict[id],
            issues: [issue],
            order: 1,
        })
        const expected = new Category({
            id,
            name: categoryIdDict[id],
            issues: [],
            order: 1,
        })
        reference.removeIssue(issue.id)

        expect(reference).toEqual(expected)
    })
})
