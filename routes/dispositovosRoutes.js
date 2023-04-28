import express from 'express';
const router = express.Router();

import {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno,
} from '../controllers/dispositivos.js';

/**
 * @swagger
 * tags:
 *   name: Dispositivos
 *   description: API para gestionar usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nombresUsuario
 *         - celularUsuario
 *       properties:
 *         id:
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *         nombresUsuario:
 *           type: string
 *           description: Nombre completo del usuario
 *         celularUsuario:
 *           type: number
 *           description: Número de teléfono del usuario
 *       example:
 *         id: 60a3f3ca4827d03154d694a7
 *         nombresUsuario: John Doe
 *         celularUsuario: 1234567890
 */

/**
 * @swagger
 * /api/dispositivos:
 *   post:
 *     summary: Agrega un nuevo usuario
 *     tags: [Dispositivos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dispositivos'
 *     responses:
 *       200:
 *         description: Usuario agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Los campos nombresUsuario y celularUsuario son requeridos
 */

router.post("/", agregar);

/**
 * @swagger
 * /api/dispositivos:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Dispositivos]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dispositivos'
 */
router.get("/", listar);

/**
 * @swagger
 * /api/dispositivos/{id}:
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
 *               $ref: '#/components/schemas/Dispositivos'
 *       404:
 *         description: El usuario con el ID especificado no fue encontrado
 */
router.get("/:id", listarUno);

/**
 * @swagger
 * /api/dispositivos/{id}:
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
 *             $ref: '#/components/schemas/Dispositivos'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: El usuario con el ID especificado no fue editado
 *
 */
router.put("/:id", editar);

/**
 * @swagger
 * /api/dispositivos/{id}:
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
 *             $ref: '#/components/schemas/Dispositivos'
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: El usuario con el ID especificado no fue eliminado
 *
 */
router.delete("/:id", eliminar);



export default router;
