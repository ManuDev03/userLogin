const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const sequelize = require("./src/config/dbconfig");
const userRouter = require("./src/router/user.Router");

// const users = [];
app.use(morgan("tiny"));
app.set("views", path.join(__dirname, "src/views"));
app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

//Routers
app.use("/users", userRouter);

//check database connection
sequelize
  .authenticate()
  .then((success) => {
    console.log("succesfully connected with database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
