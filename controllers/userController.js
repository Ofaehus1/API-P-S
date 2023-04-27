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
  const usuarios = await Usuario.find();
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
};

//Captura los datos del formulario

usuario.nombreUsuario = req.body.nombreUsuario || usuario.nombreUsuario;
usuario.celularUsuario = req.body.celularUsuario || usuario.celularUsuario;

try {
  const usuarioGuardado = await usuario.save();
  res.json({ body: usuarioGuardado, msg: 'Registro actualizado.', ok: 'si' });
} catch (error) {
  console.log(error);
}

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
