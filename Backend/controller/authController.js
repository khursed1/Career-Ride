import Bcrypt from "bcrypt";
import { default as jwt, default as pkg } from "jsonwebtoken";
import { User } from "../model/authModel.js";

const accessTokenCookieOptions = {
  maxAge: 900000, // 15 mins
  httpOnly: true,
  sameSite: "none",
  secure: true,
};

export async function loginFunc(req, res) {
  try {
    const { username, password } = req.body;

    // Find the user
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User not found" });

    // Compare passwords
    const isPasswordValid = await Bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: "Invalid credentials" });

    // Generate a token
    const token = pkg.sign({ id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    const { password: _, ...userWithoutPassword } = user.toObject();

    res
      .cookie("accessToken", token, accessTokenCookieOptions)
      .status(200)
      .json({ message: "Login successful", user: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
}

export async function signupFunc(req, res) {
  try {
    const { name, username, password } = req.body;

    // check if user is already exists
    const user = await User.findOne({ username });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Hash the password
    const hashedPassword = await Bcrypt.hash(password, 10);

    // Save the user to the database
    const newUser = new User({ name, username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User registration failed" });
  }
}

export async function loginCheckFunc(req, res) {
  try {
    const { accessToken } = req.cookies;
    // console.log(accessToken);

    if (!accessToken) return res.json({ loggedIn: false });
    // console.log("first");
    const user = jwt.verify(accessToken, process.env.TOKEN_SECRET);

    res.json({ loggedIn: true, user });
  } catch (err) {
    // console.log(err);
    res.json({ loggedIn: false }).status(401);
  }
}
