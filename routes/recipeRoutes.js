import express from "express";
import recipeController from "../controllers/recipeController.js";

const router = express.Router();

router.get("/api/recipes", recipeController.getAll);
router.get("/api/recipes/:id", recipeController.getById);
router.post("/api/recipes", recipeController.createRecipe);
router.patch("/api/recipes/:id", recipeController.updateRecipe);
router.delete("/api/recipes/:id", recipeController.deleteRecipe);

export default router;
