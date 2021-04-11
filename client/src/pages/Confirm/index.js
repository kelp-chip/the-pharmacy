import { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import "./index.js";

function Confirm(props) {
  const [orderNum, increaseOrder] = useState(1);
  const { state } = props.location;
  localStorage.removeItem("luckysProhibitionBag");
  console.log(state);

  return (
    <div>
      <h1>Thank you for ordering with us!</h1>
      <p>Your order has been received</p>
      <h3>Order No: {orderNum} </h3>
      <h3>{state.totals.amount} Items Ordered</h3>
      <h3>Total: ${state.totals.cost}</h3>
      <p>
        Knock twice after hours then head to the back to pick up your order. Ask
        for Lucky.
      </p>
      <img
        src="https://res.cloudinary.com/dli6sknqy/image/upload/v1618141869/map_lgjf64.jpg"
        width="400px"
      ></img>
      <br></br>
      After hours:
      <br></br>
      Monday-Friday 6-11pm
      <br></br>
      Saturday-Sunday 4pm-2am
      <p>
        <Link
          to={{
            pathname: "/",
          }}
          className="store-return"
        >
          Back to the pharmacy
        </Link>
      </p>
    </div>
  );
}

export default withRouter(Confirm);
