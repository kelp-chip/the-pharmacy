import { useState } from 'react';

import BagItem from './BagItem';

function BagList({ bag }) {
  let totalItems = 0;
  let totalCost = 0;
  const calcTotal = function() {
    if (!bag.length) return 0;
    let output = 0;
    bag.map((item) => {
      output += Number(item[2]);
    })
    return output;
  }

  if (bag.length) {
    totalItems = bag.length;
    totalCost = calcTotal();
  }
  return (
    <div>
      {bag.map((drink, index) => (
        <BagItem drink={drink} key={index} />
      ))}
      <div className="bag-total">
        <h3>Number of Items</h3>
        {totalItems}
        <h3>Total Payment</h3>
        {totalCost}
      </div>
    </div>
  );
}

export default BagList;