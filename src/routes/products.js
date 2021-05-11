//Requiriendo express para obtener sus funcionalidades
const express = require('express');

//Ejecutando la funcionalidad de rutas
const router = express.Router();

//Requiriendo el controlador para obtener sus funcionalidades
const productsController = require('../controllers/productsController');

//Rutas (sin el prefijo de la ruta base)
router.get('/cart', productsController.productCart);
router.get('/detail', productsController.productDetail)

//Exportando al router para que pueda ser usado por el entry point
module.exports = router;