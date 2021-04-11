import { useState } from "react";
import { withRouter, Link } from "react-router-dom";

function Confirm(order) {
  const [orderNum, increaseOrder] = useState(1);

  return (
    <div>
      <h1>Thank you for ordering with us!</h1>
      <p>Your order has been received</p>
      <h3>Order No: {orderNum} </h3>
      <h3>{/*Amount of Items */} Items Ordered</h3>
      <h3>Total: {/* Total Cost */}</h3>
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
        >
          Back to the pharmacy
        </Link>
      </p>
    </div>
  );
}

//state: fakeData.drinks,

export default withRouter(Confirm);
