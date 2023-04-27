import Usuario from '../routes/users.js';
//Crear
const agregar = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const usuarioGuardado = await usuario.save();
    res.json({
      body: usuarioGuardado,
      ok: 'si',
      msg: 'Registro creado correctamemte.',
    });
  } catch (error) {
    console.log(error);
  }
};
//leer
const listar = async (req, res) => {
  const usuarios = await usuario.find();
  res.json(usuarios);
};
//Eliminar
const eliminar = async (req, res) => {
  //recibe los parametros por la url
  const { id } = req.params;
  //Valida si existe
  const usuario = await Usuario.findById(id);
  console.log(usuario);

  if (!usuario) {
    const error = new Error('Registro no encontrado');
    return res.status(404).json({ msg: error.message, ok: 'si' });
  }

  try {
    await usuario.deleteOne();
    res.json({ msg: 'Registro elimnado.', ok: 'si' });
  } catch (error) {
    console.log(error);
  }
};
const editar = async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id);
  console.log(usuario);

  if (!usuario) {
    const error = new Error('Registro no encontrado');
    return res.status(404).json({
      msg: error.message,
      ok: 'si',
    });
  }
  usuario.nombresUsuario = req.body.nombreUsuario || usuario.nombresUsuario;
  usuario.celularUsuario = req.body.ccelularUsuario || usuario.celularUsuario;
  try {
    const usuarioGuardado = await usuario.save();
    res.json({ body: usuarioGuardado, msg: 'Registro actualizado.', ok: 'si' });
  } catch (error) {
    console.log(error);
  }
};

const listaUno = async (req, res) => {
  const { id } = req.params;
  const usuario = await usuario.findById(id);
  if (!usuario) {
    const error = new Error('Registro no encontrado');
    return res.status(404).json({ msg: error.message, ok: 'si' });
  }
  res.json(usuario);
};
export { agregar, listar, eliminar, editar, listaUno };
