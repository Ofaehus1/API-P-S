import express from 'express';
import dotenv from 'dotenv';
import conectarBD from './config/bd.js';
import swaggerUI from 'swagger-ui-express';
import router from './routes/users.js';
import openApiConfiguration from './docs/swagger.js';


const app = express();
app.use(express.json());

dotenv.config();

conectarBD();

app.use('/api/users', router);
//ruta de la documentacion
app.use('/documentation',swaggerUI.serve, swaggerUI.setup(openApiConfiguration))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Api escuchado ${PORT}`);
});
