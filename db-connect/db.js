const mongoose = require("mongoose");

// Note: dotenv is loaded in `index.js` early. We also load it here to
// be robust if db.connect is invoked directly from another script.
require('dotenv').config();

exports.connect = async () => {
  const uri = process.env.MONGO_URL || process.env.MONGODB_URI;
  if (!uri) {
    console.error('MongoDB connection string is missing. Set MONGO_URL in your .env file.');
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("Database connection established");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
};

//get

//post

//put

//delete

//