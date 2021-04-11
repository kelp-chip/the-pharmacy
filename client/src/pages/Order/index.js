import { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import BagList from "./components/BagList";

function Order(props) {
  const parseBag = (oldBag) => {
    let gin = { name: 'gin', total: 0, amount: 0 }
    let whiskey = { name: 'whiskey', total: 0, amount: 0 }
    let moonshine = { name: 'moonshine', total: 0, amount: 0 }
    let output = [gin, whiskey, moonshine];
    oldBag.map((item) => {
      if (item.name == 'gin') {
        gin.total += item.price;
        gin.amount += item.amount;
      } else if (item.name == 'whiskey') {
        whiskey.total += item.price;
        whiskey.amount += item.amount;
      } else if (item.name == 'moonshine') {
        moonshine.total += item.price;
        moonshine.amount += item.amount;
      }
    })
    return output;
  }

  const { state } = props.location;
  const newBag = parseBag(state.bag);



  return (
    <div>
      <h1>Your Bag</h1>
      {state && state.bag.length > 0 ? (
        <>
          <p>Review your order below.</p>
          <BagList bag={newBag} />
        </>
      ) : (
        <div className="empty-bag">
          Your bag is empty. Click below to return to our shop.
          <Link
            to={{
              pathname: "/store",
              state: state
            }}
          >
            Shopping Bag
          </Link>
        </div>
      )}
    </div>
  );
}

export default withRouter(Order);