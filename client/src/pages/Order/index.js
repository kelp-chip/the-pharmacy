import { withRouter } from "react-router-dom";

import BagList from "./components/BagList";

function Order () {
  return (
    <div>
      <h1>Your Bag</h1>
      <p>Review your order below.</p>
    </div>
  );
}

export default withRouter(Order);