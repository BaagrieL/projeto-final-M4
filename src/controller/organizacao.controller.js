import { prisma } from "../prisma/prismaClient.js";

// Atualizar organização
export const atualizarOrganizacao = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    const organizacaoAtualizada = await prisma.organizacao.update({
      where: { id: Number(id) },
      data: dados,
    });

    res.status(200).json(organizacaoAtualizada);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar organização", detalhe: error.message });
  }
};

// Outras funções
export const criarOrganizacao = async (req, res) => { /* ... */ };
export const listarOrganizacoes = async (req, res) => { /* ... */ };
export const buscarOrganizacaoPorId = async (req, res) => { /* ... */ };
export const deletarOrganizacao = async (req, res) => { /* ... */ };
