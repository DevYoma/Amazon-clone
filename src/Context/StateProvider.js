import React, { createContext, useReducer, useContext } from 'react';

//THIS IS THE DATA LAYER
export const StateContext = createContext();

//THIS IS THE PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//this is how we use it inside another component, similar to pulling it into another component 💯
export const useStateValue = () => useContext(StateContext);