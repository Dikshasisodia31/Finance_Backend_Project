const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/auth",authRoutes);

app.get("/",(req,res)=>{
    res.send("This is your dshboard");
})
app.listen(PORT,()=>{
    console.log("Server is working");
})