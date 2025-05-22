import express from 'express';
import prisma from '../config/prisma.js';
const localizacaoRoutes = express.Router();

/**
 * @swagger
 * /localizacoes:
 *   get:
 *     summary: Retorna todas as localizações
 *     tags: [Localizacoes]
 *     responses:
 *       200:
 *         description: Lista de localizações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_localizacao:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   longitude:
 *                     type: number
 *                   latitude:
 *                     type: number
 *                   id_organizacao:
 *                     type: integer
 */
localizacaoRoutes.get("/", async (req, res) => {
    const listaLocalizacoes = await prisma.localizacao.findMany({
        include: {organizacao: true}
    });
    res.json(listaLocalizacoes);
});

/**
 * @swagger
 * /organizacao/{id}/localizacoes:
 *   post:
 *     summary: Cria uma nova localização para uma organização
 *     tags: [Localizacoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da organização
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - longitude
 *               - latitude
 *             properties:
 *               nome:
 *                 type: string
 *               longitude:
 *                 type: number
 *               latitude:
 *                 type: number
 *     responses:
 *       201:
 *         description: Localização criada com sucesso
 *       400:
 *         description: Erro de validação
 */
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

/**
 * @swagger
 * /atualiza/{id}:
 *   put:
 *     summary: Atualiza uma localização existente
 *     tags: [Localizacoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da localização a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               longitude:
 *                 type: number
 *               latitude:
 *                 type: number
 *     responses:
 *       200:
 *         description: Localização atualizada
 *       404:
 *         description: Localização não encontrada
 */
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

/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: Remove uma localização
 *     tags: [Localizacoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da localização a ser removida
 *     responses:
 *       200:
 *         description: Localização deletada com sucesso
 *       404:
 *         description: Localização não encontrada
 */
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
