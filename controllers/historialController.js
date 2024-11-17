const HistorialService = require('../services/historialService');

exports.getHistoriales = async (req, res) => {
  try {
    const historiales = await HistorialService.getAllHistorialM();
    res.status(200).json(historiales);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al obtener historiales', details: error.message });
  }
};

exports.createHistorial = async (req, res) => {
  try {
    const nuevoHistorial = await HistorialService.createHistorial(req.body);
    res.status(201).json(nuevoHistorial);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al crear el historial medico',
      details: error.message,
    });
  }
};

exports.getHistorialById = async (req, res) => {
  try {
    const historial = await HistorialService.getHistorialById(req.params.id);
    if (!historial) {
      return res.status(404).json({ error: 'Historial medico no encontrado' });
    }
    res.status(200).json(historial);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al obtener historial medico',
      details: error.message,
    });
  }
};

exports.updateHistorial = async (req, res) => {
  try {
    const historial = await HistorialService.updateHistorial(
      req.params.id,
      req.body,
    );
    res.status(200).json(historial);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al actualizar historial medico',
      details: error.message,
    });
  }
};

exports.deleteHistorial = async (req, res) => {
  try {
    await HistorialService.deleteHistorial(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al eliminar el historial medico',
      details: error.message,
    });
  }
};
