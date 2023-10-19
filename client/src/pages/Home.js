import { useEffect } from 'react';
import { useClientsContext } from '../hooks/useClientsContext';

// components
import ClientDetails from '../components/ClientDetails';
import ClientForm from '../components/ClientForm';

const Home = () => {
    const {clients, dispatch} = useClientsContext();
    
    useEffect(() => {
        const fetchClients = async () => {
            const response = await fetch('/api/clients');
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_CLIENTS', payload: json})
            }
        };

        fetchClients();
    }, []);

    return (
        <div className="home">
            <div className="clients">
                {clients && clients.map((client) => (
                    <ClientDetails key={client._id} client={client} />
                ))}
            </div>
            <ClientForm />
        </div>
    )
};

export default Home;