//Ejecutando la funcionalidad de path que resuelve rutas
const path = require('path');
const fs = require('fs')

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
    createProduct: (req, res) => {
        /*
        let producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            descuento: req.body.descuento,
            categoria: req.body.categoria,
            imagen: req.body.imagen,
            origen: req.body.origin,
            volumen: req.body.volumen,
            marca: req.body.marca,
        };
        let archivoProductos = fs.readFileSync('../../database/products.json', 'utf-8');
        let productos;
        if(archivoProductos == ''){
            productos = [];
        }else{
            productos = JSON.parse(productos)
        };
        productos.push(producto);
        productosJSON = JSON.stringify(productos)

        res.redirect('/')
        */
        res.send(req.body);
    }
};

//Exportando al controlador para que pueda ser usado por la ruta.
module.exports = productsController;