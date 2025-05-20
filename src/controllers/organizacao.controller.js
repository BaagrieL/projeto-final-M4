import * as organizacaoService from '../service/organizacao.service.js';

export const criarOrganizacao = async (req, res) => {
  try {
    const organizacao = await organizacaoService.criarOrganizacao(req.body);
    res.status(201).json(organizacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listarOrganizacoes = async (req, res) => {
  try {
    const organizacoes = await organizacaoService.listarOrganizacoes();
    res.json(organizacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const buscarOrganizacaoPorId = async (req, res) => {
  try {
    const organizacao = await organizacaoService.buscarOrganizacaoPorId(req.params.id);
    if (!organizacao) {
      return res.status(404).json({ error: 'Organização não encontrada' });
    }
    res.json(organizacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const atualizarOrganizacao = async (req, res) => {
  try {
    const organizacaoAtualizada = await organizacaoService.atualizarOrganizacao(req.params.id, req.body);
    res.json(organizacaoAtualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletarOrganizacao = async (req, res) => {
  try {
    await organizacaoService.deletarOrganizacao(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
