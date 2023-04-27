import  express  from "express";
const userSchema = mongoose.Schema({
  nombresUsuario: {
    type: String,
    require: true,
    trim: true
  },
  celularUsuario: {
    type: Number,
    require: true,
    trim: true
  }
},{
  timestamps: true
});

const Usuario = mongoose.model('bd', userSchema);
export default Usuario;
