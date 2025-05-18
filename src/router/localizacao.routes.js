import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const localizacao = Router();
const prisma = new PrismaClient();

//
localizacao.get("/", async (req, res) => {
    const listaLocalizacoes = await prisma.localizacao.findMany({
        include: {organizacao: true}
    });
    res.json(listaLocalizacoes);
});

// 
localizacao.post("/organizacao/:id/localizacoes", async (req, res) => {
    try { 
        const {id} = req.params;
        const {nome, longitude, latitude} = req.body;

        const novaLocalizacao = await prisma.localizacao.create({
            data: {
                nome,
                longitude,
                latitude,
                organizacao: {connect: {id: parseInt(id)}}
            }
        });
        res.status(201).json(novaLocalizacao);
    } catch (error) {
        res.status(400).json({error: error.mensagem});
    }
});

//
localizacao.put("/atualiza/:id", async (req, res) => {
    const {id} = req.params;
    const {nome, longitude, latitude} = req.body;

    try {
        const atualizarLocalizacao = await prisma.localizacao.update({
            where: {id: parseInt(id)},
            data: {nome, longitude, latitude}
        });
        res.json(atualizarLocalizacao);
    } catch (error) {
        res.status(404).json({erro: `Localização Invalida: ${error}`});
    }
});

//
localizacao.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;

    try {
        await prisma.localizacao.delete({
            where: {id: parseInt(id)}
        });
        res.json({mensagem: `Localização deletada com sucesso!`});
    } catch (error) {
        res.status(404).json({erro: `Localização não encontrada.`});
    }
});

export default localizacao;
