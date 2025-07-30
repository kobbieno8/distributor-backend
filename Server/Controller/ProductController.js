const emailSchema = require("../Models/Email");
const productSchema = require("../Models/Products");

const getproduct = async (req, res) => {
  try {
    const products = await productSchema.find({}).sort({ createdAt: -1 });
    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json({ products: products });
  } catch (error) {
    console.log("waht product!");
  }
};

const addProduct = async (req, res) => {
  try {
    const { productname, descrption, altitude, flavor, grade, image } =
      req.body;
    const myProduct = await emailSchema.create({
      productname,
      descrption,
      altitude,
      flavor,
      grade,
      image,
    });

    res.status(200).json(myProduct);
  } catch (error) {
    console.log("sup");
  }
};
module.exports = { addProduct };
