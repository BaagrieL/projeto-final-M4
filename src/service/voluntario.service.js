import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const criarVoluntario = async (dadosVoluntario) => {
  return await prisma.voluntarios.create({
    data: dadosVoluntario,
  });
};

export const listarVoluntarios = async () => {
  return await prisma.voluntarios.findMany({
    include: { organizacao: true }, // traz a organização vinculada
  });
};

export const buscarVoluntarioPorId = async (id) => {
  return await prisma.voluntarios.findUnique({
    where: { id_voluntarios: Number(id) },
    include: { organizacao: true },
  });
};

export const atualizarVoluntario = async (id, dadosAtualizados) => {
  return await prisma.voluntarios.update({
    where: { id_voluntarios: Number(id) },
    data: dadosAtualizados,
  });
};

export const deletarVoluntario = async (id) => {
  return await prisma.voluntarios.delete({
    where: { id_voluntarios: Number(id) },
  });
};

export const associarOrganizacao = async (idVoluntario, idOrganizacao) => {
  return await prisma.voluntarios.update({
    where: { id_voluntarios: Number(idVoluntario) },
    data: { organizacao: { connect: { id_organizacao: Number(idOrganizacao) } } },
  });
};
