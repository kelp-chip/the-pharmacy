import { Link } from "react-router-dom";
import { useState } from 'react';
import "../styles/BagList.css";


import BagItem from './BagItem';

function BagList({ bag }) {
  console.log(bag);
  return (
    <div className="list-container">
      <div className="bag-list">
        <h2 className="bag-list-header">Beverages Ordered</h2>
        {bag && bag.map((drink, index) => (
          <BagItem drink={drink} key={index} />
        ))}
      </div>
      <div className="bag-total">
        <h3>Number of Items</h3>
        {/* {totalItems} */}
        <h3>Total Payment</h3>
        {/* {totalCost} */}
        <Link
          to={{
            pathname: "/confirm",
            state: bag
          }}
          className="confirm-order"
        > Confirm Order
        </Link>
      </div>
    </div>
  );
}

export default BagList;