const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

// Rutas
router.get('/consultas', consultaController.getConsultas); // Obtener todas las consultas
router.post('/consultas', consultaController.createConsulta); // Crear consulta
router.get('/consultas/:id', consultaController.getConsultaById); // Obtener consulta por ID
router.put('/consultas/:id', consultaController.updateConsulta); // Actualizar consulta
router.delete('/consultas/:id', consultaController.deleteConsulta); // Eliminar consulta

module.exports = router;
