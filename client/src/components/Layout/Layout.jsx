import "./index.css";
import left_bottles from "./images/left_bottles.svg";
import right_bottle from "./images/right_bottle.svg";
import banner from "./images/banner.svg";
import cart from "./images/cart.svg";
import { Link } from "react-router-dom";

function Layout({ bag, cartCount }) {
  return (
    <>
      <header>
        <img className="banner" src={banner} alt="banner"></img>
        <Link
          to={{
            pathname: "/order",
            state: { bag, cartCount },
          }}
        >
          <div className="cart">
            <img className="cartIcon" src={cart} alt="cart"></img>
            <div className="circle">{cartCount}</div>
          </div>
        </Link>
      </header>
      <div className="leftBottles">
        <img src={left_bottles} alt="background bottles"></img>
      </div>
      <div className="rightBottles">
        <img src={right_bottle} alt="background bottles"></img>
      </div>
    </>
  );
}

export default Layout;
