const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.get('/pacientes', pacienteController.getPacientes);
router.post('/pacientes', pacienteController.createPaciente);
router.get('/pacientes/:id', pacienteController.getPacienteById);
router.put('/pacientes/:id', pacienteController.updatePaciente);
router.delete('/pacientes/:id', pacienteController.deletePaciente);

module.exports = router;
