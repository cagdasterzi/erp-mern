const express = require('express');
const {
    createClient,
    getClients,
    getClient,
    deleteClient,
    updateClient
} = require('../controllers/clientController');

const router = express.Router();

// GET all clients
router.get('/', getClients);

// GET a single client
router.get('/:id', getClient);

// POST a new client
router.post('/', createClient);

// DELETE a client
router.delete('/:id', deleteClient);

// UPDATE a client
router.patch('/:id', updateClient);

module.exports = router;
