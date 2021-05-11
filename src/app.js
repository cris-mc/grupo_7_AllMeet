const express = require('express'); 
const app = express();
const path = require('path');
const rutasProductos= require('./routes/products')
const rutasPrincipal= require('./routes/main')
const rutasUsuario= require('./routes/users')

app.use(express.static(path.resolve(__dirname, '../public')));

//Ruteo
app.use('/', rutasPrincipal);
app.use('/products', rutasProductos);
app.use('/users', rutasUsuario);


app.listen(3000, () => console.log('Servidor corriendo OK'));