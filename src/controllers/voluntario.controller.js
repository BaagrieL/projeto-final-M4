import * as voluntarioService from '../service/voluntario.service.js';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

export const criarVoluntario = async (req, res) => {
  try {
    const { nome, telefone, email, id_organizacao, idade } = req.body;

    if (!nome || !telefone || !email || !id_organizacao) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const idadeInt = idade !== undefined && idade !== null && idade !== ''
      ? parseInt(idade, 10)
      : null;

    const novoVoluntario = await prisma.voluntarios.create({
      data: {
        nome,
        telefone,
        email,
        id_organizacao,
        idade: idadeInt,
      },
    });

    res.status(201).json(novoVoluntario);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Email já cadastrado.' });
    } else {
      res.status(400).json({ error: 'Erro ao criar voluntário.' });
    }
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
    const dadosAtualizados = { ...req.body };

    if ('idade' in dadosAtualizados) {
      dadosAtualizados.idade =
        dadosAtualizados.idade !== undefined && dadosAtualizados.idade !== null && dadosAtualizados.idade !== ''
          ? parseInt(dadosAtualizados.idade, 10)
          : null;
    }

    const voluntario = await voluntarioService.atualizarVoluntario(req.params.id, dadosAtualizados);
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
    const voluntario = await voluntarioService.buscarVoluntarioPorId(req.params.id);
    if (!voluntario) {
      return res.status(404).json({ error: 'Voluntário não encontrado para exclusão' });
    }
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
