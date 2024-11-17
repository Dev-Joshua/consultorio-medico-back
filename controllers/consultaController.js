const ConsultaService = require('../services/consultaService');

exports.getConsultas = async (req, res) => {
  try {
    const consultas = await ConsultaService.getAllConsultas();
    res.status(200).json(consultas);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al obtener las consultas',
      details: error.message,
    });
  }
};

exports.createConsulta = async (req, res) => {
  try {
    const nuevaConsulta = await ConsultaService.createConsulta(req.body);
    res.status(201).json(nuevaConsulta);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al crear consulta', details: error.message });
  }
};

exports.getConsultaById = async (req, res) => {
  try {
    const consulta = await ConsultaService.getConsultaById(req.params.id);
    if (!consulta) {
      return res.status(404).json({ error: 'Consulta no encontrada' });
    }
    res.status(200).json(consulta);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al obtener la consulta', details: error.message });
  }
};

exports.updateConsulta = async (req, res) => {
  try {
    const consulta = await ConsultaService.updateConsulta(
      req.params.id,
      req.body,
    );
    res.status(200).json(consulta);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al actualizar la consulta',
      details: error.message,
    });
  }
};

exports.deleteConsulta = async (req, res) => {
  try {
    await ConsultaService.deleteConsulta(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al eliminar la consulta', details: error.message });
  }
};
