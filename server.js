//importation express
const express = require("express");

//creation instance
const app = express();

//Require dotenv
require("dotenv").config();

//connect data base
const connectDB = require("./config/connectDB");
connectDB();

//JSOM format bech y5ali app tefhem format json
app.use(express.json())


//routes
app.use("/api/contacts",require("./Route/contact"))    //path initial du contact

//creation server
const port = process.env.PORT;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`server runing on ${port}`);
});
