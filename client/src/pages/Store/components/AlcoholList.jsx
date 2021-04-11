import "../styles/AlcoholList.css";
import Drink from "../components/Drink.jsx";
import { useState } from "react";

function AlcoholList({ drinks, addToBag, incrementCartCount }) {
  return (
    <>
      <div className="drinksContainer">
        {drinks.map((drink, index) => {
          return (
            <Drink
              drink={drink}
              key={index}
              addToBag={addToBag}
              incrementCartCount={incrementCartCount}
            />
          );
        })}
      </div>
    </>
  );
}

export default AlcoholList;
