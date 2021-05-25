
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
    }
};

module.exports = usersController;