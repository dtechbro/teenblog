// server.js
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static("frontend"));

app.get("/getData", (req, res) => {
    res.json({ message: "We are cooking at the moment..." });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
