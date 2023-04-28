import Dispositivos from "../models/Dispositivos.js";

//Crear
const agregar = async (req, res) => {
  try {
      const dispositivos = new Dispositivos(req.body);
      const dispoGuardado = await dispositivos.save();
      res.json({ body: dispoGuardado, ok: "SI", msg: "Registro creado correctamente." });
  } catch (error) {
      console.log(error);
  }
}

//Leer
const listar = async (req, res) => {
  const dispositivos = await Dispositivos.find();
  res.json(dispositivos);
}

//Eliminar
const eliminar = async (req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //console.log(id);

  //validar si existe el Registro
  /* const usuario = await Usuario.findById(id);
  console.log(usuario);

  if (!usuario) {
      const error = new Error("Registro no encontrado.");
      return res.status(404).json({ msg: error.message, ok: "SI" });
  } */

  try {
      await Dispositivos.deleteOne({_id:id}); //findByIdAndDelete(id)
      res.json({ msg: "Registro eliminado correctamente.", ok: "SI" });
  } catch (error) {
      console.log(error);
  }
}
//Editar
const editar = async (req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //console.log(id);

  //validar si existe el Registro
  /* const usuario = await Usuario.findById(id);
  console.log(usuario); */

  if (req.body.Dispositivo !== null && req.body.IME !== null) {
    //capturar los datos del formulario
      /* Usuario.nombresUsuario = req.body.nombresUsuario;
      Usuario.celularUsuario = req.body.celularUsuario; */

      try {
        const dispoGuardado= await Dispositivos.updateOne({_id:id}, req.body);
        res.json({ body: dispoGuardado, msg: "Registro actualizado correctamente.", ok: "SI" });
      } catch (error) {
        console.log(error);
      }
  }
  else{
    const error = new Error("no se han encontrado los parametros en el body.");
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }
}

//Leer uno
const listarUno = async(req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //validar si existe el Registro
  const dispositivo = await Dispositivos.findById(id)

  if (!dispositivo) {
      const error = new Error("Registro no encontrado.");
      return res.status(404).json({ msg: error.message, ok: "SI" });
  }

  res.json(dispositivo);
}

export {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno
}
