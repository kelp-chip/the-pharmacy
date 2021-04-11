import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import fakeData from "../../components/fakeData";
import AlcoholList from "./components/AlcoholList";

function Store() {
  const [bag, setBag] = useState(
    JSON.parse(localStorage.getItem("luckysProhibitionBag")) || []
  );

  function addToBag({ name, price, amount }) {
    amount = Number(amount);
    bag.push({ name, price, amount });
    let localContext = JSON.stringify(bag);
    localStorage.setItem("luckysProhibitionBag", localContext);
  }

  return (
    <div>
      <h1>The Store</h1>
      <Link
        to={{
          pathname: "/order",
          state: { bag },
        }}
      >
        Shopping Bag
      </Link>
      <AlcoholList drinks={fakeData.drinks} bag={bag} addToBag={addToBag} />
    </div>
  );
}

export default withRouter(Store);
