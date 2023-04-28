import  express  from "express";
const userSchema = mongoose.Schema({
  nombresUsuario: {
    type: string,
    require: true,
    trim: true
  },
  celularUsuario: {
    type: number,
    require: true,
    trim: true
  }
},{
  timestamps: true
});

const Usuario = mongoose.model('bd', userSchema);
export default Usuario;
