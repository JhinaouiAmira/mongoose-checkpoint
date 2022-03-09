//require mongoose
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Database connected successfuly");
  } catch (error) {
    console.log("fail to connect");
  }
};
module.exports = connectDB;
