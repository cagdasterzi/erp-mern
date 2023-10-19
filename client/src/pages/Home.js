import { useEffect, useState } from 'react';

// components
import ClientDetails from '../components/ClientDetails';
import ClientForm from '../components/ClientForm';

const Home = () => {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            const response = await fetch('/api/clients');
            const json = await response.json();

            if (response.ok) {
                setClients(json);
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