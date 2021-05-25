//Ejecutando la funcionalidad de path que resuelve rutas
const path = require('path');
const fs = require('fs');
const {readJson, writeJson} = require('./helpers');

//Definiendo la logica del controlador: Renderizando vistas EJS
//El controlador está compuesto por un objeto literal que a su vez compuesto por métodos (funciones o callbacks)
const productsController = {
    productList : (req, res) => {
        res.render('products/productlist');
    },
    productCart : (req, res) => {
        res.render('products/productCart');
    },
    productDetail : (req, res) => {
        res.render('products/productDetail');
    },
    productCharge : (req, res) => {
        res.render('products/productCharge');
    },
    productEdit : (req, res) => {
        res.render('products/productEdit');
    },
    // store : (req , res) => {
        // res.send('logica de crear');
        // res.send(req.body);
    // }
    store: (req, res) => {
        let archivoProductos = readJson('products.json');

        let producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            descuento: req.body.descuento,
            categoria: req.body.categoria,
            imagen: req.body.imagen,
            origen: req.body.origin,
            volumen: req.body.volumen,
            marca: req.body.marca
        };
        archivoProductos.push(producto);
        writeJson('products.json', archivoProductos);

        return res.redirect('/products/charge');
    }
};

//Exportando al controlador para que pueda ser usado por la ruta.
module.exports = productsController;