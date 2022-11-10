import { validationResult } from "express-validator";
import Receta from "../models/Receta";

export const listarRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();

    res.status(200).json(recetas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar la lista",
    });
  }
};

export const obtenerReceta = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id);

    res.status(200).json(recetaBuscada);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al buscar la receta",
    });
  }
};

export const crearReceta = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      mensaje: "La receta se subio correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo subir correctamente",
    });
  }
};

export const editarReceta = async (req, res) => {
  try {
    await Receta.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      mensaje: "La receta fue actualizada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar editar la receta",
    });
  }
};

export const borrarReceta = async (req, res) => {
  try {
    await Receta.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La receta fue eliminada",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al borrar la receta",
    });
  }
};
