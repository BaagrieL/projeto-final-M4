import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Criar impacto social
export const createImpacto = async (id_organizacao, id_localizacao, id_doacao) => {
  if (!id_organizacao || !id_localizacao || !id_doacao) {
    throw new Error("Todos os campos são obrigatórios!");
  }

  return prisma.impactoSocial.create({
    data: { id_organizacao, id_localizacao, id_doacao }
  });
};

// Listar impactos sociais
export const getAllImpactos = async () => {
  return prisma.impactoSocial.findMany();
};

// Atualizar impacto social
export const updateImpacto = async (id_impacto, id_organizacao, id_localizacao, id_doacao) => {
  return prisma.impactoSocial.update({
    where: { id_impacto },
    data: { id_organizacao, id_localizacao, id_doacao }
  });
};

// Deletar impacto social
export const deleteImpacto = async (id_impacto) => {
  return prisma.impactoSocial.delete({
    where: { id_impacto }
  });
};