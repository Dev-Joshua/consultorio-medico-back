const express = require('express');
const router = express.Router();
const historialController = require('../controllers/historialController');
const verificarToken = require('../middleware/authMiddleware');

//Rutas
router.get('/historial', verificarToken, historialController.getHistoriales); // Obtener todos los historiales
router.post('/historial', verificarToken, historialController.createHistorial); // Crear historial
router.get(
  '/historial/:id',
  verificarToken,
  historialController.getHistorialById,
); // Obtener historial por ID
router.put(
  '/historial/:id',
  verificarToken,
  historialController.updateHistorial,
); // Actualizar historial
router.delete(
  '/historial/:id',
  verificarToken,
  historialController.deleteHistorial,
); // Eliminar historial

module.exports = router;
