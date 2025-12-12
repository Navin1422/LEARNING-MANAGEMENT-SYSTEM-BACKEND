const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Db is connected");
  } catch (e) {
    console.log("Error in connecting to the db");
    console.log(e);
  }
};

//get

//post

//put

//delete
