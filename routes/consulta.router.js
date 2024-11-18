const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');
const verificarToken = require('../middleware/authMiddleware');

// Rutas
router.get('/consultas', verificarToken, consultaController.getConsultas); // Obtener todas las consultas
router.post('/consultas', verificarToken, consultaController.createConsulta); // Crear consulta
router.get(
  '/consultas/:id',
  verificarToken,
  consultaController.getConsultaById,
); // Obtener consulta por ID
router.put('/consultas/:id', verificarToken, consultaController.updateConsulta); // Actualizar consulta
router.delete(
  '/consultas/:id',
  verificarToken,
  consultaController.deleteConsulta,
); // Eliminar consulta

module.exports = router;
