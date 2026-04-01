import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { Router } from "express";
import {users} from "../data/mongo.js";
import "dotenv/config";

const router = Router();

/*
1. body parse
2. verification email/username doesnt exist
3. hash password
4. make users object
5. return succesful registration message
*/
router.post("/signup", async (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const duplicateCheck = await users.findOne({
        $or: [
            { email: email },
            { username: username }
        ]
    });

    if(duplicateCheck){
        res.status(400).send("Username or Email Already Exists");
    }else{
        const hashedPassword = await bcrypt.hash(password, 10);
        users.insertOne({
            username: username,
            email: email,
            password: hashedPassword
        })

        res.status(200).send("User Succesfully Registered");
    }
})

router.post("/login", async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const userData = await users.findOne({email: email});

    if(!userData){
        res.status(400).send("Invalid Email");
    }else{
        const passwordValidation =await bcrypt.compare(password, userData.password);
        if(passwordValidation){
            const token = jwt.sign({id: userData._id}, process.env.JWT_SECRET, {expiresIn: "2h"});
            return res.status(200).json({token});
        }else{
            res.status(400).send("Invalid Password");
        }
    }
})

export default router