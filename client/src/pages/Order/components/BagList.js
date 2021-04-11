import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/BagList.css";

import BagItem from "./BagItem";

function BagList({ bag, totals }) {
  const data = { bag: bag, totals: totals };
  console.log(totals);
  return (
    <div className="list-container">
      <div className="bag-list">
        <h2 className="bag-list-header">Beverages Ordered</h2>
        <table border="1">
          {bag &&
            bag.map((drink, index) => (
              <tr>
                <BagItem drink={drink} key={index} />
              </tr>
            ))}
        </table>
        <Link
          to={{
            pathname: "/store",
          }}
          className="store-return"
        >
          {" "}
          Return to Store
        </Link>
      </div>
      <div className="bag-total">
        <h3>Number of Items</h3>
        {totals.amount}
        <h3>Total Payment</h3>
        {"$" + totals.cost}
        <Link
          to={{
            pathname: "/confirm",
            state: data,
          }}
          className="confirm-order"
        >
          {" "}
          Confirm Order
        </Link>
      </div>
    </div>
  );
}

export default BagList;
