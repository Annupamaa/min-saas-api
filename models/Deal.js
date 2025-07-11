const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
    id: { type: String, 
        required: true, 
        unique: true 
    },
    title: String,
    price: Number,
    category: String,
    partner: String,
});

module.exports = mongoose.model('Deal', dealSchema);
