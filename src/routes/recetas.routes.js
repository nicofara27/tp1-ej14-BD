import { Router } from "express";
import { check } from "express-validator";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/recetas.controllers";

const router = Router();

router
  .route("/recetas")
  .get(listarRecetas)
  .post(
    [
      check("nombreReceta", "El nombre de la receta es obligatorio")
        .notEmpty()
        .isLength({ min: 3, max: 60 })
        .withMessage(
          "El nombre de la receta debe tener entre 3 y 60 caracteres"
        ),
      check("imagen", "La imagen es obligatoria")
        .notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("Debe enviar una URL valida"),
      check("ingredientes", "Los ingredientes son obligatorios")
        .notEmpty()
        .isLength({ min: 10, max: 200 })
        .withMessage("Los ingredientes deben tener entre 10 y 200 caracteres"),
      check("pasos", "Los pasos son obligatorios")
        .notEmpty()
        .isLength({ min: 20, max: 1500 })
        .withMessage("Los ingredientes deben tener entre 20 y 1500 caracteres"),
    ],
    crearReceta
  );

router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put(editarReceta)
  .delete(borrarReceta);

export default router;
