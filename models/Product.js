const { DataTypes } = require("sequelize");
const sequelize = require("../utilities/database");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  family: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sub_family: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  eShop: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  sale: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Product;