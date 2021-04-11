import "../styles/AlcoholList.css";
import Drink from "../components/Drink.jsx";
import { useState } from "react";

function AlcoholList({ cart, drinks, addToBag }) {
  return (
    <>
      <div className="drinksContainer">
        {drinks.map((drink, index) => {
          return (
            <Drink
              drink={drink}
              key={index}
              addToBag={addToBag}
            />
          );
        })}
      </div>
    </>
}

export default AlcoholList;
