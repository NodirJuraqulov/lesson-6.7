import { createContext, useContext, useReducer } from 'react';

const Context = createContext();

export const ContextProvider = ({ children, reducer, initialState }) => {
    const store = useReducer(reducer, initialState);
    return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useContextValue = () => useContext(Context);