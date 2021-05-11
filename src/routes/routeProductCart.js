//Requerir express
let express = require("express");

//Requerir al controlador
let controllerProductCart = require ("../controllers/controllerProductCart");

//Conseguir al router de express
let router = express.Router();

//Ruta (con la variable router y sin el prefijo de la ruta)
router.get("/", controllerProductCart.carrito);

//Exportar al router para que pueda ser usado por el entry point.
module.exports = router;