const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const verificarToken = require('../middleware/authMiddleware');

// Rutas
router.get('/pacientes', verificarToken, pacienteController.getPacientes);
router.post('/pacientes', verificarToken, pacienteController.createPaciente);
router.get(
  '/pacientes/:id',
  verificarToken,
  pacienteController.getPacienteById,
);
router.put('/pacientes/:id', verificarToken, pacienteController.updatePaciente);
router.delete(
  '/pacientes/:id',
  verificarToken,
  pacienteController.deletePaciente,
);

module.exports = router;
