const productSchema = require("../Models/Products");

const getproduct = async (req, res) => {
  try {
    const products = await productSchema.find({}).sort({ createdAt: -1 });
    if (!products) {
      console.log("here");
      return res.status(404).json({ message: "No products found" });
    } else res.status(200).json({ products: products });
  } catch (error) {
    console.log("waht product!");
  }
};

const addProduct = async (req, res) => {
  try {
    const { productname, descrption, altitude, flavor, grade, image } =
      req.body;
    const myProduct = await productSchema.create({
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
    console.log(error);
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const result = await productSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Update failed" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await productSchema.deleteOne({ _id: id });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: "delete failed" });
  }
};
module.exports = { addProduct, getproduct, editProduct, deleteProduct };
