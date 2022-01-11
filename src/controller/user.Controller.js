const Sequelize = require("sequelize");
const User = require("../models/user.Models");

const Op = Sequelize.Op;


const registerUser = async (req, res) => {
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then((response)=>{
        console.log(response)
        res.render("login.ejs")
    }).catch((error)=>{
        console.log(error)
        res.render("register.ejs")
    })
//   res.render("register.ejs");
};

const loginUser = async (req, res) => {
  res.render("login.ejs");
};

const getUsers = async (req, res) => {
  res.render("users.ejs");
};

const homePage = async (req, res) => {
  res.render("home.ejs", { name: "Manu" });
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
  homePage,
};

// router.get("/", (req, res) => {
//     res.render("index.ejs", { name: "Manu" });
//   });

//   app.get("/login", (req, res) => {
//     res.render("login.ejs");
//   });

//   app.post("/login", (req, res) => {
//     res.render("login.ejs");
//   });
// //   app.get("/users", (req, res) => {
// //     res.render("users.ejs");
// //   });

// //   app.post("/users", (req, res) => {
// //     res.render("users.ejs");
// //   });

//   app.get("/register", (req, res) => {
//     res.render("register.ejs");
//   });
//   app.post("/register", async (req, res) => {
//     try {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);
//       users.push({
//         id: Date.now().toString(),
//         name: req.body.name,
//         email: req.body.email,
//         password: hashedPassword,
//       });
//       res.redirect("/login");
//     } catch {
//       res.redirect("/register");
//     }
//     console.log(users)
//   });
