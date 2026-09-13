// app.js
const express = require('express');
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

//old setup code 
/*const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.render("index", { links: links });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.js
app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});*/