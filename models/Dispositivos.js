import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Dispositivo:
 *       type: object
 *       required:
 *         - Dispositivo
 *         - IME
 *       properties:
 *         Dispositivo:
 *           type: string
 *           description: Nombre del dispositivo.
 *             IME:
 *           type: number
 *           description: Número de IME.
 *       example:
 *         Dispositivo:Iphone 11
 *         IME: 123456789123456789
 */
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

const Dispositivo = mongoose.model("Dispositivo", userSchema);
export default Dispositivo;
