const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

router.get('/medicos', medicoController.getMedicos);
router.post('/medicos', medicoController.createMedico);
router.get('/medicos/:id', medicoController.getMedicoById);
router.put('/medicos/:id', medicoController.updateMedico);
router.delete('/medicos/:id', medicoController.deleteMedico);

module.exports = router;
