import express from "express";
import redesolidariaRouter from "./router/redesolidaria.routes.js";
import { logEvents, logger } from "./middlewares/logger.middlewares.js";
import dotenv  from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.BACKEND_PORT || 3000

app.use(logger);
app.use(express.json());

app.use("/Redesolidaria", redesolidariaRouter);

app.listen(PORT, () => {
  logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
});
