import * as voluntarioService from '../service/voluntario.service.js';

export const criarVoluntario = async (req, res) => {
  try {
    const voluntario = await voluntarioService.criarVoluntario(req.body);
    res.status(201).json(voluntario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listarVoluntarios = async (req, res) => {
  try {
    const voluntarios = await voluntarioService.listarVoluntarios();
    res.json(voluntarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const buscarVoluntarioPorId = async (req, res) => {
  try {
    const voluntario = await voluntarioService.buscarVoluntarioPorId(req.params.id);
    if (!voluntario) return res.status(404).json({ error: 'Voluntário não encontrado' });
    res.json(voluntario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const atualizarVoluntario = async (req, res) => {
  try {
    const voluntario = await voluntarioService.atualizarVoluntario(req.params.id, req.body);
    res.json(voluntario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletarVoluntario = async (req, res) => {
  try {
    await voluntarioService.deletarVoluntario(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const associarOrganizacao = async (req, res) => {
  try {
    const voluntario = await voluntarioService.associarOrganizacao(req.params.id, req.body.idOrganizacao);
    res.json(voluntario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
