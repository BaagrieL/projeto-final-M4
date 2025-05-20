import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const criarVoluntario = async (dados) => {
  const { nome, idade, email } = dados;
  if (!nome || !idade || !email) {
    throw new Error("Nome, idade e email são obrigatórios.");
  }
  return await prisma.voluntarios.create({ data: { nome, idade, email } });
};

export const listarVoluntarios = async () => {
  return await prisma.voluntarios.findMany();
};

export const buscarPorId = async (id) => {
  return await prisma.voluntarios.findUnique({
    where: { id_voluntarios: id },
    include: { organizacao: true },
  });
};

export const atualizarVoluntario = async (id, dados) => {
  return await prisma.voluntarios.update({
    where: { id_voluntarios: id },
    data: dados,
  });
};

export const deletarVoluntario = async (id) => {
  return await prisma.voluntarios.delete({
    where: { id_voluntarios: id },
  });
};

export const associarOrganizacao = async (idVoluntario, idOrganizacao) => {
  // Atualiza a organização com o ID do voluntário
  return await prisma.organizacao.update({
    where: { id_organizacao: idOrganizacao },
    data: { id_voluntarios: idVoluntario },
  });
};
