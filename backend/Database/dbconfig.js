const mongoose = require("mongoose");

async function db() {
  try {
    const response = await mongoose.connect(process.env.DB_URI);
    if (response.connections.length > 0) {
      console.log("Database connection successful");
    } else {
      console.log("Could not establish connection");
    }
  } catch (error) { 
    console.log("Error connecting to database");
    console.error(error);
  }
}

module.exports = { db };