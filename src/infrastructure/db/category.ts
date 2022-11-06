import { PromiseExtended } from 'dexie'
import { Project, ProjectId } from 'domain/project'
import { Category, CategoryId } from 'domain/category'
import db from './db'
import { populateIssues } from './issue'

export interface CategoryDB {
    projectId: ProjectId
    id: CategoryId
    name: string
    order: number
}

export const populateCategories = (project: Project): void => {
    project.categories.forEach((category) => {
        const categoryDbData = categoryDbPipe(category, project.id)
        db.categories.add(categoryDbData)
        populateIssues(category)
    })
}

const categoryDbPipe = (
    category: Category,
    projectId: ProjectId
): CategoryDB => ({
    projectId,
    id: category.id,
    name: category.name,
    order: category.order,
})

export const fetchCategories = (
    projectId: ProjectId
): PromiseExtended<CategoryDB[]> => {
    return db.categories.where({ projectId }).sortBy('order')
}
