const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, 
        required: true, 
        unique: true 
    },
    name: String,
    email: String,
    walletBalance: { type: Number, default: 100 },
    claimedDeals: [{ type: String }]
});

module.exports = mongoose.model('User', userSchema);
