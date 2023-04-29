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
 *         - Dispositivo
 *         - IME
 *       properties:
 *         id:
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *         Dispositivo:
 *           type: string
 *           description: Nombre del dispositivo
 *         IME:
 *           type: number
 *           description: Número de IME
 *  
 */

/**
 * @swagger
 * /api/dispositivos:
 *   post:
 *     summary: Agrega un nuevo dispositivo
 *     tags: [Dispositivos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dispositivos'
 *     responses:
 *       200:
 *         description: Dispositivo agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dispositivos'
 *       400:
 *         description: Los campos Dispositivo y IME son requeridos
 */

router.post("/", agregar);

/**
 * @swagger
 * /api/dispositivos:
 *   get:
 *     summary: Obtiene todos los dispositivos
 *     tags: [Dispositivos]
 *     responses:
 *       200:
 *         description: Lista de todos los dispositivos
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
 *     summary: Obtiene un dispositivo por su ID
 *     tags: [Dispositivos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del dispositivo a obtener
 *     responses:
 *       200:
 *         description: Dispositivo encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dispositivos'
 *       404:
 *         description: El dispositivo con el ID especificado no fue encontrado
 */
router.get("/:id", listarUno);

/**
 * @swagger
 * /api/dispositivos/{id}:
 *   put:
 *     summary: Actualiza un dispositivo existente
 *     tags: [Dispositivos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del dispositivo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dispositivos'
 *     responses:
 *       200:
 *         description: Dispositivo actualizado exitosamente
 *       404:
 *         description: El dispositivo con el ID especificado no fue editado
 *
 */
router.put("/:id", editar);

/**
 * @swagger
 * /api/dispositivos/{id}:
 *   delete:
 *     summary: Elimina un dispositivo existente
 *     tags: [Dispositivos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del dispositivo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dispositivos'
 *     responses:
 *       200:
 *         description: Dispositivo eliminado exitosamente
 *       404:
 *         description: El dispositivo con el ID especificado no fue eliminado
 *
 */
router.delete("/:id", eliminar);



export default router;
