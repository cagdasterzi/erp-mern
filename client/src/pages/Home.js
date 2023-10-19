import { useEffect, useState } from 'react';

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
                    <p key={client._id}>{client.isim}</p>
                ))}
            </div>
        </div>
    )
};

export default Home;