const emailSchema = require("../Models/Email");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await emailSchema.findOne({ email: email });
    if (password == user.password) {
      res.status(200);
    }
    if (!user) {
      return res.status(400).json({ error: "Invalid" });
    }
  } catch (error) {
    console.log("denied");
  }
};

const addUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const myuser = await emailSchema.create({ email, password });

    res.status(200).json(myuser);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { login, addUser };
