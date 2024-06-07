import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id, email } = req.body;

    // Validate request body
    if (!auth0Id || !email) {
      return res.status(400).json({ message: "auth0Id and email are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      return res.status(200).json(existingUser);
    }

    // Create new user
    const newUser = new User({ auth0Id, email });
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user"});
  }
};

export default {
  createCurrentUser,
};
