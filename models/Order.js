const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  purchaseList: {
    type: String,
    required: true
  }
});

module.exports = Order = mongoose.model("order", OrderSchema);
