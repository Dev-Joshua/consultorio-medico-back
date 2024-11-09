const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/PacienteController');

router.get('/pacientes', pacienteController.getPacientes);
router.post('/pacientes', pacienteController.createPaciente);

// Otras rutas (actualizar, eliminar, etc.)...

module.exports = router;
