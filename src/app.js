const express = require('express'); 
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const process = require("process");

app.listen(3000, () => console.log('Servidor corriendo OK'));

//Rutas

    //Carrito de compra: Ruteo
    let rutaProductCart = require("/routes/routeProductCart");
    app.use("/productCart", rutaProductCart);

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '/views/index.html'));
});
app.get('/login', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '/views/login.html'));
});
app.get('/productdetail', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '/views/productDetail.html'));
});

app.get('/register', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '/views/register.html'));
});