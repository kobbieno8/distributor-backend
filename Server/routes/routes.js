const express = require("express");
const { addEmail } = require("../Controller/emailController");
const { mailer } = require("../Nodemailer_folder/Nodemailer");
// const { editProduct } = require("../Controller/editCoffeeprod");
const router = express.Router();

const {
  getproduct,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../Controller/ProductController");
const {
  gettrade,
  addTradeProducts,
  deleteTrade,
  updateTrade,
} = require("../Controller/TradeProductsController");
const { addUser, login } = require("../Controller/UserController");
const TradeProduct = require("../Models/TradeProduct");

router.post("/e", addEmail);

router.post("/send-email", async (req, res, next) => {
  try {
    console.log("send email works")
    await mailer(req, res);
  } catch (err) {
    next(err);
  }
});

router.get("/", (req, res) => {
  res.send("backend is running")
});

//Add
router.post("/post", addTradeProducts);
router.post("/poster", addProduct);
router.post("/adduser", addUser);

//Update
router.put("/products/:id", editProduct);
router.put("/trade/:id", updateTrade);

//Get
router.get("/products", getproduct);
router.get("/trade", gettrade);
router.post("/login", login);

//Delete
router.delete("/trade/:id", deleteTrade);
router.delete("/products/:id", deleteProduct);

module.exports = router;
