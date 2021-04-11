import { useState } from 'react';
import "../styles/BagItem.css";


function BagItem({ drink }) {
  return (
    <div className="item-container">
      <h3 className="drink-name">{drink.name}: </h3>
      <p>{drink.price}</p>
      <p>{drink.amount}</p>
      <button>Delete</button>
    </div>
  );
}

export default BagItem;