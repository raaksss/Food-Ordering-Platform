import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

// Create a new router instance
const router = express.Router();

// Define the route for creating a new user
router.post("/", jwtCheck, MyUserController.createCurrentUser);

export default router;
