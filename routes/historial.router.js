const express = require('express');
const router = express.Router();
const historialController = require('../controllers/historialController');

//Rutas
router.get('/historial', historialController.getHistoriales); // Obtener todos los historiales
router.post('/historial', historialController.createHistorial); // Crear historial
router.get('/historial/:id', historialController.getHistorialById); // Obtener historial por ID
router.put('/historial/:id', historialController.updateHistorial); // Actualizar historial
router.delete('/historial/:id', historialController.deleteHistorial); // Eliminar historial

module.exports = router;
