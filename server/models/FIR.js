// models/FIR.js
const mongoose = require('mongoose');

const firSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  complaint: String,
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FIR', firSchema);