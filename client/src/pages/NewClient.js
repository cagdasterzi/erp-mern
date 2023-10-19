import { useEffect } from 'react';
import { useClientsContext } from '../hooks/useClientsContext';

// components
import ClientForm from '../components/ClientForm';

const NewClient = () => {
    const {dispatch} = useClientsContext();
    
    useEffect(() => {
        const fetchClients = async () => {
            const response = await fetch('/api/clients');
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_CLIENTS', payload: json});
            }
        };

        fetchClients();
    }, [dispatch]); // dependency

    return (
        <div className="form">
            <ClientForm />
        </div>
    )
};

export default NewClient;
