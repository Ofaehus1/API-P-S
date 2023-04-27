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
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a obtener
 *     responses:
 *       200:
 *         description: Usuario encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: El usuario con el ID especificado no fue encontrado
 */

router.get('/:id', listaUno);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualiza un usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: El usuario con el ID especificado no fue editado
 *
 */

router.post('/', agregar);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
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
 * /api/users/{id}:
 *   delete:
 *     summary: Elimina un usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: El usuario con el ID especificado no fue eliminado
 *
 */

router.delete('/:id', eliminar);

export default router;
