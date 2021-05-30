//Requiriendo la funcionalidad fyle sinc que resuelve rutas
const fs = require('fs');

//Requiriendo la funcionalidad de read y write json
const {readJson, writeJson, newId} = require('./helpers');

//Definiendo la logica del controlador: Renderizando vistas EJS
//El controlador está compuesto por un objeto literal que a su vez compuesto por métodos (funciones o callbacks)
const usersController = {
    register : (req, res) => {
        res.render('users/register');
    },
    login : (req, res) => {
        res.render('users/login');
    },
    create : (req, res) => {
        let archivosUsusarios = readJson('users.json');
        let usuario = {
            id : newId('users.json'),
            nombre: req.body.nombre,
            email: req.body.email,
            password: req.body.password
        };
        archivosUsusarios.push(usuario);
        writeJson('users.json', archivosUsusarios);
        return res.redirect('/')
    },
    edit : (req, res) => {
        res.render('users/edit')
    },
    store : (req, res) => {
        if(req.file){
            let archivosUsusarios = readJson('users.json');
            let usuario = {
                id : newId('users.json'),
                imagen: req.file.filename,
                nombre: req.body.nombre,
                email: req.body.email,
                password: req.body.password,
                direccion : req.body.direccion,
                telefono : req.body.telefono,
                nacimiento : req.body.nacimiento
            };
            archivosUsusarios.push(usuario);
            writeJson('users.json', archivosUsusarios);
            return res.redirect('/')
        }else{
            res.render('users/edit')
        }
    }
};

//Exportando al router para que pueda ser usado por el entry point
module.exports = usersController;