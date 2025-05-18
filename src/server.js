import express from "express";
import redesolidariaRouter from "./router/redesolidaria.routes.js";
import localizacaoRoutes from "./router/localizacao.routes.js";
import { logEvents, logger } from "./middlewares/logger.middlewares.js";
import dotenv  from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.BACKEND_PORT || 3000

app.use(logger);
app.use(express.json());

//
app.use("/Redesolidaria", redesolidariaRouter);
app.use("/localizacao", localizacaoRoutes);

app.listen(PORT, () => {
  logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
});
