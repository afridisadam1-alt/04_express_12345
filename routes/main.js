const express = require("express");
const router = express.Router();

//after adding html file
const path = require("path");

// Define your routes here
router.get("/", (req, res) => res.send("Welcome to Main page with Hello World!"));

router.get("/welcome/:name", (req, res) => {
  const userName = req.params.name; // extract 'name' from the URL
  res.send(`<h2>Welcome ${userName}</h2>`);
});

router.get("/Jamima", (req, res) => 
  res.send("<h2>Welcome Jamima</h2><p>Writing a paragraph about jamima in p tag</p>")
);

router.get("/date", (req, res) => {
  const currentDate = new Date().toLocaleString();
  res.send("Current Date and Time: " + currentDate);
});
router.get("/chain", 
  (req, res, next) => {
    console.log("First handler executed");
    req.customMessage = "This message came from the first handler.";
    next(); // Move to the next handler
  },
  (req, res) => {
    console.log("Second handler executed");
    res.send(`<h2>Chained route working!</h2><p>${req.customMessage}</p>`);
  }
);
//after adding html file
router.get("/file", (req, res) => {
  const filePath = path.join(__dirname, "../a.html"); // Since routes/main.js is one folder deeper
  res.sendFile(filePath);
});

// Export the router
module.exports = router;
