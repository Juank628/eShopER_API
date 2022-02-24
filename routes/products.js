const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/read", async (req, res, next) => {

    res.json({
        a: "a",
        b: "b"
    })

  /* try {
    const data = await Recipe.findAll({ include: VariableCost });
    res.json(data);
  } catch (err) {
    res.status(500);
    res.json(err);
  } */
});



module.exports = router;
