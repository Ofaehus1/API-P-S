const express = require('express') 

const router = express.Router()

//Ruta es para gestionar usuarios

router.get('/', (req, res)=>{
    res.send('Estas en la ruta Users')
})



module.exports = router