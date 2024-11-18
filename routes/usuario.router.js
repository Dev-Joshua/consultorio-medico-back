const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const verificarToken = require('../middleware/authMiddleware');

// Rutas
router.get('/usuarios', verificarToken, usuarioController.getUsuarios);
router.post('/usuarios', verificarToken, usuarioController.createUsuario);
router.get('/usuarios/:id', verificarToken, usuarioController.getUsuarioById);
router.put('/usuarios/:id', verificarToken, usuarioController.updateUsuario);
router.delete('/usuarios/:id', verificarToken, usuarioController.deleteUsuario);

module.exports = router;
