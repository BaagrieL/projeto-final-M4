import express from 'express';
import prisma from '../service/localizacao.service.js';

const organizacao = express.Router();

//
organizacao.post("/criarorganizacao", async (req, res) => {
    try {
        const {nome, cnpj, endereco, telefone, email} = req.body;

        if (!nome || !cnpj || !endereco || !telefone || !email) {
            return res.status(400).json({error: "Parâmetros obrigatórios faltando."});
        }
        const novaOrganizacao = await prisma.organizacao.create({
            data: {
                nome,
                cnpj,
                endereco,
                telefone,
                email
            }
        });
        res.status(201).json(novaOrganizacao);
    } catch (error) {
        res.status(404).json({erro: `Organização não foi criado: ${error}`});
    }
})

export default organizacao;
