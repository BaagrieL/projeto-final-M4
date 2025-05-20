import express from 'express';
import redesolidariaRouter from "./router/redesolidaria.routes.js";
import localizacao from './router/localizacao.routes.js';
import organizacao from './router/organizacao.routes.js';
import { logEvents, logger } from "./middlewares/logger.middlewares.js";
import dotenv  from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const PORT =  process.env.PORT || 3000;

app.use(logger);
app.use(express.json());

//
app.use("/redesolidaria", redesolidariaRouter);

//
app.use("/localizacao", localizacao);
app.use("/organizacao", organizacao);

app.listen(PORT, () => {
  logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
});
