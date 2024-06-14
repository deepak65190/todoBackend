const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.model");
const userRoute = express.Router();

//register router
userRoute.post("/register", (req, res) => {
  try {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      res.send("fill all the field");
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send(err);
        } else {
          const userData = new userModel({ name, email, password: hash });
          console.log(userData);
          await userData.save();
          res.send("ok");
        }
      });
    }
  } catch (err) {
    console.log("something went wrong");
    res.send(err);
    console.log(err);
  }
});

//login route
userRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existData = await userModel.find({ email });
    console.log(existData)
    const hash = existData[0].password;
    bcrypt.compare(password, hash, (err, result) => {
      if (result) {
        const token = jwt.sign({ user_id: existData[0]._id }, "deepak");
        res.send(token);
      } else {
        res.send("wrong credentials");
      }
    });
  } catch (err) {
    res.send(err);
  }
});
module.exports =  {userRoute} ;
