const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

router.post('/', async (req, res) => {
  const order = new Order({
    total_price: req.body.totalPrice,
    status: 'Pending',
    order_date: req.body.orderDate,
  });

  await order.save();
  res.status(201).json(order);
});

module.exports = router;
