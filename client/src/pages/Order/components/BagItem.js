import { useState } from "react";

function BagItem({ drink }) {
  return (
    <div>
      <p>no :)</p>
      <p>{drink.name}</p>
      <p>{drink.price}</p>
      <p>{drink.amount}</p>
      <button>Delete</button>
    </div>
  );
}

export default BagItem;
