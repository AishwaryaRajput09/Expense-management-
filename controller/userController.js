const { response } = require("express");
const userModel = require("../models/userModel");

//login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    //check if email and password is empty
    if (!user) {
      return res.status(400).send("User not found");
    }else{
        res.status(200).json({
            success: true,
            // message: "User found",
            user,
            });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const registerController = async (req,res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message, // or use a structured error object
    });
  }
};


//exporting controllers
module.exports = { registerController, loginController };


