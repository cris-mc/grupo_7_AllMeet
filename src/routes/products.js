const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/cart', productsController.productCart);
router.get('/detail', productsController.productDetail)

module.exports = router;