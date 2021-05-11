const path = require('path');

const productsController = {
    productCart : (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    },
    productDetail : (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));
    }
};

module.exports = productsController;