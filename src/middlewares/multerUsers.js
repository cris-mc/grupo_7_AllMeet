//Requiriendo la funcionalidad multer que resuelve rutas
const multer = require('multer');

//Requiriendo la funcionalidad path que resuelve rutas
const path = require('path');


//Configurando multer para guardar las imagenes
const storageUsuario = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/images/usuarios'));
    },
    filename: function(req, file, cb){
        const newFileName = 'user' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

//Crear la constante para ejecutar la configuracion
const uploadUsuario = multer({ storageUsuario });

module.exports = uploadUsuario;