// routes/index.js

const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

// Ruta para la página de inicio (formulario de registro)
router.get('/', (req, res) => {
    res.render('index');
});

// Ruta para procesar el formulario de registro
router.post('/register', registrationController.registerUser);

module.exports = router;