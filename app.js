const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Product = require("./models/Product")

const products = require("./routes/products")

const {
  cors: { corsOrigin },
} = require("./utilities/secrets.json");

const app = express();

app.use(
  cors({
    origin: corsOrigin,
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*routes*/
app.use("/products", products);

/******/

app.listen(4000);