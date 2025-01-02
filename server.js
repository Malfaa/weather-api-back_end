import express from "express";
import dotenv from "dotenv";
import rotas from "./src/routes/dataRoutes.js";

dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());

//Usar as rotas de dados
app.use("/api", rotas);

//Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});