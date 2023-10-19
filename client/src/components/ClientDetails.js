import { useClientsContext } from '../hooks/useClientsContext';
// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { tr } from 'date-fns/esm/locale'

const ClientDetails = ({ client }) => {
    const { dispatch } = useClientsContext();

    const handleClick = async () => {
        const response = await fetch('/api/clients/' + client._id, {
            method: 'DELETE'
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_CLIENT', payload: json });
        }
    }

    return (
        <div className="client-details">
            <h2>{client.isim}</h2>
            <p><strong>Teklif Tutarı: </strong>{client.teklif}</p>
            <p><strong>Teminat Tutarı: </strong>{client.teminat}</p>
            <p><strong>Tecrübe: </strong>{client.tecrübe}</p>
            <p>{formatDistanceToNow(new Date(client.createdAt), { addSuffix: true, locale: tr})}</p>
            <button className="material-symbols-outlined" id="edit">Edit</button>
            <button className="material-symbols-outlined" id="delete" onClick={handleClick}>Delete</button>
        </div>
    )
};

export default ClientDetails;