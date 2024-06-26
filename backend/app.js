const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());
app.use(cookieParser());

// const users = require("./models/userSchema")

const PORT = process.env.PORT;

// const url =
//   "mongodb+srv://user1:alle1@cluster0.p3phjsx.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(
//   "mongodb+srv://user1:alle1@cluster0.p3phjsx.mongodb.net/?retryWrites=true&w=majority",
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("MongoDB connection successfull");
//     }
//   }
// );

//MIDDLEWARE

//it is already called before called by app
app.use(require("./router/auth"));
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = ['https://career-guru-new.vercel.app', 'https://careerguru-new.onrender.com', 'http://localhost:3000'];
  console.log("from middleware")
  const origin = req.headers.origin;
  console.log("from middleware",origin)
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

// // app.get("/", (req, res) => {
// //   res.send("this is app ");
// // });

// app.get("/about", middleware, (req, res) => {
//   console.log("This is about");
//   res.send("this is about ");
// });

// app.get("/sign", (req, res) => {
//   res.send("this is signup ");
// });

// console.log("Hello");

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
