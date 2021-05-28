const mainController = {
    inicio : (req, res) => {
        let idProducto = 1;
        res.render('main/index', { idProducto: idProducto});
    }
};

module.exports = mainController;