const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db");
const Product = require("./models/Product");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

//enable all cors request
app.use(cors());

//body parser
app.use(express.json({ extended: false }));

//routes
app.get("/api/search/:family/:subfamily", cors(), async (req, res) => {
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

//test post route. Delete for production
app.post("/", async (req, res) => {
  let prod = new Product({
    name: "ronron",
    family: "tragos",
    subfamily: "rones",
    cost: "2",
    price: "8"
  });
  await prod.save();
  res.send("done");
});

app.listen(PORT);
