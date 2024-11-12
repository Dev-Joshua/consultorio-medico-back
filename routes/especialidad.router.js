const express = require('express');
const router = express.Router();
const especialidadController = require('../controllers/especialidadController');

// Rutas para especialidades
router.get('/especialidades', especialidadController.getEspecialidades);
router.post('/especialidades', especialidadController.createEspecialidad);
router.get('/especialidades/:id', especialidadController.getEspecialidadById);
router.put('/especialidades/:id', especialidadController.updateEspecialidad);
router.delete('/especialidades/:id', especialidadController.deleteEspecialidad);

module.exports = router;
