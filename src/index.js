import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "./database";
import recetasRouter from "./routes/recetas.routes";

const app = express();

app.set("port", process.env.PORT || 4002);

app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

//middelwares

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/apireceta", recetasRouter);
