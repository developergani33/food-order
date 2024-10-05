const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  menu_item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
  quantity: Number,
  price: Number,
});

module.exports = mongoose.model('OrderItem', orderItemSchema);
