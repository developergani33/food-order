const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  available_quantity: Number,
  sub_category: String,
  image_url: String,
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
