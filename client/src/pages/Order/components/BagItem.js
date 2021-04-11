import { useState } from "react";
import "../styles/BagItem.css";

function BagItem({ drink }) {
  console.log(drink);
  return (
    <>
      <td>{drink.amount}</td>
      <td>
        <span className="drink-name">{drink.name} </span>
      </td>
      <td>{drink.total > 1 ? `$${drink.total}` : `${drink.total * 100}¢`}</td>
      <td>
        <strong>remove from cart</strong>
      </td>
    </>
    // : ''}
  );
}

export default BagItem;
