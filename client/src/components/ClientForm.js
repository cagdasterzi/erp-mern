import { useState } from 'react';

const ClientForm = () => {
    const [isim, setisim] = useState('');
    const [teklif, setTeklif] = useState('');
    const [teminat, setTeminat] = useState('');
    const [tecrübe, setTecrube] = useState('');
    const [hata, setError] = useState(null);


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
        }

        if (response.ok) {
            setError(null);
            setisim('');
            setTeklif('');
            setTeminat('');
            setTecrube('');
            console.log('Yeni müşteri eklendi:', json);
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Yeni Müşteri</h3>
            {hata && <div className="error">{hata}</div>}
            <label>Müşteri İsmi</label>
            <input
                type="text"
                onChange={(e) => setisim(e.target.value)}
                value={isim}
            />

            <label>Teklif Tutarı</label>
            <input
                type="number"
                onChange={(e) => setTeklif(e.target.value)}
                value={teklif}
            />

            <label>Teminat Tutarı</label>
            <input
                type="number"
                onChange={(e) => setTeminat(e.target.value)}
                value={teminat}
            />

            <label>Tecrübe</label>
            <input
                type="number"
                onChange={(e) => setTecrube(e.target.value)}
                value={tecrübe}
            />
            <button>Ekle</button>
        </form>
    )
};

export default ClientForm;
