const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tradeSchema = new Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    descrption: {
      type: String,
      required: true,
    },
    qualities: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("trade", tradeSchema);
