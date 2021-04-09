const { Model, DataTypes } = require("sequelize");
const sequelize = require("./connection.js");

module.exports = {
  User: sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pseudonym: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tab: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }),
  Product: sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("medium"),
      allowNull: false,
    },
    images: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  }),
  Passcode: sequelize.define("passcode", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    passcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }),
};
