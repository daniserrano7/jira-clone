import { Category, CategoryId, categoriesMock } from "domain/category"

const get = (categoryId: CategoryId): Category => {
  const category = categoriesMock.find(category => category.id === categoryId);
  
  if (!category) {
    throw new Error(`Category with id: ${categoryId} not found`);
  }

  return category;
}

const getAll = (): Category[] => {
  return categoriesMock;
}

export default {
  get,
  getAll,
}