import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    unique: true,
  },
  imagen: {
    type: String,
    required: true,
    unique: true,
  },
  ingredientes: {
    type: String,
    required: true,
    unique: true,
  },
  pasos: {
    type: String,
    required: true,
    unique: true,
  },
});

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;
