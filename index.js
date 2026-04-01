import express from "express";
import groupRouter from "./routes/groups.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/groups", groupRouter);
app.use("/auth", authRouter);

app.get("/", (req,res)=>{
    res.send("HELLO");
})

app.listen(3000);