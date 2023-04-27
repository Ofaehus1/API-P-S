import  express  from "express";
const userSchema = mongoose.Schema({
  Dispositivo: {
    type: String,
    require: true,
    trim: true
  },
  IME: {
    type: Number,
    require: true,
    trim: true
  }
},{
  timestamps: true
});

const Usuario = mongoose.model('bd', userSchema);
export default Usuario;
