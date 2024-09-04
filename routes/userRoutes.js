import userController from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.get("/api/users", userController.getAll);
router.post("/api/users", userController.createUser);

export default router;
