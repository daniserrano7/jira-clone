import { Category } from "domain/category";
import { category } from "infrastructure/db";
import { createContext, useContext } from "react";

export const getCategories = (): Category[] => {
  return category.getAll();
}

export const StoreContext = createContext({});
export const useStoreContext = () => {
  return useContext(StoreContext);
}