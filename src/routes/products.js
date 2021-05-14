//Requiriendo express para obtener sus funcionalidades
const express = require('express');

//Ejecutando la funcionalidad de rutas de express
const router = express.Router();

//Requiriendo el controlador para obtener sus funcionalidades
//El "../" sirve para ir una carpeta hacia atras
const productsController = require('../controllers/productsController');

//Rutas (sin el prefijo definido en app.js)
//En el mismo defino la ruta relativa, el controlador y su metodo asociado
router.get('/cart', productsController.productCart);
router.get('/detail', productsController.productDetail)

//Exportando al router para que pueda ser usado por el entry point
module.exports = router;