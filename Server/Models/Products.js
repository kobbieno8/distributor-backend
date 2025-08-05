const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    processing: {
      type: String,
      required: true,
    },
    descrption: {
      type: String,
      required: true,
    },
    altitude: {
      type: String,
      required: true,
    },
  
    profile: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", productSchema);
