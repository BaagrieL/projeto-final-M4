import { Router } from "express";
import * as organizacaoController from "../controller/organizacao.controller.js";

const router = Router();

router.post("/", organizacaoController.criarOrganizacao);

export default router;
