import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles/index.css";
import Layout from "../../components/Layout/Layout";

import BagList from "./components/BagList";

function Order(props) {
  const parseBag = (oldBag, seq) => {
    if (seq == 1) {
      let gin = { name: "gin", total: 0, amount: 0 };
      let whiskey = { name: "whiskey", total: 0, amount: 0 };
      let moonshine = { name: "moonshine", total: 0, amount: 0 };
      let total = { amount: 0, cost: 0 };
      let output = [gin, whiskey, moonshine];
      oldBag.map((item) => {
        if (item.name == "gin") {
          gin.total += item.price;
          gin.amount += item.amount;
        } else if (item.name == "whiskey") {
          whiskey.total += item.price;
          whiskey.amount += item.amount;
        } else if (item.name == "moonshine") {
          moonshine.total += item.price;
          moonshine.amount += item.amount;
        }
      });
      return output;
    } else {
      let output = { amount: 0, cost: 0 };
      oldBag.map((item) => {
        if (item.name == "gin") {
          output.cost += item.price * item.amount;
          output.amount += item.amount;
        } else if (item.name == "whiskey") {
          output.cost += item.price * item.amount;
          output.amount += item.amount;
        } else if (item.name == "moonshine") {
          output.cost += item.price * item.amount;
          output.amount += item.amount;
        }
      });
      return output;
    }
  };

  const { state } = props.location;
  const newBag = parseBag(state.bag, 1);
  const totals = parseBag(state.bag);

  return (
    <>
      <Layout bag={state.bag} cartCount={state.cartCount} />
      <div className="bag-container">
        {state && state.bag.length > 0 ? (
          <>
            <BagList className="bag-list" bag={newBag} totals={totals} />
          </>
        ) : (
          <div className="empty-bag">
            <p>Your bag is empty.</p>
            <p>Click below to return to our shop.</p>
            <img
              src="https://res.cloudinary.com/dli6sknqy/image/upload/v1618148304/finger_tdppaq.svg"
              width="50px"
            ></img>
            <Link
              to={{
                pathname: "/store",
                state: state,
              }}
              className="store-return"
            >
              {" "}
              Shopping Bag
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default withRouter(Order);
