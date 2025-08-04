const express = require("express");
const { addEmail } = require("../Controller/emailController");
const { mailer } = require("../Nodemailer_folder/Nodemailer");
const {editProduct} = require("../Controller/editCoffeeprod")
const router = express.Router();

const { getproduct, addProduct } = require("../Controller/ProductController");
const {
  gettrade,
  addTradeProducts,
} = require("../Controller/TradeProductsController");
const { addUser } = require("../Controller/UserController");

router.post("/e", addEmail);

router.post("/send-email", async (req, res, next) => {
  try {
    await mailer(req, res);
  } catch (err) {
    next(err);
  }
});

router.get("/", (req, res) => {
  res.json({
    lang: [
      { t1: "roman", t2: "roman" },
      { t1: "redman", t2: "redman" },
    ],
  });
});
router.put("/products/:id",editProduct)
router.get("/products", getproduct);
router.post("/post", addTradeProducts);
router.post("/poster", addProduct);
router.post("/adduser", addUser);
router.get("/trade", gettrade);

module.exports = router;
