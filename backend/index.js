const dotenv = require("dotenv"),
  express = require("express"),
  cors = require("cors"),
  corsOptions = require("./config/corsOptions"),
  { db } = require("./Database/dbconfig"),
  app = express(),
  PORT = 5000,
  bodyparser = require("body-parser"),
  routes = require("./controllers/userControls")

// Configure the DOTENV in your project
dotenv.config();

//JSON parsing middleware
app.use(express.json());

//configuring Express to use the body-parser middleware and specifically the json() parser.
app.use(bodyparser.json());


// INITIAING DB CONNECTION
db();

// Allowing all origins in Cross-Origin Resource Sharing (CORS) can pose a security risk and is generally not recommended
// app.use(cors(corsOptions));
app.use(cors());

// controllers route
app.use(routes)


app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
