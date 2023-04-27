import mongoose from 'mongoose';
const userSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true,
    },
    celular: {
      type: Number,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model('bd', userSchema);
export default Usuario;