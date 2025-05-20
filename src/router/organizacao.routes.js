import express from 'express';
import * as organizacaoController from '../controllers/organizacao.controller.js';

const router = express.Router();

router.post('/', organizacaoController.criarOrganizacao);
router.get('/', organizacaoController.listarOrganizacoes);
router.get('/:id', organizacaoController.buscarOrganizacaoPorId);
router.put('/:id', organizacaoController.atualizarOrganizacao);
router.delete('/:id', organizacaoController.deletarOrganizacao);

export default router;
