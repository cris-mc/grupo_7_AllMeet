//Ejecutando la funcionalidad de path que resuelve rutas
const path = require('path');

//Definiendo la logica del controlador
//El controlador está compuesto por un objeto literal, a su vez compuesto por métodos (funciones o callbacks)
const productsController = {
    productCart : (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    },
    productDetail : (req, res) => {
        res.render('products/productDetail');
    }
};

//Exportando al controlador para que pueda ser usado por la ruta.
module.exports = productsController;