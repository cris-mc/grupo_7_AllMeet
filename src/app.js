//Requiriendo e invocando express para obtener sus funcionalidades
const express = require('express'); 
const app = express();

const process = require('process');

//Ejecutando la funcionalidad de path que resuelve rutas
const path = require('path');
//Accediendo a los archivos de la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// app.set('views', __dirname + './src/views'); ver de solucionar esto
app.set('view engine', 'ejs');

// Ruteo: Link hacia con el sistema de ruteo
const rutasPrincipal= require('./routes/main')
const rutasProductos= require('./routes/products')
const rutasUsuario= require('./routes/users')

//Ruteo: Link con el navegador
app.use('/', rutasPrincipal);
app.use('/products', rutasProductos);
app.use('/users', rutasUsuario);

//Levantando un servidor en el puerto 3000
app.listen(3000, () => console.log('Servidor corriendo OK'));