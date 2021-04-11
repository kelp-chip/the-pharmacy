import "../styles/AlcoholList.css";
import Drink from '../components/Drink.jsx'
import { useState } from 'react';

function AlcoholList({ cart, drinks, addToBag }) {
  return (
    <div>
      <h1>Welcome to the Pharmacy</h1>
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
  );
}

export default AlcoholList;
