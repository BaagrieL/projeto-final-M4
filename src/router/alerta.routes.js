import express from 'express';
import { Router } from "express";
import alertaController from '../controllers/alerta.controller.js';
const alertasRoutes = Router();

alertasRoutes.get("/",alertaController.getAlerta);

alertasRoutes.post("/alertar",alertaController.criarAlerta); 

alertasRoutes.delete("/deletar/:id",alertaController.deletarAlerta);

alertasRoutes.put("/atualizar/:id",alertaController.atualizarAlerta);

export default alertasRoutes;