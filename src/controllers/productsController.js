//Ejecutando la funcionalidad de path que resuelve rutas
const path = require('path');

//Definiendo la logica del controlador: Renderizando vistas EJS
//El controlador está compuesto por un objeto literal que a su vez compuesto por métodos (funciones o callbacks)
const productsController = {
    productList : (req, res) => {
        res.render('products/productlist');
    },
    productCart : (req, res) => {
        res.render('productCart.ejs');
    },
    productDetail : (req, res) => {
        res.render('products/productDetail');
    },
    productCharge : (req, res) => {
        res.render('products/productCharge');
    },
    productEdit : (req, res) => {
        res.render('products/productEdit');
    }
};

//Exportando al controlador para que pueda ser usado por la ruta.
module.exports = productsController;