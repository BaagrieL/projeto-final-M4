import { Router } from "express";
import * as voluntarioController from "../controller/voluntario.controller.js";

const router = Router();

router.post("/", voluntarioController.criarVoluntario);
router.get("/", voluntarioController.listarVoluntarios);
router.get("/:id", voluntarioController.buscarPorId);
router.put("/:id", voluntarioController.atualizarVoluntario);
router.delete("/:id", voluntarioController.deletarVoluntario);

// Nova rota para associar a uma organização
router.post("/:id/associar-organizacao", voluntarioController.associarOrganizacao);

export default router;
