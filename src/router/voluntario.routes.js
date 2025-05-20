import express from 'express';
import * as voluntarioController from '../controllers/voluntario.controller.js';

const router = express.Router();

router.post('/', voluntarioController.criarVoluntario);
router.get('/', voluntarioController.listarVoluntarios);
router.get('/:id', voluntarioController.buscarVoluntarioPorId);
router.put('/:id', voluntarioController.atualizarVoluntario);
router.delete('/:id', voluntarioController.deletarVoluntario);
router.post('/:id/associar-organizacao', voluntarioController.associarOrganizacao);

export default router;
