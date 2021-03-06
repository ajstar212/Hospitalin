const express = require("express");
const path = require("path");

const app = express();

// EJS
app.set("view engine", "ejs");

// Express body parser
const middleware = [
  express.static(path.join(__dirname, "public")),
  express.json(),
];
app.use(middleware);
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", require("./route/home"));

const PORT = process.env.PORT || 5000;
//Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
