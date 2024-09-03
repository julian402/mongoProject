import userController from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post("/api/users", userController.createUser);

export default router;
