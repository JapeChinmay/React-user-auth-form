const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const User = require("./Model/user.model");

const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/user-login-auth");

app.post("/api/register", async (req, res) => {
  console.log(req.body);

  try {
    const user = await User.create({
      Firstname: req.body.Firstname,
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      res.json({ status: "ok", message: "user created " });
    }
  } catch (err) {
    res.json({ status: "err", message: "record already found", error: err });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  console.log("login : ", req.body);

  if (user) {
    try {
      const token = jwt.sign(
        {
          email: user.body.email,
          password: user.body.password,
        },
        "secret1212"
      );

      res.json({ status: "ok", message: token });
    } catch (err) {
      res.json({ status: "fail", message: "log in failed", error: err });
    }
  }
});

app.listen(1337, () => {
  console.log("started  on ");
});
