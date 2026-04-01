import jwt from "jsonwebtoken";
import {users} from "../data/mongo.js"
import "dotenv/config";

function authMiddleware(req, res, next){
    try{
        const decoded = jwt.verify(req.header.authorization. process.env.JWT_SECRET);
        req.user = users.findOne({id: decoded.id});
        next();
    }catch(err){
        res.status(401).send("User Unauthorized");
    }
}