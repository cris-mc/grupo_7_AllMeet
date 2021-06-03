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
            password: req.body.password,
            imagen: "",
            direccion: "",
            telefono: "",
            nacimiento: ""
        };
        archivosUsusarios.push(usuario);
        writeJson('users.json', archivosUsusarios);
        return res.redirect('/')
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
    },
    userEdit : (req, res) => {
        
        //Nota: De todos los productos, vamos a editar el sumistrado como parametro de la URL
        let idUsuario = req.params.id

        //Nota: El archivo users.json ya fue leido gracias al helper 
        let archivoUsuarios = readJson('users.json');
        
        //Crear una variable que filtre y luego envío está variable a la vista
        let idUsuarioToEdit = archivoUsuarios.filter( (usuario) => { 
            return usuario.id == idUsuario
        });
        res.render('users/edit',
        { idUsuarioToEdit: idUsuarioToEdit });

    },
    userUpdate : (req, res) => {
        return res.redirect('/');
    }
};

//Exportando al router para que pueda ser usado por el entry point
module.exports = usersController;