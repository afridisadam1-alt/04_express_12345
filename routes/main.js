const express = require("express");
const router = express.Router();

//after adding html file
const path = require("path");

// Define your routes here
router.get("/", (req, res) => res.send("Hello World!"));

router.get("/Ronald", (req, res) => 
  res.send("<h1>Wellcome Ronald</h1>")
);

router.get("/Jamima", (req, res) => 
  res.send("<h2>Welcome Jamima</h2>")
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
router.get("/a", (req, res) => {
  const filePath = path.join(__dirname, "../a.html"); // Since routes/main.js is one folder deeper
  res.sendFile(filePath);
});

// Export the router
module.exports = router;
