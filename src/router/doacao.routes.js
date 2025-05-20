import express from 'express';
import { Router } from "express";
import doacaoController from '../controllers/doacao.controller.js';
const doacaoRoutes = Router();

doacaoRoutes.get("/",doacaoController.getDoacoes);

doacaoRoutes.post("/doar",doacaoController.criarDoacao); 

doacaoRoutes.delete("/deletar/:id",doacaoController.deletarDoacao);

doacaoRoutes.put("/atualizar/:id",doacaoController.atualizarDoacao);

export default doacaoRoutes;




