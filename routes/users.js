import express from 'express';
const router = express.Router();

import {
  agregar,
  listar,
  eliminar,
  editar,
  listaUno,
} from '../controllers/userController';

//Ruta es para gestionar usuarios

router.get('/', listar);
router.get('/', listaUno);
router.post('/', agregar);
router.put('/', editar);
router.delete('/', eliminar);

export default router;
