const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const port = process.env.PORT;
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());
app.use("/local", routes);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.con);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
dbConnect();
app.listen(port, () => {
  console.log("redman");
});
