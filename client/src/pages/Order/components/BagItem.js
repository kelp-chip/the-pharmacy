import { useState } from "react";
import "../styles/BagItem.css";

function BagItem({ drink }) {
  return (
    // <tr className="item-container">
    <>
      <td>{drink.amount}</td>
      <td>
        <span className="drink-name">{drink.name} </span>
      </td>
      <td>{drink.price}</td>
      <td>delete</td>
    </>
  );
}

export default BagItem;
