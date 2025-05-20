import { prisma } from "../prisma/prismaClient.js";

export const criarOrganizacao = async (dados) => {
  return await prisma.organizacao.create({ data: dados });
};

export const listarOrganizacoes = async () => {
  return await prisma.organizacao.findMany();
};

export const buscarOrganizacaoPorId = async (id) => {
  return await prisma.organizacao.findUnique({ where: { id_organizacao: id } });
};

export const atualizarOrganizacao = async (id, dados) => {
  return await prisma.organizacao.update({
    where: { id_organizacao: id },
    data: dados,
  });
};

export const deletarOrganizacao = async (id) => {
  return await prisma.organizacao.delete({ where: { id_organizacao: id } });
};
