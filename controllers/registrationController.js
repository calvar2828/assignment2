// controllers/registrationController.js

const Registration = require('../models/registrationModel');

exports.registerUser = (req, res) => {
    const { id, fullName, address, status } = req.body;
    
    // Crear una instancia del modelo con los datos recibidos
    const newUser = new Registration(id, fullName, address, status);

    // Calcular el fee
    const fee = newUser.calculateFee();

    // Mostrar en la vista de confirmación
    res.render('confirmation', { newUser, fee });
};
