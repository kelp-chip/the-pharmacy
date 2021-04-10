import "../styles/AlcoholList.css";
import Drink from "../components/Drink.jsx";
import React, { useState } from "react";
const { drinks } = require("../components/fakeData");

function AlcoholList(props) {
  const [cart] = useState([]);

  function submitToCart(drinkName, drinkPrice, drinkAmt) {
    let price = parseFloat(drinkPrice.toFixed(2)).toFixed(2);
    let totalCost = (price * drinkAmt).toFixed(2);
    cart.push([drinkName, drinkAmt, totalCost]);
    console.log(cart);
  }

  return (
    <div>
      <h1>Welcome to the Pharmacy</h1>
      {drinks.map((drink, i) => {
        return (
          <Drink key={i} drink={drink} i={i} submitToCart={submitToCart} />
        );
      })}
    </div>
  );
}

export default AlcoholList;
