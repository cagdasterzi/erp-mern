require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/clients');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/clients', clientRoutes);

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Database\'e bağlanıldı. \nDinleniyor. Port:', process.env.PORT);
        });
    })
    .catch((error) => {

    });
