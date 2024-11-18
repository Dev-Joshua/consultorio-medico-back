const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');
const verificarToken = require('../middleware/authMiddleware');

router.get('/medicos', verificarToken, medicoController.getMedicos);
router.post('/medicos', verificarToken, medicoController.createMedico);
router.get('/medicos/:id', verificarToken, medicoController.getMedicoById);
router.put('/medicos/:id', verificarToken, medicoController.updateMedico);
router.delete('/medicos/:id', verificarToken, medicoController.deleteMedico);

module.exports = router;
