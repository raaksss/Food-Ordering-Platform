import { Request, Response } from "express";
import User from "../models/user";

const getCurrentUser=async(req:Request, res:Response)=>{
try {
  const currentUser=await User.findOne({_id:req.userId});
  if(!currentUser){
    return res.status(404).json({message:"User not found"})
  }

  res.json(currentUser)
} catch (error) {
  console.log(error);
  return res.status(500).json({message:"Something went wrong."})
}
}


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

const updateCurrentUser=async (req: Request, res: Response) =>{
try {
  const{name,addressLine1, country, city}= req.body;
  const user=await User.findById(req.userId);

  if(!user){
    return res.status(404).json({message:"User not found"})
  }
  else{
    user.name=name;
    user.addressLine1=addressLine1;
    user.city=city;
    user.country=country;

   await user.save();
   res.send(user);
  }
} catch (error) {
  console.log(error);
  res.status(500).json({message:error})
}
}
export default {
  createCurrentUser,
  updateCurrentUser,
  getCurrentUser,
};

