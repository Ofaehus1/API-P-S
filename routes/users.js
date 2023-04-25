const express = require('express');
const router = express.Router();

const basePersona = require('../Bd/bdUsers.json');
//Ruta es para gestionar usuarios

//Obtener usuarios
router.get('/', (req, res) => {
  res.json(basePersona);
});

//crear un usuario
router.post('/', (req, res) => {
  console.log(req.body);
  const { name, lastname, bornyear, gender, tall, age, profession } = req.body;
  if (name && lastname && bornyear && gender && tall && age && profession) {
    const id = basePersona.length + 1;
    const newUser = { ...req.body, id };
    basePersona.push(newUser);
    res.json(basePersona);
  } else {
    res.send('Error en la peticion');
  }
});

module.exports = router;
