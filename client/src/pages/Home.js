import { useEffect } from 'react';
import { useClientsContext } from '../hooks/useClientsContext';

// components
import ClientDetails from '../components/ClientDetails';
import ClientEdit from '../components/ClientEdit';

const Home = () => {
    const { clients, dispatch } = useClientsContext();

    useEffect(() => {
        const fetchClients = async () => {
            const response = await fetch('/api/clients');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_CLIENTS', payload: json });
            }
        };

        fetchClients();
    }, [dispatch]); // dependency

    return (
        <div className="home">
            <div className="clients">
                {clients && clients.map((client) => (
                    <ClientDetails key={client._id} client={client} />
                ))}
            </div>
        </div>
    )
};

export default Home;