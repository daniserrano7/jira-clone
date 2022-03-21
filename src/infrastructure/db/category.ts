import { Category, CategoryId, createCategory, categoriesMock } from "domain/category"

const get = (categoryId: CategoryId): Category => {
  const category = categoriesMock.find(category => category.id === categoryId);
  
  if (!category) {
    throw new Error(`Category with id: ${categoryId} not found`);
  }

  return createCategory(category);
}

const getAll = (): Category[] => {
  return categoriesMock.map(createCategory);
}

export default {
  get,
  getAll,
}