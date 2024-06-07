import express from "express";
import MyUserController from "../controllers/MyUserController";

// Create a new router instance
const router = express.Router();

// Define the route for creating a new user
router.post("/", MyUserController.createCurrentUser);

export default router;
