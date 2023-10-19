import { ClientsContext } from "../context/ClientsContext";
import { useContext } from "react";

export const useClientsContext = () => {
    const context = useContext(ClientsContext);

    if (!context) {
        throw Error('useClientsContext bir ClientsContextProvider içerisinde kullanılmalıdır.')
    }

    return context;
};
