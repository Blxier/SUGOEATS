import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/userModels.js";

const router = express.Router();

// registration
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const CreatedUser = new UserModel({ username, password: hashedPassword });
  CreatedUser.save();
  res.json({ message: "User Registered Sucessfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({
      message: "The username or password you entered is incorrect",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({
      message: "The username or password you entered is incorrect",
    });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

export { router as userRouter };
