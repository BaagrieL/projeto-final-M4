import { logEvents } from "../middlewares/logger.middlewares.js";
import alertaService from "../service/alerta.service.js";

class AlertaController {
     async getAlerta(req, res) {
           
        try {
            const alerta = await alertaService.getAlerta();
            res.status(200).json(alerta);
        } catch (error) {
            logEvents(`Error: ${error.message}`, "error.log");
            res.status(500).json({ message: "erro ao listar alerta" });
        } 
            
    }

    async criarAlerta(req, res) {
       
        const { tipo_alerta, descricao} = req.body;
            
        try {
            const { tipo_alerta, descricao } = req.body;
            const novoAlerta = await alertaService.criarAlerta({ tipo_alerta, descricao });
            res.status(201).json(novoAlerta);
        } catch (error) {
            logEvents(`Error: ${error.message}`, "error.log");
            res.status(500).json({ message: "erro ao criar alerta" });
        }
    }

    async atualizarAlerta(req, res) { 
        const { id } = req.params;
        const { tipo_alerta, descricao} = req.body;
         
        try {
            const alertaAtualizada = await alertaService.atualizarAlerta(id, { tipo_alerta, descricao });
            res.status(200).json(alertaAtualizada);
        } catch (error) {
            logEvents(`Error: ${error.message}`, "error.log");
            res.status(500).json({ message: "erro ao atulizar alerta" });
        }

    }


    async deletarAlerta(req, res) {
        const { id } = req.params;
    try {
            const alertaDeletada = await alertaService.deletarAlerta(id);
            res.status(200).json(alertaDeletada);
        } catch (error) {
            logEvents(`Error: ${error.message}`, "error.log");
            res.status(500).json({ message: "erro ao deletar o alerta" });
        }
    }
}

export default new AlertaController();