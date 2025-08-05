const userSchema = require("../Models/User");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (password == process.env.password && username == process.env.username) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      console.log(process.env.username);
      console.log(process.env.password);
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const addUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const myuser = await userSchema.create({ email, password });

    res.status(200).json(myuser);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { login, addUser };
