const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  },
  subfamily: {
    type: String,
    required: true
  },
  cost: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = Product = mongoose.model("product", ProductSchema);
