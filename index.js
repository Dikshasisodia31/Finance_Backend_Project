const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/textRoutes");
const recordRoutes = require("./routes/recordRoutes");
const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/auth",authRoutes);
app.use("/test",testRoutes);
app.use("/records",recordRoutes);

app.get("/",(req,res)=>{
    res.send("This is your dshboard");
})
app.listen(PORT,()=>{
    console.log("Server is working");
})