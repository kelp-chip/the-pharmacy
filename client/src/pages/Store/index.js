import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles/index.css";
import left_bottles from "./styles/images/left_bottles.svg";
import right_bottle from "./styles/images/right_bottle.svg";
import banner from "./styles/images/banner.svg";
import cart from "./styles/images/cart.svg";

import fakeData from "../../components/fakeData";
import AlcoholList from "./components/AlcoholList";

function Store({ drinks }) {
  return (
    <div>
      <header>
        <img className="banner" src={banner} alt="banner"></img>
        <div className="cart">
          <img className="cartIcon" src={cart} alt="cart"></img>
          <div className="circle">2</div>
        </div>
      </header>
      <div className="leftBottles">
        <img src={left_bottles} alt="background bottles"></img>
      </div>
      <div className="rightBottles">
        <img src={right_bottle} alt="background bottles"></img>
      </div>
      {/* <Link
        to={{
          pathname: "/order",
          state: fakeData.drinks,
        }}
      >
        Shopping Bag{" "}
      </Link> */}
      <AlcoholList drinks={fakeData.drinks} />
    </div>
  );
}

export default withRouter(Store);
