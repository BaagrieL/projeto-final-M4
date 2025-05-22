import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class alertaService{
     async getAlerta(){
        const alertas = await prisma.alerta.findMany({
            select: {
                id_alerta : true,
                tipo_alerta: true,
                descricao: true,
            }
        });
        return alertas;
    }

    criarAlerta = async (data) => {
        const { tipo_alerta,descricao } = data;
        const novoAlerta = await prisma.alerta.create({
            data: {
                
                tipo_alerta,
                descricao: descricao ? new Date(descricao) : undefined,
            }
        });
        return novoAlerta;
    }

     atualizarAlerta = async (id, data) => {
        const { tipo_alerta, descricao } = data;
        const alertaAtualizada = await prisma.alerta.update({
            where: {
                id_alerta : Number(id)
            },
            data: {
                tipo_alerta,
                descricao: descricao ? new Date(descricao) : undefined,
            }
        });
        return alertaAtualizada;
    
    }

     deletarAlerta = async (id) => {
        const alertaDeletada = await prisma.alerta.delete({
            where: {
                id_alerta : Number(id)
            }
        });
        return alertaDeletada;
    }

}

export default new alertaService();