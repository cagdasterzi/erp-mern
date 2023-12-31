const Client = require('../models/clientModel');
const mongoose = require('mongoose');

// GET all clients
const getClients = async (req, res) => {
    const clients = await Client.find({}).sort({ createdAt: -1 });
    res.status(200).json(clients);
};

// GET a single client
const getClient = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ hata: "Bu ID'ye sahip müşteri bulunamadı." });
    }

    const client = await Client.findById(id);

    if (!client) {
        return res.status(404).json({ hata: "Bu ID'ye sahip müşteri bulunamadı." });
    }

    res.status(200).json(client);
};

// POST a new client - create
const createClient = async (req, res) => {
    const { isim, teklif, teminat, tecrübe } = req.body;

    let emptyFields = [];

    if (!isim) {
        emptyFields.push('isim');
    }
    if (!teklif) {
        emptyFields.push('teklif');
    }
    if (!teminat) {
        emptyFields.push('teminat');
    }
    if (!tecrübe) {
        emptyFields.push('tecrübe');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ hata: "Lütfen gerekli alanları doldurun.", emptyFields })
    }

    try {
        const client = await Client.create({ isim, teklif, teminat, tecrübe });
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ hata: error.message });
    }
};

// DELETE a client
const deleteClient = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ hata: "Bu ID'ye sahip müşteri bulunamadı." });
    }

    const client = await Client.findOneAndDelete({ _id: id });

    if (!client) {
        return res.status(404).json({ hata: "Bu ID'ye sahip müşteri bulunamadı." });
    }

    res.status(200).json(client);
};

// UPDATE a client
const updateClient = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ hata: "Bu ID'ye sahip müşteri bulunamadı." });
    }

    const client = await Client.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!client) {
        return res.status(404).json({ hata: "Bu ID'ye sahip müşteri bulunamadı." });
    }

    res.status(200).json(client);
};


module.exports = {
    createClient,
    getClients,
    getClient,
    deleteClient,
    updateClient
};