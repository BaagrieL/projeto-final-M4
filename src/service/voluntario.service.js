import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const criarVoluntario = async (dadosVoluntario) => {
  const idadeConvertida =
    dadosVoluntario.idade !== undefined &&
    dadosVoluntario.idade !== null &&
    dadosVoluntario.idade !== ''
      ? parseInt(dadosVoluntario.idade, 10)
      : null;

  return await prisma.voluntarios.create({
    data: {
      ...dadosVoluntario,
      idade: idadeConvertida,
    },
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
  const idadeConvertida =
    dadosAtualizados.idade !== undefined &&
    dadosAtualizados.idade !== null &&
    dadosAtualizados.idade !== ''
      ? parseInt(dadosAtualizados.idade, 10)
      : null;

  return await prisma.voluntarios.update({
    where: { id_voluntarios: Number(id) },
    data: {
      ...dadosAtualizados,
      idade: idadeConvertida,
    },
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
