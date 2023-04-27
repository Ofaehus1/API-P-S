import express from 'express';
const router = express.Router();

import {
  agregar,
  listar,
  eliminar,
  editar,
  listaUno,
} from '../controllers/userController.js';

/**
 * @swagger
 * tags:
 *   name: Dispositivos
 *   description: API para gestionar Dispositivos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - Dispositivo
 *         - IME
 *       properties:
 *         id:
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *            Dispositivo:
 *           type: string
 *           description: Nombre de dispositivo mobil 
 *         IME:
 *           type: number
 *           description: IME del dispositivo
 *       example:
 *         id: 60a3f3ca4827d03154d694a7
 *          Dispositivo: Xiaomi 11T
 *         IME: 1234567890
 */

/**
 * @swagger
 * /api/celulares:
 *   post:
 *     summary: Agrega un nuevo dispositivo
 *     tags: [celulares]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Dispositivo agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Los campos son requeridos
 */

//Ruta es para gestionar dispositivos

router.get('/', listar);

/**
 * @swagger
 * /api/celulares/{id}:
 *   get:
 *     summary: Obtiene un dispositivo por su ID
 *     tags: [celulares]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del dispositvo  a obtener
 *     responses:
 *       200:
 *         description: El dispositivo se encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/celulares'
 *       404:
 *         description: El dispositivo  con el ID  no se pudo encontrar
 */

router.get('/:id', listaUno);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualiza un dispositivo existente
 *     tags: [celulares]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: IME del dispositivo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/celullares'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: El dispositivo con el IME especificado no fue editado
 *
 */

router.post('/', agregar);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los dispositivos
 *     tags: [celulares]
 *     responses:
 *       200:
 *         description: Lista de todos los dispositivos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.put('/:id', editar);

/**
 * @swagger
 * /api/celulares/{id}:
 *   delete:
 *     summary: Elimina un dispositivo existente
 *     tags: [celulares]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: IME del dispositivo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/celulares'
 *     responses:
 *       200:
 *         description: Dispositivo eliminado exitosamente
 *       404:
 *         description: El dispositivo con el IME especificado no fue eliminado
 *
 */

router.delete('/:id', eliminar);

export default router;
