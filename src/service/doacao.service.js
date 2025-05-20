import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class DoacaoService {
     async getDoacoes(){
        const doacoes = await prisma.categoria_doacao.findMany({
            select: {
                id_doacao : true,
                quantidade: true,
                validade: true,
                tipo_doacao: true,
                descricao_doacao  : true
            }
        });
        return doacoes;
    }

    criarDoacao = async (data) => {
        const { quantidade,validade,tipo_doacao,descricao_doacao   } = data;
        const novaDoacao = await prisma.categoria_doacao.create({
            data: {
                
                quantidade,
                validade: validade ? new Date(validade) : undefined,
                tipo_doacao,
                descricao_doacao  
            }
        });
        return novaDoacao;
    }

      atualizarDoacao = async (id, data) => {
        const { quantidade, validade, tipo_doacao, descricao_doacao   } = data;
        const doacaoAtualizada = await prisma.categoria_doacao.update({
            where: {
                id_doacao : Number(id)
            },
            data: {
                quantidade,
                validade: validade ? new Date(validade) : undefined,
                tipo_doacao,
                descricao_doacao  
            }
        });
        return doacaoAtualizada;
    
    }



    deletarDoacao = async (id) => {
        const doacaoDeletada = await prisma.categoria_doacao.delete({
            where: {
                id_doacao : Number(id)
            }
        });
        return doacaoDeletada;
    }
}

export default new DoacaoService(); 