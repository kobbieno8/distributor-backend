const tradeSchema = require("../Models/TradeProduct");

const gettrade = async (req, res) => {
  try {
    const trade = await tradeSchema.find({}).sort({ createdAt: -1 });
    if (!trade) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json({ trade: trade });
  } catch (error) {
    console.log(error);
  }
};

const addTradeProducts = async (req, res) => {
  console.log("logged");
  try {
    console.log("aiwhd");
    const { productname, descrption, qualities, tagline, image } = req.body;
    const myProduct = await tradeSchema.create({
      productname,
      descrption,
      qualities,
      tagline,
      image,
    });

    res.status(200).json(myProduct);
  } catch (error) {
    console.log("sup");
    console.log(error);
  }
};

const deleteTrade = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await tradeSchema.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

const updateTrade = async (req, res) => {
  const { id } = req.params;
  const { productname, descrption, qualities, tagline, image } = req.body;
  console.log(req);

  try {
    const updated = await tradeSchema.findByIdAndUpdate(
      id,
      {
        productname,
        descrption,
        qualities,
        tagline,
        image,
      },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Updated successfully", product: updated });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
};
module.exports = { addTradeProducts, gettrade, deleteTrade, updateTrade };
