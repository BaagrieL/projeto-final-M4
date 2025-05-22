import express from 'express';
import prisma from '../config/prisma.js';
const localizacaoRoutes = express.Router();

//
localizacaoRoutes.get("/", async (req, res) => {
    const listaLocalizacoes = await prisma.localizacao.findMany({
        include: {organizacao: true}
    });
    res.json(listaLocalizacoes);
});

// 
localizacaoRoutes.post("/organizacao/:id/localizacoes", async (req, res) => {
    try { 
        const {id} = req.params;
        const {nome, longitude, latitude} = req.body;

        if (!id || !nome || !longitude || !latitude) {
            return res.status(400).json({ error: "Parâmetros obrigatórios faltando." });
        }

        const novaLocalizacao = await prisma.localizacao.create({
            data: {
                nome,
                longitude,
                latitude,
                organizacao: {connect: {id_organizacao: parseInt(id)}}
            }
        });
        res.status(201).json(novaLocalizacao);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

//
localizacaoRoutes.put("/atualiza/:id", async (req, res) => {
    const {id} = req.params;
    const {nome, longitude, latitude} = req.body;

    try {
        const atualizarLocalizacao = await prisma.localizacao.update({
            where: {id_localizacao: parseInt(id)},
            data: {
                nome, 
                longitude:parseFloat(longitude), 
                latitude:parseFloat(latitude)
            }
        });
        res.json(atualizarLocalizacao);
    } catch (error) {
        res.status(404).json({erro: `Localização Invalida: ${error}`});
    }
});

//
localizacaoRoutes.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;

    try {
        await prisma.localizacao.delete({
            where: {id_localizacao: parseInt(id)}
        });
        res.json({mensagem: `Localização deletada com sucesso!`});
    } catch (error) {
        res.status(404).json({erro: `Localização não encontrada.`});
    }
});

export default localizacaoRoutes;
