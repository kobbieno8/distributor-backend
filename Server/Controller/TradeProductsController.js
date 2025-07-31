const tradeSchema = require("../Models/TradeProduct");

const gettrade = async (req, res) => {
  try {
    const trade = await tradeSchema.find({}).sort({ createdAt: -1 });
    if (!trade) {
      return res.status(404).json({ message: "No products found" });
    }
    console.log("it works");
    res.status(200).json({ trade: trade });
  } catch (error) {
    console.log(error);
    console.log("waht product!");
  }
};

const addTradeProducts = async (req, res) => {
  console.log("logged");
  try {
    console.log("aiwhd");
    const { productname, descrption, qualities } = req.body;
    const myProduct = await tradeSchema.create({
      productname,
      descrption,
      qualities,
    });

    res.status(200).json(myProduct);
  } catch (error) {
    console.log("sup");
    console.log(error);
  }
};
module.exports = { addTradeProducts, gettrade };
