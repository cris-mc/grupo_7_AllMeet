//Requiriendo la funcionalidad path que resuelve rutas
const path = require('path');

//Requiriendo la funcionalidad multer que resuelve rutas
const multer = require('multer')

//Configurando multer para guardar las imagenes
const storageProducto = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/productos'));
    },
    filename : (req, file, cb) => {
        const newFileName = 'product' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

//Crear la constante para ejecutar la configuracion
const uploadProducto = multer({ storageProducto });

//Exportando al router para que pueda ser usado por el entry point
module.exports = uploadProducto;

//Configurando multer para guardar las imagenes
const storageUsuario = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/usuarios'));
    },
    filename : (req, file, cb) => {
        const newFileName = 'user' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

//Crear la constante para ejecutar la configuracion
const uploadUsuario = multer({ storageUsuario });

//Exportando al router para que pueda ser usado por el entry point
module.exports = uploadUsuario;
