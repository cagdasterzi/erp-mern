const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const clientSchema = new Schema({
    isim: {
        type: String,
        required: true
    },
    teklif: {
        type: Number,
        required: true
    },
    teminat: {
        type: Number
    },
    tecrübe: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('client', clientSchema);

