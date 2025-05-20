import { PrismaClient } from '../generated/prisma/client.js'


export const criarOrganizacao = async (data) => {
  return await prisma.organizacao.create({
    data,
  });
};

export const listarOrganizacoes = async () => {
  return await prisma.organizacao.findMany();
};

export const buscarOrganizacaoPorId = async (id) => {
  return await prisma.organizacao.findUnique({
    where: { id_organizacao: Number(id) },
  });
};

export const atualizarOrganizacao = async (id, data) => {
  return await prisma.organizacao.update({
    where: { id_organizacao: Number(id) },
    data,
  });
};

export const deletarOrganizacao = async (id) => {
  return await prisma.organizacao.delete({
    where: { id_organizacao: Number(id) },
  });
};
