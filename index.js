import express from 'express';
import dotenv from 'dotenv';
import conectarBD from './config/bd.js';

import router from './routes/users.js';

const app = express();
app.use(express.json());

dotenv.config();

conectarBD();

app.use('/api/users',router );

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Api escuchado ${PORT}`);
});
