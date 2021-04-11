import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles/index.css";

import fakeData from "../../components/fakeData";
import AlcoholList from "./components/AlcoholList";
import Layout from "../../components/Layout/Layout";

function Store() {
  const [bag, setBag] = useState(
    JSON.parse(localStorage.getItem("luckysProhibitionBag")) || []
  );
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = async () => {
    let total = 0;
    for (let item of bag) {
      total += item.amount;
    }
    await setCartCount(total);
  };

  function addToBag({ name, price, amount }) {
    amount = Number(amount);
    bag.push({ name, price, amount });
    let localContext = JSON.stringify(bag);
    localStorage.setItem("luckysProhibitionBag", localContext);
  }

  return (
    <div>
      <Layout bag={bag} cartCount={cartCount}></Layout>
      <AlcoholList
        drinks={fakeData.drinks}
        addToBag={addToBag}
        incrementCartCount={incrementCartCount}
      />
    </div>
  );
}

export default withRouter(Store);
