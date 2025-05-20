import * as voluntarioService from "../service/voluntario.service.js";

export const criarVoluntario = async (req, res) => {
  try {
    const voluntarioCriado = await voluntarioService.criarVoluntario(req.body);
    res.status(201).json(voluntarioCriado);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const listarVoluntarios = async (req, res) => {
  try {
    const voluntarios = await voluntarioService.listarVoluntarios();
    res.status(200).json(voluntarios);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const buscarPorId = async (req, res) => {
  try {
    const voluntario = await voluntarioService.buscarPorId(Number(req.params.id));
    if (!voluntario) return res.status(404).json({ erro: "Voluntário não encontrado." });
    res.status(200).json(voluntario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const atualizarVoluntario = async (req, res) => {
  try {
    const voluntarioAtualizado = await voluntarioService.atualizarVoluntario(Number(req.params.id), req.body);
    res.status(200).json(voluntarioAtualizado);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const deletarVoluntario = async (req, res) => {
  try {
    await voluntarioService.deletarVoluntario(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const associarOrganizacao = async (req, res) => {
  try {
    const { idOrganizacao } = req.body;
    const resultado = await voluntarioService.associarOrganizacao(Number(req.params.id), idOrganizacao);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
