import express from 'express';
const router = express.Router();

import {
  agregar,
  listar,
  eliminar,
  editar,
  listaUno,
} from '../controllers/userController.js';

//Ruta es para gestionar usuarios

router.get('/', listar);
router.get('/:id', listaUno);
router.post('/', agregar);
router.put('/:id', editar);
router.delete('/:id', eliminar);

export default router;
