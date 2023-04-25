const express = require('express');
const apiRouter = require('./server');
const app = express();
const morgan = require('morgan')
require('dotenv').config();

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//RUTA PRINCIPAL O HOME DEL API
app.get('/', (req, res) => {
  res.send('Hola estan en la raiz');
});

//API ROUTER NOS RENDERIZARA LAS RUTAS CREADAS
apiRouter(app);

const PORT = process.env.PORT || 3000;

console.log(process.env.PORT); 

//LANZAMIENTO DE API
app.listen(PORT, () => {
  console.log(`Api escuchando en ${PORT}`);
});
