import { createContext, useContext } from "react";

export const CategoriesPanelContext = createContext<CategoriesPanelContextProps | null>(null);

export const useCategoriesPanelContext = () => {
  const context = useContext(CategoriesPanelContext);

  if (!context) {
    throw new Error("Context is null");
  }

  return context;
}

export interface CategoriesPanelContextProps {
  scrollDisabled: boolean;
  setScrollDisabled: (isDisabled: boolean) => void;
}