const express = require('express');
const router = express.Router();
const especialidadController = require('../controllers/especialidadController');
const verificarToken = require('../middleware/authMiddleware');

// Rutas para especialidades
router.get(
  '/especialidades',
  verificarToken,
  especialidadController.getEspecialidades,
);
router.post(
  '/especialidades',
  verificarToken,
  especialidadController.createEspecialidad,
);
router.get(
  '/especialidades/:id',
  verificarToken,
  especialidadController.getEspecialidadById,
);
router.put(
  '/especialidades/:id',
  verificarToken,
  especialidadController.updateEspecialidad,
);
router.delete(
  '/especialidades/:id',
  verificarToken,
  especialidadController.deleteEspecialidad,
);

module.exports = router;
