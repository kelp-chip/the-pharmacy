const { Model, DataTypes } = require("sequelize");
const sequelize = require("./connection.js");

module.exports = {
  User: sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tab: {
      type: DataTypes.INTEGER,
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
  }),
};
