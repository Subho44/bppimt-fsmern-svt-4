const express = require("express");
const cors =  require("cors");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const employerouter = require("./routes/employeeroutes");
const authroutes = require("./routes/authroutes");


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectdb();

app.get("/" ,(req,res)=>{
    res.send("api is working");
});
app.use("/api/employees", employerouter);
app.use("/api/auth", authroutes);
const port = process.env.port;

app.listen(port, ()=>{
    console.log("server is running port 5600")
})