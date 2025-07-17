import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { authenticateAdmin } from "../middlewares/admin.middleware.js";

const authRoutes = Router();

// rotas públicas
authRoutes.post("/register", authController.register);
authRoutes.post("/login", authController.login);

// rotas privadas
authRoutes.get("/", authenticateToken, authController.getUsers);
authRoutes.get("/me", authenticateToken, authController.me);

// rotas admin
authRoutes.post("/register-admin", authenticateAdmin, authController.registerAdmin);

// router.post("/refresh-token", authController.refreshToken);

export default authRoutes;
