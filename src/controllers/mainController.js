//Requiriendo la funcionalidad fs
//fs convierte un objeto literal (el cual puede ser obtenido de un formulario) en un archivo JSON
const fs = require('fs');

//Requerir la funcionalidad para leer y leer/actualizar el archivo .json 
const {readJson, writeJson} = require('./helpers');

const mainController = {
    inicio : (req, res) => {
        let archivoProductos = readJson('products.json');
        res.render('main/index', { archivoProductos: archivoProductos});
    }
};

module.exports = mainController;