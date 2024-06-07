import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log("Connected to Database!")
    app.listen(7000,()=>{
        console.log("Server running on port 7000")
    });
    
})

const app=express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute) //any request with api/my/user forward to myUserRoute

