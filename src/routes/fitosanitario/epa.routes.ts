import { Router } from 'express';
import * as epaController from '../../controllers/fitosanitario/epa.controller';

const router = Router();

router.get('/listar', epaController.getAll);
router.get('/buscar/:id', epaController.getById);
router.post('/crear', epaController.create);
router.put('/actualizar/:id', epaController.update);
router.delete('/eliminar/:id', epaController.deleteEpa);

export default router;