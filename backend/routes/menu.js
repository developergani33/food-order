const express = require('express');
const MenuItem = require('../models/MenuItem');
const router = express.Router();

router.get('/', async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
});

module.exports = router;
