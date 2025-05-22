import express from "express";
import { swaggerSpec, swaggerUiServe, swaggerUiSetup } from "./swagger.js";
import dotenv from "dotenv";
import cors from "cors";
import redesolidariaRouter from "./router/redesolidaria.routes.js";
import localizacaoRoutes from "./router/localizacao.routes.js";
import organizacaoRoutes from "./router/organizacao.routes.js";
import voluntarioRoutes from "./router/voluntario.routes.js";
import doacaoRoutes from "./router/doacao.routes.js";
import { logEvents, logger } from "./middlewares/logger.middlewares.js";
import alertasRoutes from "./router/alerta.routes.js";
import impactoRoutes from "./router/impacto.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

// Middlewares globais
app.use(cors());
app.use(logger);
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUiServe, swaggerUiSetup(swaggerSpec));

// Rotas
app.use("/redesolidaria", redesolidariaRouter);
app.use("/localizacao", localizacaoRoutes);
app.use("/organizacoes", organizacaoRoutes);
app.use("/voluntarios", voluntarioRoutes);
app.use("/doacao", doacaoRoutes);
app.use("/alertas", alertasRoutes);
app.use("/impacto", impactoRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação Swagger em http://localhost:${PORT}/api-docs`);
});

export default app;
