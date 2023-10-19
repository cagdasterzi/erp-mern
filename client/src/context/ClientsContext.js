import { createContext, useReducer } from "react";

export const ClientsContext = createContext();

export const clientsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLIENTS':
            return {
                clients: action.payload
            }
        case 'CREATE_CLIENT':
            return {
                clients: [action.payload, ...state.clients]
            }
        default:
            return state;
    }
};

// similar to useStates, updates the state value
export const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(clientsReducer, {
        clients: null
    });

    // updates the state, using the information (ie. from form)
    //    dispatch({type: 'SET_CLIENTS', payload: [{}, {}]});

    return (
        <ClientsContext.Provider value={{ state, dispatch }}>
            {children}
        </ClientsContext.Provider>
    )
};