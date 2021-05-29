//Requiriendo la funcionalidad path que resuelve rutas
const path = require('path');

//Requiriendo la funcionalidad fs
//fs convierte un objeto literal (el cual puede ser obtenido de un formulario) en un archivo JSON
const fs = require('fs');

//Requerir la funcionalidad para leer y leer/actualizar el archivo .json 
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
        let idProduct = req.params.id;
        let archivoProductos = readJson('products.json');

        let idProductDetail = archivoProductos.filter ( (product) => { 
            return product.id == idProduct
        });
        
        res.render('products/productDetail', { idProductDetail: idProductDetail, archivoProductos : archivoProductos });
    },

    productCharge : (req, res) => {
        res.render('products/productCharge');
    },

    store: (req, res) => {
        //Falta crear el metodo que le da un id
        if(req.file) {
            let archivoProductos = readJson('products.json');
    
            let producto = {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                descuento: req.body.descuento,
                categoria: req.body.categoria,
                imagen: req.file.filename,
                origen: req.body.origin,
                volumen: req.body.volumen,
                marca: req.body.marca,
            };
            archivoProductos.push(producto);
            writeJson('products.json', archivoProductos);
    
            return res.redirect('/');
        }else{
            res.render('products/productCharge');
        }
    },

    productEdit : (req, res) => {
        //Nota: De todos los productos, vamos a editar el sumistrado como parametro de la URL
        let idProduct = req.params.id

        //Nota: El archivo products.json ya fue leido gracias al helper 
        let archivoProductos = readJson('products.json');
        
        //Crear una variable que filtre y luego envío está variable a la vista
        let idProductToEdit = archivoProductos.filter ( (product) => { 
            return product.id == idProduct
        });

        res.render('products/productEdit',
        {idProductToEdit: idProductToEdit });
    
    },
   
        productUpdate : (req, res) => {
            return res.redirect('/');
        }
    
};

//Exportando al controlador para que pueda ser usado por la ruta.
module.exports = productsController;