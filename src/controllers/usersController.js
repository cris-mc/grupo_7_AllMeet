const fs = require('fs');
const {readJson, writeJson} = require('./helpers');

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
        let archivosUsusarios = readJson('users.json');
        let usuario = {
            imagen: req.body.imagen,
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
    }
};

module.exports = usersController;