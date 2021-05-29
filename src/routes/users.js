//Requiriendo express para obtener sus funcionalidades
const express = require('express');

//Ejecutando la funcionalidad de rutas de express
const router = express.Router();

//Requiriendo el controlador para obtener sus funcionalidades
const usersController = require('../controllers/usersController')

//Requiriendo Multer para enviar archivos desde un formulario
const upload = require('../controllers/multer')

//Rutas (sin el prefijo definido en app.js)
router.get('/register', usersController.register);
router.post('/register', usersController.create);

router.get('/login', usersController.login);

router.get('/edit', usersController.edit);
router.patch('/edit', upload.single('imagen'), usersController.store);

//Exportando al router para que pueda ser usado por el entry point
module.exports = router;