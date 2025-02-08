// Instantiate express
const express = require("express");
const http = require('http');
const cors = require("cors");

const app = express();

// Import dotenv to load .env data into process
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// For parsing JSON requests
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5174', 
  credentials: true // Optional, depending on your requirements
}));

// Connecting server to DB
require("./config/database").dbConnect();

// // Import routes and mount
const user = require("./routes/user");

app.use("/api/v1", user);


// Start server
app.listen(PORT, () => {
  console.log(`Server is UP and is running on port ${PORT}`);
});


