const ClientDetails = ({ client }) => {
    return (
        <div className="client-details">
            <h2>{client.isim}</h2>
            <p><strong>Teklif Tutarı: </strong>{client.teklif}</p>
            <p><strong>Teminat Tutarı: </strong>{client.teminat}</p>
            <p><strong>Tecrübe: </strong>{client.tecrübe}</p>
            <p>{client.createdAt}</p>
            <button id="edit">Düzenle</button>
            <button id="delete">Sil</button>
        </div>
    )
};

export default ClientDetails;