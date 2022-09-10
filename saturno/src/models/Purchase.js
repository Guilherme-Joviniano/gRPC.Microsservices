const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    id: Number,
    userId: String,
    title: String,
    value: Number,
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
