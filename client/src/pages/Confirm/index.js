import { useState } from "react";
import { withRouter } from "react-router-dom";

function Confirm(order){

  const [orderNum, increaseOrder] = useState(1);

  return (
    <div>
      <h1>Thank you for ordering with us!</h1>
      <p>Your order has been received</p>
      <h3>Order No: {orderNum} </h3>
      <h3>{/*Amount of Items */} Items Ordered</h3>
      <h3>Total: {/* Total Cost */}</h3>
      <p>Have any questions? Feel free to contact us at: </p>
    </div>
  );
}

//state: fakeData.drinks,

export default withRouter(Confirm);