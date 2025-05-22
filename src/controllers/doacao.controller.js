import { logEvents } from "../middlewares/logger.middlewares.js";
import doacaoService from "../service/doacao.service.js";

class DoacaoController {
     async getDoacoes(req, res) {
           
        try {
            const doacoes = await doacaoService.getDoacoes();
            res.status(200).json(doacoes);
        } catch (error) {
            logEvents(`Error: ${error.message}`, "error.log");
            res.status(500).json({ message: "erro ao listar doações" });
        } 
            
    }

    async criarDoacao(req, res) {
       
        const { quantidade, validade, tipo_doacao,descricao_doacao } = req.body;
            
        try {
            const { quantidade, validade, tipo_doacao, descricao_doacao } = req.body;
            const novaDoacao = await doacaoService.criarDoacao({ quantidade, validade, tipo_doacao,descricao_doacao });
            res.status(201).json(novaDoacao);
        } catch (error) {
            logEvents(`Error: ${error.message}`, "error.log");
            res.status(500).json({ message: "erro ao criar doação" });
        }
    }

    async atualizarDoacao(req, res) { 
        const { id } = req.params;
        const { quantidade, validade,  tipo_doacao, descricao_doacao} = req.body;
         
        try {
            const doacaoAtualizada = await doacaoService.atualizarDoacao(id, { quantidade, validade, tipo_doacao, descricao_doacao });
            res.status(200).json(doacaoAtualizada);
        } catch (error) {
            logEvents(`Error: ${error.message}`, "error.log");
            res.status(500).json({ message: "erro ao atulizar doação" });
        }

    }


    async deletarDoacao(req, res) {
        const { id } = req.params;
    try {
            const doacaoDeletada = await doacaoService.deletarDoacao(id);
            res.status(200).json(doacaoDeletada);
        } catch (error) {
            logEvents(`Error: ${error.message}`, "error.log");
            res.status(500).json({ message: "erro ao deletar o doação" });
        }
    }
}

export default new DoacaoController();