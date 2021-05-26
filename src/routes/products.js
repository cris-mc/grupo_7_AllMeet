//Requiriendo express para obtener sus funcionalidades
const express = require('express');
const path = require('path');

//Ejecutando la funcionalidad de rutas de express
const router = express.Router();

//Requiriendo el controlador para obtener sus funcionalidades
//El "../" sirve para ir una carpeta hacia atras
const productsController = require('../controllers/productsController');

//Requerir multer
const multer = require('multer')

//Configurar Multer
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/productos'));
    },
    filename : (req, file, cb) => {
        const newFileName = 'product' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({ storage });

//Rutas (sin el prefijo definido en app.js)
//En el mismo defino la ruta relativa, el controlador y su metodo asociado
router.get('/list', productsController.productList);
router.get('/cart', productsController.productCart);
router.get('/detail', productsController.productDetail);

router.get('/charge', productsController.productCharge);
router.post('/charge', upload.single('imagen'), productsController.store);

router.get('/edit', productsController.productEdit);

//Exportando al router para que pueda ser usado por el entry point
module.exports = router;