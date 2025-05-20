import * as organizacaoService from '../service/organizacao.service.js';
import { Prisma } from '@prisma/client';

export const criarOrganizacao = async (req, res) => {
  try {
    const organizacao = await organizacaoService.criarOrganizacao(req.body);
    res.status(201).json(organizacao);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return res.status(400).json({ error: 'CNPJ ou e-mail já cadastrado' });
      }
    }
    res.status(400).json({ error: error.message });
  }
};

export const listarOrganizacoes = async (req, res) => {
  try {
    const organizacoes = await organizacaoService.listarOrganizacoes();
    res.json(organizacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar organizações' });
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
    res.status(500).json({ error: 'Erro ao buscar organização' });
  }
};

export const atualizarOrganizacao = async (req, res) => {
  try {
    const organizacaoAtualizada = await organizacaoService.atualizarOrganizacao(req.params.id, req.body);
    res.json(organizacaoAtualizada);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ error: 'Organização não encontrada para atualização' });
    }
    res.status(400).json({ error: error.message });
  }
};

export const deletarOrganizacao = async (req, res) => {
  try {
    await organizacaoService.deletarOrganizacao(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Organização não encontrada para exclusão' });
      }
      if (error.code === 'P2003') {
        return res.status(400).json({ error: 'Não é possível deletar: há registros vinculados' });
      }
    }
    res.status(500).json({ error: 'Erro ao deletar organização' });
  }
};
