import { useState } from 'react';
import { useClientsContext } from '../hooks/useClientsContext';

const ClientEdit = () => {
    const { dispatch } = useClientsContext();

    const [isim, setisim] = useState('');
    const [teklif, setTeklif] = useState('');
    const [teminat, setTeminat] = useState('');
    const [tecrübe, setTecrube] = useState('');
    const [hata, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const client = { isim, teklif, teminat, tecrübe };

        const response = await fetch('/api/clients', {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.hata);
            setEmptyFields(json.emptyFields);
        }

        if (response.ok) {
            setError(null);
            setEmptyFields([]);
            setisim('');
            setTeklif('');
            setTeminat('');
            setTecrube('');
            console.log('Yeni müşteri eklendi:', json);
            dispatch({type: 'CREATE_CLIENT', payload: json});
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Müşteriyi Düzenle</h3>
            {hata && <div className="error">{hata}</div>}
            <label>Müşteri İsmi</label>
            <input
                type="text"
                onChange={(e) => setisim(e.target.value)}
                value={isim}
                className={emptyFields.includes('isim') ? 'hata' : ''}
            />

            <label>Teklif Tutarı</label>
            <input
                type="number"
                onChange={(e) => setTeklif(e.target.value)}
                value={teklif}
                className={emptyFields.includes('teklif') ? 'hata' : ''}
            />

            <label>Teminat Tutarı</label>
            <input
                type="number"
                onChange={(e) => setTeminat(e.target.value)}
                value={teminat}
                className={emptyFields.includes('teminat') ? 'hata' : ''}
            />

            <label>Tecrübe</label>
            <input
                type="number"
                onChange={(e) => setTecrube(e.target.value)}
                value={tecrübe}
                className={emptyFields.includes('tecrübe') ? 'hata' : ''}
            />
            <button className="material-symbols-outlined">post_add</button>
        </form>
    )
};

export default ClientEdit;
