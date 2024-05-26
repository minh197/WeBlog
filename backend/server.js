const express = require("express")
const cors = require("cors")
const sequelize = require("./sequalize")
const app = express(); 

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the travelblog application." });
});

// Test database connection route
app.get("/test-connection", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.send("Connection has been established successfully.");
  } catch (error) {
    res.status(500).send("Unable to connect to the database: " + error.message);
  }
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});