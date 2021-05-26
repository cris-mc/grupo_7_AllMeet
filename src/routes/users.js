const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const path = require('path');
const multer = require('multer')

//Configurar Multer
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/usuarios'));
    },
    filename : (req, file, cb) => {
        const newFileName = 'user' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({ storage });

router.get('/register', usersController.register);
router.post('/register', usersController.create);

router.get('/login', usersController.login);

router.get('/edit', usersController.edit);
router.patch('/edit', upload.single('imagen'), usersController.store);

module.exports = router;