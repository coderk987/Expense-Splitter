import jwt from "jsonwebtoken";
import {users} from "../data/mongo.js"
import "dotenv/config";
import { ObjectId } from "mongodb";

async function authMiddleware(req, res, next){
    try{
        const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = await users.findOne({_id: new ObjectId(decoded.id)});
        next();
    }catch(err){
        return res.status(401).send("User Unauthorized");
    }
}

export default authMiddleware;