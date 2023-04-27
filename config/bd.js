import mongoose, { connect } from 'mongoose';

const conectarBD = () => {
  const urlConexion = String(process.env.MONGO_URI);
  connect(urlConexion)
  
    .then((con) => {
      console.log(`Conexion establecida con la bd: ${urlConexion}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default conectarBD;
