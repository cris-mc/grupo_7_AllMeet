const express = require('express');
const app = express ();
const path = require('path');

const mainController = {
    inicio : (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/index.html'));
    }
};

module.exports = mainController;