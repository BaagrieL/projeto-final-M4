import * as voluntarioService from '../service/voluntario.service.js';
import { Prisma } from '@prisma/client';

export const criarVoluntario = async (req, res) => {
  try {
    const voluntario = await voluntarioService.criarVoluntario(req.body);
    res.status(201).json(voluntario);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return res.status(400).json({ error: 'Email ou outro campo único já está em uso' });
      }
      if (error.code === 'P2003') {
        return res.status(400).json({ error: 'Organização não encontrada (FK inválida)' });
      }
    }
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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Voluntário não encontrado para atualização' });
      }
      if (error.code === 'P2003') {
        return res.status(400).json({ error: 'Organização vinculada não existe (FK inválida)' });
      }
    }
    res.status(400).json({ error: error.message });
  }
};

export const deletarVoluntario = async (req, res) => {
  try {
    await voluntarioService.deletarVoluntario(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ error: 'Voluntário não encontrado para exclusão' });
    }
    res.status(500).json({ error: error.message });
  }
};

export const associarOrganizacao = async (req, res) => {
  try {
    const voluntario = await voluntarioService.associarOrganizacao(req.params.id, req.body.idOrganizacao);
    res.json(voluntario);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2003') {
      return res.status(400).json({ error: 'Organização não encontrada (FK inválida)' });
    }
    res.status(400).json({ error: error.message });
  }
};
