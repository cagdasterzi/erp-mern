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

    try {
        const client = await Client.create({ isim, teklif, teminat, tecrübe });
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ hata: error.name + ": Gerekli alanları doldurduğunuza emin olun." });
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