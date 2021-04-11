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
        <h3 className="order-note">Review your order below.</h3>
        <table border="1">
          <th>amt</th>
          <th>beverage</th>
          <th>price</th>
          <th> </th>
          {bag &&
            bag.map(
              (drink, index) =>
                drink.amount > 0 && (
                  <tr>
                    <BagItem drink={drink} key={index} />
                  </tr>
                )
            )}
        </table>
        <Link
          to={{
            pathname: "/store",
          }}
          className="store-return"
        >
          {" "}
          Return to Store
          <img
            src="https://res.cloudinary.com/dli6sknqy/image/upload/v1618148304/finger_tdppaq.svg"
            width="50px"
          ></img>
        </Link>
      </div>
      {/* <div className="bag-total">
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
      </div> */}
    </div>
  );
}

export default BagList;
