//Requiriendo e invocando express para obtener sus funcionalidades
const express = require('express'); 
const app = express();

const process = require('process');

//Ejecutando la funcionalidad de path que resuelve rutas
const path = require('path');
//Accediendo a los archivos de la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

//POR DEFECTO
//Comando para decirle a express que vamos a usar archivos con extensión ejs
//Comando para cuando la carpeta views esta en la raiz: app.set("view engine", "ejs");
//Comando para cuando la carpeta views no esta en la raiz
//La ruta la defino desde el archivo app.js porque estoy parado en él
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Ruteo: Link hacia con el sistema de ruteo
const rutasPrincipal= require('./routes/main')
const rutasProductos= require('./routes/products')
const rutasUsuario= require('./routes/users')

//Ruteo: Link con el navegador
app.use('/', rutasPrincipal);
app.use('/products', rutasProductos);
app.use('/users', rutasUsuario);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Levantando un servidor en el puerto 3000
app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo OK');
});
