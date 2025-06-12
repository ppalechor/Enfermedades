import { Router } from 'express';
import * as tratamientoController from '../../controllers/fitosanitario/tratamiento.controller';

const router = Router();

router.get('/listar', tratamientoController.getAll);
router.get('/buscar/:id', tratamientoController.getById);
router.post('/crear', tratamientoController.create);
router.put('/actualizar/:id', tratamientoController.update);
router.delete('/eliminar/:id', tratamientoController.deleteTratamiento);

export default router;