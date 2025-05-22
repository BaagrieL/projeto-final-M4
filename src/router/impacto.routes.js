import express from "express";
import { createImpacto, getAllImpactos, updateImpacto, deleteImpacto } from "../service/impacto.service.js";

const router = express.Router();

// Criar impacto social
router.post("/", async (req, res) => {
  try {
    const impacto = await createImpacto(req.body.id_organizacao, req.body.id_localizacao, req.body.id_doacao);
    res.status(201).json({ message: "Impacto social criado com sucesso!", impacto });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar impactos sociais
router.get("/", async (req, res) => {
  try {
    const impactos = await getAllImpactos();
    res.json(impactos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar impacto social
router.put("/:id", async (req, res) => {
  try {
    const impacto = await updateImpacto(Number(req.params.id), req.body.id_organizacao, req.body.id_localizacao, req.body.id_doacao);
    res.json({ message: "Impacto social atualizado com sucesso!", impacto });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deletar impacto social
router.delete("/:id", async (req, res) => {
  try {
    await deleteImpacto(Number(req.params.id));
    res.json({ message: "Impacto social removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;