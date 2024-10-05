const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  total_price: Number,
  status: String,
  order_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
