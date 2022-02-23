import { StoreContext } from ".";

export const StoreContextProvider = ({ children }: StoreContextProviderProps): JSX.Element => {
  const value = {};

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

interface StoreContextProviderProps {
  children: JSX.Element | JSX.Element[];
}