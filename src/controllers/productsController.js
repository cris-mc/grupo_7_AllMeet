//Ejecutando la funcionalidad de path que resuelve rutas
const path = require('path');

//Definiendo la logica del controlador
const productsController = {
    productCart : (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    },
    productDetail : (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));
    }
};

//Exportando al controlador para que pueda ser usado por la ruta.
module.exports = productsController;