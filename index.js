const express = require("express");
const groupRouter = require("./routes/groups.js");

const app = express();

app.use(express.json());

app.use("/groups", groupRouter);

app.get("/", (req,res)=>{
    res.send("HELLO");
})

app.listen(3000);