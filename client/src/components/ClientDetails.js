import { useClientsContext } from '../hooks/useClientsContext';
// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { tr } from 'date-fns/esm/locale'
import { useState } from 'react';
import ClientEdit from './ClientEdit';


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
    };
    
    const handleEdit = async () => {
        const response = await fetch('/api/clients/' + client._id, {
            method: 'PATCH'
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'SET_CLIENT', payload: json });
        }
    };

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className="client-details">
            <h2>{client.isim}</h2>
            <p><strong>Teklif Tutarı: </strong>{client.teklif}</p>
            <p><strong>Teminat Tutarı: </strong>{client.teminat}</p>
            <p><strong>Tecrübe: </strong>{client.tecrübe}</p>
            <p>{formatDistanceToNow(new Date(client.createdAt), { addSuffix: true, locale: tr})}</p>
            <button className="material-symbols-outlined" id="edit" onClick={toggleModal}>Edit</button>
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <ClientEdit/>
                        <button className="close-modal" onClick={toggleModal}>X</button>
                    </div>
                </div>           
            )}
            <button className="material-symbols-outlined" id="delete" onClick={handleClick}>Delete</button>
        </div>
    )
};

export default ClientDetails;