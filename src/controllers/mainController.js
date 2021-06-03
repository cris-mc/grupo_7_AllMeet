//Requiriendo la funcionalidad fs
//fs convierte un objeto literal (el cual puede ser obtenido de un formulario) en un archivo JSON
const fs = require('fs');

//Requerir la funcionalidad para leer y leer/actualizar el archivo .json 
const {readJson, writeJson} = require('./helpers');

//Definiendo la logica del controlador: Renderizando vistas EJS
//El controlador está compuesto por un objeto literal que a su vez compuesto por métodos (funciones o callbacks)
const mainController = {
    inicio : (req, res) => {
        let archivoProductos = readJson('products.json');
        res.render('main/index', { archivoProductos: archivoProductos});
    }
};

//Exportando al router para que pueda ser usado por el entry point
module.exports = mainController;