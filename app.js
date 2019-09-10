const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const Order = require("./models/Order");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

//enable all cors request
app.use(cors());

//body parser
app.use(express.json({ extended: false }));

//routes
app.get("/api/search/:family/:subfamily", async (req, res) => {
  const { family, subfamily } = req.params;
  dataRequired = {};
  family !== "todos" ? (dataRequired.family = family) : null;
  subfamily !== "todos" ? (dataRequired.subfamily = subfamily) : null;
  try {
    let products = await Product.find(dataRequired);
    res.json(products);
  } catch (error) {
    res.status(500);
    res.json({
      error
    });
  }
});

app.post("/api/order", async (req, res) => {
  try {
    let order = new Order({
      ...req.body
    });
    await order.save();
    res.status(201).end();
  } catch (error) {
    res.status(500);
    res.json({
      error
    });
  }
});

app.listen(PORT);
