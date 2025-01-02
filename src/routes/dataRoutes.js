import express from "express";
import { weatherMiddleware } from "../middlewares/dataMiddleware.js";
import { getWeather } from "../controllers/dataController.js"

const router = express.Router();

//Rota para obter dados
router.get("/weather", weatherMiddleware, getWeather);

export default router;