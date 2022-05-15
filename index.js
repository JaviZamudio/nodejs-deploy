const express = require("express");
const cors = require("cors");
const path = require("path");
const ejs = require("ejs");

const app = express()

// Middleware
app.use(cors());

// Static files
app.use(express.static("public"));

//Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routes
app.get("/api/users", (req, res) => {
    res.json([
        {
            name: "John",
            age: 20
        },
        {
            name: "Jane",
            age: 21
        }
    ])
})
app.get("/profile", (req, res) => {
    res.render("profile", 
    {
        name: "John",
        age: 27
    });
})


//Server start
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});