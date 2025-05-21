import { Router } from "express";
import { createDoador, getAllDoadores, getDoadorById } from "../service/redesolidaria.service.js";

const redesolidariaRouter = Router();

// Donor registration route
redesolidariaRouter.post("/doadores", async (req, res) => {
  const result = await createDoador(req.body);
  res.status(result.status).json(result);
});

// Get all donors
redesolidariaRouter.get("/doadores", async (req, res) => {
  const result = await getAllDoadores();
  res.status(result.status).json(result);
});

// Get donor by ID
redesolidariaRouter.get("/doadores/:id", async (req, res) => {
  const result = await getDoadorById(req.params.id);
  res.status(result.status).json(result);
});

export default redesolidariaRouter;
